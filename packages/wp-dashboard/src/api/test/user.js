/*
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

/**
 * WordPress dependencies
 */

/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import getApiCallbacks from '../utils/getApiCallbacks';
import { GET_USER_OBJECT } from './_utils';

jest.mock('@wordpress/api-fetch');

describe('Data Sharing Opt-in', () => {
  const meta = {
    web_stories_tracking_optin: true,
    web_stories_media_optimization: false,
    web_stories_onboarding: {
      addBackgroundMedia: true,
      safeZone: true,
    },
  };

  const currentUser = GET_USER_OBJECT({
    meta,
  });

  const currentUserPath = '/web-stories/v1/users/me';

  const { toggleWebStoriesTrackingOptIn, toggleWebStoriesMediaOptimization } =
    getApiCallbacks({
      api: {
        currentUser: currentUserPath,
      },
    });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Check if request payload has opposite value of << currentUser.meta.web_stories_tracking_optin >>
  it('toggleWebStoriesTrackingOptIn: validate request payload', () => {
    toggleWebStoriesTrackingOptIn(currentUser);
    expect(apiFetch).toHaveBeenCalledWith(
      expect.objectContaining({
        path: currentUserPath,
        data: {
          meta: {
            web_stories_tracking_optin:
              !currentUser.meta.web_stories_tracking_optin,
          },
        },
      })
    );
  });

  // Check if request payload has opposite value of << currentUser.meta.web_stories_media_optimization >>
  it('toggleWebStoriesMediaOptimization: validate request payload', () => {
    toggleWebStoriesMediaOptimization(currentUser);
    expect(apiFetch).toHaveBeenCalledWith(
      expect.objectContaining({
        path: currentUserPath,
        data: {
          meta: {
            web_stories_media_optimization:
              !currentUser.meta.web_stories_media_optimization,
          },
        },
      })
    );
  });
});
