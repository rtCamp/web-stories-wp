#!/usr/bin/env bash

hosts_file="$GITHUB_WORKSPACE/.github/hosts.yml"
export PATH="$PATH:$COMPOSER_HOME/vendor/bin"
export PROJECT_ROOT="$(pwd)"
export HTDOCS="$HOME/htdocs"
export GITHUB_BRANCH=${GITHUB_REF##*heads/}
export CI_SCRIPT_OPTIONS="ci_script_options"


function init_checks() {

	# Check if branch is available
	if [[ "$GITHUB_REF" = "" ]]; then
		echo "\$GITHUB_REF is not set"
		exit 1
	fi

	# Check for SSH key if jump host is defined
	if [[ ! -z "$JUMPHOST_SERVER" ]]; then

		if [[ -z "$SSH_PRIVATE_KEY" ]]; then
			echo "Jump host configuration does not work with vault ssh signing."
			echo "SSH_PRIVATE_KEY secret needs to be added."
			echo "The SSH key should have access to the server as well as jumphost."
			exit 1
		fi
	fi

	# Exit if branch deletion detected
	if [[ "true" == $(jq --raw-output .deleted "$GITHUB_EVENT_PATH") ]]; then
		echo 'Branch deletion trigger found. Skipping deployment.'
		exit 78
	fi
}

function setup_hosts_file() {

	# Setup hosts file
	rsync -av "$hosts_file" /hosts.yml
	cat /hosts.yml
}

function check_branch_in_hosts_file() {

	match=0
	for branch in $(cat "$hosts_file" | shyaml keys); do
		[[ "$GITHUB_REF" = "refs/heads/$branch" ]] && \
		echo "$GITHUB_REF matches refs/heads/$branch" && \
		match=1
	done

	# Exit neutral if no match found
	if [[ "$match" -eq 0 ]]; then
		echo "$GITHUB_REF does not match with any given branch in 'hosts.yml'"
		exit 78
	fi
}

function setup_private_key() {

	if [[ -n "$SSH_PRIVATE_KEY" ]]; then
	echo "$SSH_PRIVATE_KEY" | tr -d '\r' > "$SSH_DIR/id_rsa"
	chmod 600 "$SSH_DIR/id_rsa"
	eval "$(ssh-agent -s)"
	ssh-add "$SSH_DIR/id_rsa"

	if [[ -n "$JUMPHOST_SERVER" ]]; then
		ssh-keyscan -H "$JUMPHOST_SERVER" >> /etc/ssh/known_hosts
	fi
	else
		# Generate a key-pair
		ssh-keygen -t rsa -b 4096 -C "GH-actions-ssh-deploy-key" -f "$HOME/.ssh/id_rsa" -N ""
	fi
}

function maybe_get_ssh_cert_from_vault() {

	# Get signed key from vault
	if [[ -n "$VAULT_GITHUB_TOKEN" ]]; then
		unset VAULT_TOKEN
		vault login -method=github token="$VAULT_GITHUB_TOKEN" > /dev/null
	fi

	if [[ -n "$VAULT_ADDR" ]]; then
		vault write -field=signed_key ssh-client-signer/sign/my-role public_key=@$HOME/.ssh/id_rsa.pub > $HOME/.ssh/signed-cert.pub
	fi
}

function configure_ssh_config() {

if [[ -z "$JUMPHOST_SERVER" ]]; then
	# Create ssh config file. `~/.ssh/config` does not work.
	cat > /etc/ssh/ssh_config <<EOL
Host $hostname
HostName $hostname
IdentityFile ${SSH_DIR}/signed-cert.pub
IdentityFile ${SSH_DIR}/id_rsa
User $ssh_user
EOL
else
	# Create ssh config file. `~/.ssh/config` does not work.
	cat > /etc/ssh/ssh_config <<EOL
Host jumphost
	HostName $JUMPHOST_SERVER
	UserKnownHostsFile /etc/ssh/known_hosts
	User $ssh_user

Host $hostname
	HostName $hostname
	ProxyJump jumphost
	UserKnownHostsFile /etc/ssh/known_hosts
	User $ssh_user
EOL
fi

}

function setup_ssh_access() {

	# get hostname and ssh user
	export hostname=$(cat "$hosts_file" | shyaml get-value "$GITHUB_BRANCH.hostname")
	export ssh_user=$(cat "$hosts_file" | shyaml get-value "$GITHUB_BRANCH.user")

	printf "[\e[0;34mNOTICE\e[0m] Setting up SSH access to server.\n"

	SSH_DIR="$HOME/.ssh"
	mkdir -p "$SSH_DIR"
	chmod 700 "$SSH_DIR"

	setup_private_key
	maybe_get_ssh_cert_from_vault
	configure_ssh_config
}

function maybe_install_submodules() {

	# Check and update submodules if any
	if [[ -f "$GITHUB_WORKSPACE/.gitmodules" ]]; then
		# add github's public key
		echo "|1|qPmmP7LVZ7Qbpk7AylmkfR0FApQ=|WUy1WS3F4qcr3R5Sc728778goPw= ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==" >> /etc/ssh/known_hosts

		identity_file=''
		if [[ -n "$SUBMODULE_DEPLOY_KEY" ]]; then
			echo "$SUBMODULE_DEPLOY_KEY" | tr -d '\r' > "$SSH_DIR/submodule_deploy_key"
			chmod 600 "$SSH_DIR/submodule_deploy_key"
			ssh-add "$SSH_DIR/submodule_deploy_key"
			identity_file="IdentityFile ${SSH_DIR}/submodule_deploy_key"
		fi

	# Setup config file for proper git cloning
	cat >> /etc/ssh/ssh_config <<EOL
Host github.com
HostName github.com
User git
UserKnownHostsFile /etc/ssh/known_hosts
${identity_file}
EOL
	git submodule update --init --recursive
fi
}

function setup_wordpress_files() {

	mkdir -p "$HTDOCS"
	cd "$HTDOCS"
	export build_root="$(pwd)"

	rsync -av "$GITHUB_WORKSPACE/" "$HTDOCS/"  > /dev/null
}

function deploy() {

	cd "$GITHUB_WORKSPACE"
	dep deploy "$GITHUB_BRANCH"
}

function main() {
	init_checks
	setup_hosts_file
	check_branch_in_hosts_file
	setup_ssh_access
	maybe_install_submodules
	setup_wordpress_files
	deploy
}

main
