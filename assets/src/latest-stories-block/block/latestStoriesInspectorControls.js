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
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * WordPress dependencies
 */
import { __, _x, sprintf } from '@wordpress/i18n';
import {
  TextControl,
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  Notice,
} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';
import { select } from '@wordpress/data';

/**
 * Internal dependencies
 */
import AuthorSelection from './authorSelection';

/**
 * LatestStoriesInspectorControls props.
 *
 * @typedef LatestStoriesInspectorControlsProps
 *
 * @property {string}   viewType             String indicator of active view type.
 * @property {number}   numOfStories         Number indicator of maximum number of stories to show.
 * @property {number}   numOfColumns         Number indicator of number of columns in grid view type.
 * @property {string}   orderByValue         String indicator of stories sorting.
 * @property {boolean}  isShowingTitle       Whether or not to display story's title.
 * @property {boolean}  isShowingDate        Whether or not to display story's date.
 * @property {boolean}  isShowingAuthor      Whether or not to display story's author.
 * @property {boolean}  isShowingViewAll     Whether or not to display stories archive link.
 * @property {string}   viewAllLinkLabel     Archive link's label.
 * @property {boolean}  isShowingStoryPlayer Whether or not to display story's cover image.
 * @property {()=>void} setAttributes        Callable function for saving attribute values.
 * @property {Array}    authors              An array of authors objects which are currently selected.
 * @property {boolean}  imageOnRight         Whether or not to display images on right side in list view type.
 * @property {boolean}  isStyleSquared       Set sharp or rounded corner for story cards in list view
 */

/**
 * LatestStoriesInspectorControls component. Renders InspectorControls of the block.
 *
 * @param {LatestStoriesInspectorControlsProps} props Component props.
 * @return {*} JSX markup.
 */
const LatestStoriesInspectorControls = (props) => {
  const {
    viewType,
    numOfStories,
    numOfColumns,
    orderByValue,
    isShowingTitle,
    isShowingDate,
    isShowingAuthor,
    isShowingViewAll,
    viewAllLinkLabel,
    isShowingStoryPlayer,
    setAttributes,
    authors,
    imageOnRight,
    isStyleSquared,
  } = props;

  const orderByOptions = [
    { label: __('Newest to oldest', 'web-stories'), value: '' },
    { label: __('Oldest to newest', 'web-stories'), value: 'old-to-new' },
    {
      label: _x('A -> Z', 'Sorting order', 'web-stories'),
      value: 'alphabetical',
    },
    {
      label: _x('Z -> A', 'Sorting order', 'web-stories'),
      value: 'reverse-alphabetical',
    },
    { label: __('Random Stories', 'web-stories'), value: 'random' },
  ];

  const previewLink = select('core/editor').getEditedPostPreviewLink();
  const carouselMessage = sprintf(
    /* Translators: Carousel informational message. 1: Preview link. */
    __(
      `<i><b>Note:</b> Carousel view's functionality will not work in Editor. <a target="__blank" href="%1$s">Preview</a> post to see it in action.</i>`,
      'web-stories'
    ),
    previewLink
  );

  return (
    <InspectorControls>
      <PanelBody
        className="latest-stories-settings"
        title={__('Story settings', 'web-stories')}
      >
        {'carousel' === viewType && (
          <Notice
            className="latest-stories-carousel-message"
            isDismissible={false}
            status="warning"
          >
            <RawHTML>{carouselMessage}</RawHTML>
          </Notice>
        )}
        <ToggleControl
          className={'grid' !== viewType ? 'is-disabled' : ''}
          label={__('Replace cover image with story player', 'web-stories')}
          checked={'grid' !== viewType ? false : isShowingStoryPlayer}
          onChange={() => {
            if ('grid' === viewType) {
              setAttributes({ isShowingStoryPlayer: !isShowingStoryPlayer });
            }
          }}
        />
        <ToggleControl
          label={__('Show title', 'web-stories')}
          checked={isShowingTitle}
          onChange={() => setAttributes({ isShowingTitle: !isShowingTitle })}
        />
        <ToggleControl
          className={'circles' === viewType ? 'is-disabled' : ''}
          label={__('Show date', 'web-stories')}
          checked={'circles' === viewType ? false : isShowingDate}
          onChange={() => {
            if ('circles' !== viewType) {
              setAttributes({ isShowingDate: !isShowingDate });
            }
          }}
        />
        <ToggleControl
          className={'circles' === viewType ? 'is-disabled' : ''}
          label={__('Show author', 'web-stories')}
          checked={'circles' === viewType ? false : isShowingAuthor}
          onChange={() => {
            if ('circles' !== viewType) {
              setAttributes({ isShowingAuthor: !isShowingAuthor });
            }
          }}
        />
        {'list' === viewType && (
          <ToggleControl
            label={__('Show image on right', 'web-stories')}
            checked={imageOnRight}
            onChange={() => {
              setAttributes({ imageOnRight: !imageOnRight });
            }}
          />
        )}
        {'circles' !== viewType && !isShowingStoryPlayer && (
          <ToggleControl
            label={__('Show square corners', 'web-stories')}
            checked={isStyleSquared}
            onChange={() => {
              setAttributes({ isStyleSquared: !isStyleSquared });
            }}
          />
        )}
        <ToggleControl
          label={__("Show 'View All Stories' link", 'web-stories')}
          checked={isShowingViewAll}
          onChange={() =>
            setAttributes({ isShowingViewAll: !isShowingViewAll })
          }
        />
        {isShowingViewAll && (
          <TextControl
            label={__("'View All Stories' Link label", 'web-stories')}
            value={viewAllLinkLabel}
            placeholder={__('View All Stories', 'web-stories')}
            onChange={(newLabel) =>
              setAttributes({ viewAllLinkLabel: newLabel })
            }
          />
        )}
      </PanelBody>
      <PanelBody title={__('Sorting & Filtering', 'web-stories')}>
        <RangeControl
          label={__('Number of stories', 'web-stories')}
          value={numOfStories}
          onChange={(updatedNumOfStories) =>
            setAttributes({ numOfStories: updatedNumOfStories })
          }
          min={1}
          max={20}
          step={1}
        />
        {'grid' === viewType && (
          <RangeControl
            label={__('Number of columns', 'web-stories')}
            value={numOfColumns}
            onChange={(updatedNumOfColumns) =>
              setAttributes({ numOfColumns: updatedNumOfColumns })
            }
            min={1}
            max={4}
            step={1}
          />
        )}
        <SelectControl
          label={__('Order by', 'web-stories')}
          options={orderByOptions}
          value={orderByValue}
          onChange={(selection) => setAttributes({ orderByValue: selection })}
        />
        <AuthorSelection authors={authors} setAttributes={setAttributes} />
      </PanelBody>
    </InspectorControls>
  );
};

LatestStoriesInspectorControls.propTypes = {
  viewType: PropTypes.string,
  numOfStories: PropTypes.number,
  numOfColumns: PropTypes.number,
  orderByValue: PropTypes.string,
  isShowingTitle: PropTypes.bool,
  isShowingDate: PropTypes.bool,
  isShowingAuthor: PropTypes.bool,
  isShowingViewAll: PropTypes.bool,
  viewAllLinkLabel: PropTypes.string,
  isShowingStoryPlayer: PropTypes.bool,
  setAttributes: PropTypes.func.isRequired,
  authors: PropTypes.array,
  imageOnRight: PropTypes.bool,
  isStyleSquared: PropTypes.bool,
};

export default LatestStoriesInspectorControls;
