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

export default function reshapeStoryObject(originalStoryData) {
  const {
    id,
    title,
    status,
    date,
    date_gmt,
    modified,
    modified_gmt,
    link,
    featured_media_url: featuredMediaUrl,
    preview_link: previewLink,
    edit_link: editStoryLink,
    story_data: storyData,
    _embedded: {
      author = [{ name: '' }],
      'wp:lock': lock = [{ locked: false }],
      'wp:lockuser': lockUser = [{ id: 0, name: '', avatar_urls: {} }],
    } = {},
  } = originalStoryData;
  if (!Array.isArray(storyData.pages) || !id || storyData.pages.length === 0) {
    return null;
  }

  return {
    id,
    status,
    title: title.raw,
    created: date,
    created_gmt: `${date_gmt}Z`,
    modified,
    modified_gmt: `${modified_gmt}Z`,
    author: author[0].name,
    locked: lock[0]?.locked,
    lockUser: {
      id: lockUser[0].id,
      name: lockUser[0].name,
      avatar: lockUser[0].avatar_urls['24'] || null,
    },
    bottomTargetAction: editStoryLink,
    featuredMediaUrl,
    editStoryLink,
    previewLink,
    link,
    originalStoryData,
  };
}
