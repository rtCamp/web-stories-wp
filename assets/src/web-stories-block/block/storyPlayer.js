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
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import { RawHTML } from '@wordpress/element';
import { dateI18n, format, __experimentalGetSettings } from '@wordpress/date';

function StoryPlayer({
  title,
  poster,
  author,
  date,
  isShowingAuthor,
  isShowingDate,
  isShowingTitle,
  imageOnRight,
  sizeOfCircles,
}) {
  const singleStoryClasses = classNames('web-stories__story-wrapper');
  const imageAlignmentClass = classNames('web-stories__inner-wrapper', {
    [`image-align-right`]: imageOnRight,
    [`image-align-left`]: !imageOnRight,
  });
  const hasContentOverlay = isShowingTitle || isShowingAuthor || isShowingDate;
  const dateFormat = __experimentalGetSettings().formats.date;

  return (
    <div className="web-stories__controller">
      <div className={singleStoryClasses}>
        <div className={imageAlignmentClass}>
          <div
            className="web-stories__story-placeholder"
            style={{
              backgroundImage: poster ? `url('${poster}')` : undefined,
              '--size': `${sizeOfCircles}px`,
            }}
          />
          {hasContentOverlay && (
            <div className="story-content-overlay web-stories__story-content-overlay">
              {isShowingTitle && (
                <div className="story-content-overlay__title">
                  {title ? <RawHTML>{title}</RawHTML> : ''}
                </div>
              )}
              <div className="story-content-overlay__author-date">
                {isShowingAuthor && (
                  <div className="story-content-overlay__author">{`By ${author}`}</div>
                )}
                {isShowingDate && (
                  <time
                    dateTime={format('c', date)}
                    className="story-content-overlay__date"
                  >
                    {`On ${dateI18n(dateFormat, date)}`}
                  </time>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

StoryPlayer.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  isShowingAuthor: PropTypes.bool,
  isShowingDate: PropTypes.bool,
  isShowingTitle: PropTypes.bool,
  imageOnRight: PropTypes.bool,
  sizeOfCircles: PropTypes.number,
};

export default StoryPlayer;
