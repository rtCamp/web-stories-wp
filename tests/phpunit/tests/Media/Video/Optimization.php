<?php
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace Google\Web_Stories\Tests\Media\Video;

use Google\Web_Stories\Tests\Test_Case;

/**
 * @coversDefaultClass \Google\Web_Stories\Media\Video\Optimization
 */
class Optimization extends Test_Case {
	/**
	 * @covers ::register
	 */
	public function test_register() {
		$media = new \Google\Web_Stories\Media\Video\Optimization();
		$media->register();

		$this->assertTrue( registered_meta_key_exists( 'post', \Google\Web_Stories\Media\Video\Optimization::OPTIMIZED_ID_POST_META_KEY, 'attachment' ) );
	}
}
