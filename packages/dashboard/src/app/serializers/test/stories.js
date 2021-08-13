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
 * Internal dependencies
 */
import reshapeStoryObject from '../stories';
import { REST_LINKS } from '../../../constants';

describe('reshapeStoryObject', () => {
  it('should return object', () => {
    const responseObj = {
      id: 27,
      date: '2020-03-26T20:57:24',
      guid: {
        rendered: 'http://localhost:8899/?post_type=web-story&#038;p=27',
      },
      modified: '2020-03-26T21:42:14',
      slug: '',
      status: 'draft',
      type: 'web-story',
      link: 'http://localhost:8899/?post_type=web-story&p=27',
      title: { raw: 'Carlos Draft' },
      content: {
        rendered: `<p><html amp="" lang="en"><head><meta charSet="utf…></amp-story-page></amp-story></body></html></p>`,
        protected: false,
      },
      excerpt: { rendered: '', protected: false },
      author: 1,
      featured_media: 0,
      featured_media_url: 'http://localhost:8899/wp-content/uploads/poster.jpg',
      preview_link: 'http://localhost:8899/preview/27',
      edit_link: 'http://localhost:8899/edit/27',
      template: '',
      categories: [],
      tags: [],
      story_data: { pages: [{ id: 0, elements: [] }] },
      _embedded: {
        'wp:featuredmedia': [
          {
            id: 33,
            url: 'http://localhost:8899/wp-content/uploads/poster.jpg',
          },
        ],
        author: [{ id: 1, name: 'admin' }],
        'wp:lock': [{ locked: true, time: '1628506372', user: 1 }],
        'wp:lockuser': [
          {
            id: 1,
            name: 'admin',
            url: 'http://localhost:8899',
            description: '',
            link: 'http://localhost:8899/author/admin',
            avatar_urls: {
              24: 'http://2.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=24&d=mm&r=g',
              48: 'http://2.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=48&d=mm&r=g',
              96: 'http://2.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=96&d=mm&r=g',
            },
          },
        ],
      },
    };

    const reshapedObj = reshapeStoryObject(responseObj);
    expect(reshapedObj).toMatchObject({
      author: 'admin',
      bottomTargetAction: 'http://localhost:8899/edit/27',
      created: '2020-03-26T20:57:24',
      created_gmt: 'undefinedZ',
      editStoryLink: 'http://localhost:8899/edit/27',
      featuredMediaUrl: 'http://localhost:8899/wp-content/uploads/poster.jpg',
      id: 27,
      link: 'http://localhost:8899/?post_type=web-story&p=27',
      lockUser: {
        avatar:
          'http://2.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=96&d=mm&r=g',
        id: 1,
        name: 'admin',
      },
      locked: true,
      modified: '2020-03-26T21:42:14',
      modified_gmt: 'undefinedZ',
      originalStoryData: {
        _embedded: {
          author: [{ id: 1, name: 'admin' }],
          'wp:featuredmedia': [
            {
              id: 33,
              url: 'http://localhost:8899/wp-content/uploads/poster.jpg',
            },
          ],
        },
        author: 1,
        categories: [],
        content: {
          protected: false,
          rendered:
            '<p><html amp="" lang="en"><head><meta charSet="utf…></amp-story-page></amp-story></body></html></p>',
        },
        date: '2020-03-26T20:57:24',
        excerpt: { protected: false, rendered: '' },
        featured_media: 0,
        guid: {
          rendered: 'http://localhost:8899/?post_type=web-story&#038;p=27',
        },
        id: 27,
        link: 'http://localhost:8899/?post_type=web-story&p=27',
        modified: '2020-03-26T21:42:14',
        slug: '',
        status: 'draft',
        story_data: { pages: [{ elements: [], id: 0 }] },
        tags: [],
        template: '',
        title: { raw: 'Carlos Draft' },
        type: 'web-story',
      },
      previewLink: 'http://localhost:8899/preview/27',
      status: 'draft',
      title: 'Carlos Draft',
    });
  });

  it('should return object without avatar', () => {
    const responseObj = {
      id: 27,
      date: '2020-03-26T20:57:24',
      guid: {
        rendered: 'http://localhost:8899/?post_type=web-story&#038;p=27',
      },
      modified: '2020-03-26T21:42:14',
      slug: '',
      status: 'draft',
      type: 'web-story',
      link: 'http://localhost:8899/?post_type=web-story&p=27',
      title: { raw: 'Carlos Draft' },
      content: {
        rendered: `<p><html amp="" lang="en"><head><meta charSet="utf…></amp-story-page></amp-story></body></html></p>`,
        protected: false,
      },
      excerpt: { rendered: '', protected: false },
      author: 1,
      featured_media: 0,
      featured_media_url: 'http://localhost:8899/wp-content/uploads/poster.jpg',
      preview_link: 'http://localhost:8899/preview/27',
      edit_link: 'http://localhost:8899/edit/27',
      template: '',
      categories: [],
      tags: [],
      story_data: { pages: [{ id: 0, elements: [] }] },
      _embedded: {
        'wp:featuredmedia': [
          {
            id: 33,
            url: 'http://localhost:8899/wp-content/uploads/poster.jpg',
          },
        ],
        author: [{ id: 1, name: 'admin' }],
        'wp:lock': [{ locked: true, time: '1628506372', user: 1 }],
        'wp:lockuser': [
          {
            id: 1,
            name: 'admin',
            url: 'http://localhost:8899',
            description: '',
            link: 'http://localhost:8899/author/admin',
          },
        ],
      },
    };

    const reshapedObj = reshapeStoryObject(responseObj);
    expect(reshapedObj).toMatchObject({
      author: 'admin',
      bottomTargetAction: 'http://localhost:8899/edit/27',
      created: '2020-03-26T20:57:24',
      created_gmt: 'undefinedZ',
      editStoryLink: 'http://localhost:8899/edit/27',
      featuredMediaUrl: 'http://localhost:8899/wp-content/uploads/poster.jpg',
      id: 27,
      link: 'http://localhost:8899/?post_type=web-story&p=27',
      lockUser: {
        avatar: null,
        id: 1,
        name: 'admin',
      },
      locked: true,
      modified: '2020-03-26T21:42:14',
      modified_gmt: 'undefinedZ',
      originalStoryData: {
        _embedded: {
          author: [{ id: 1, name: 'admin' }],
          'wp:featuredmedia': [
            {
              id: 33,
              url: 'http://localhost:8899/wp-content/uploads/poster.jpg',
            },
          ],
        },
        author: 1,
        categories: [],
        content: {
          protected: false,
          rendered:
            '<p><html amp="" lang="en"><head><meta charSet="utf…></amp-story-page></amp-story></body></html></p>',
        },
        date: '2020-03-26T20:57:24',
        excerpt: { protected: false, rendered: '' },
        featured_media: 0,
        guid: {
          rendered: 'http://localhost:8899/?post_type=web-story&#038;p=27',
        },
        id: 27,
        link: 'http://localhost:8899/?post_type=web-story&p=27',
        modified: '2020-03-26T21:42:14',
        slug: '',
        status: 'draft',
        story_data: { pages: [{ elements: [], id: 0 }] },
        tags: [],
        template: '',
        title: { raw: 'Carlos Draft' },
        type: 'web-story',
      },
      previewLink: 'http://localhost:8899/preview/27',
      status: 'draft',
      title: 'Carlos Draft',
    });
  });

  it('should return null if the ID is missing', () => {
    const responseObj = {
      date: '2020-03-26T20:57:24',
      guid: {
        rendered: 'http://localhost:8899/?post_type=web-story&#038;p=27',
      },
      modified: '2020-03-26T21:42:14',
      slug: '',
      status: 'draft',
      type: 'web-story',
      link: 'http://localhost:8899/?post_type=web-story&p=27',
      title: { raw: 'Carlos Draft' },
      content: {
        rendered: `<p><html amp="" lang="en"><head><meta charSet="utf…></amp-story-page></amp-story></body></html></p>`,
        protected: false,
      },
      excerpt: { rendered: '', protected: false },
      author: 1,
      featured_media: 0,
      template: '',
      categories: [],
      tags: [],
      story_data: { pages: [{ id: 0, elements: [] }] },
      _embedded: {
        'wp:featuredmedia': [{ id: 0, url: '' }],
        author: [{ id: 1, name: 'admin' }],
      },
    };

    const reshapedObj = reshapeStoryObject(responseObj);
    expect(reshapedObj).toBeNull();
  });

  it('should return null if the story has no pages', () => {
    const responseObj = {
      id: 27,
      date: '2020-03-26T20:57:24',
      guid: {
        rendered: 'http://localhost:8899/?post_type=web-story&#038;p=27',
      },
      modified: '2020-03-26T21:42:14',
      slug: '',
      status: 'draft',
      type: 'web-story',
      link: 'http://localhost:8899/?post_type=web-story&p=27',
      title: { raw: 'Carlos Draft' },
      content: {
        rendered: `<p><html amp="" lang="en"><head><meta charSet="utf…></amp-story-page></amp-story></body></html></p>`,
        protected: false,
      },
      excerpt: { rendered: '', protected: false },
      author: 1,
      featured_media: 0,
      template: '',
      categories: [],
      tags: [],
      story_data: { pages: [] },
      _embedded: {
        'wp:featuredmedia': [{ id: 0, url: '' }],
        author: [{ id: 1, name: 'admin' }],
      },
    };

    const reshapedObj = reshapeStoryObject(responseObj);
    expect(reshapedObj).toBeNull();
  });

  it('should return capabilities', () => {
    const responseObj = {
      id: 27,
      date: '2020-03-26T20:57:24',
      guid: {
        rendered: 'http://localhost:8899/?post_type=web-story&#038;p=27',
      },
      modified: '2020-03-26T21:42:14',
      slug: '',
      status: 'draft',
      type: 'web-story',
      link: 'http://localhost:8899/?post_type=web-story&p=27',
      title: { raw: 'Carlos Draft' },
      content: {
        rendered: `<p><html amp="" lang="en"><head><meta charSet="utf…></amp-story-page></amp-story></body></html></p>`,
        protected: false,
      },
      excerpt: { rendered: '', protected: false },
      author: 1,
      featured_media: 0,
      template: '',
      categories: [],
      tags: [],
      story_data: { pages: [{ id: 0, elements: [] }] },
      _embedded: {
        'wp:featuredmedia': [{ id: 0, url: '' }],
        author: [{ id: 1, name: 'admin' }],
      },
      _links: {
        [REST_LINKS.EDIT]: [
          {
            href: 'http://localhost:8899/wp-json/web-stories/v1/web-story/163',
          },
        ],
        [REST_LINKS.DELETE]: [
          {
            href: 'http://localhost:8899/wp-json/web-stories/v1/web-story/163',
          },
        ],
      },
    };

    const reshapedObj = reshapeStoryObject(responseObj);
    expect(reshapedObj.capabilities.hasDeleteAction).toBeTrue();
    expect(reshapedObj.capabilities.hasEditAction).toBeTrue();
  });
});
