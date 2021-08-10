/*
 * Copyright 2021 Google LLC
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
import { _x } from '@web-stories-wp/i18n';
import PropTypes from 'prop-types';

const title = _x('Curved Arrow', 'sticker name', 'web-stories');

function CurvedArrow({ style }) {
  return (
    <svg
      style={style}
      viewBox="0 0 21 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.1679 49.1312L19.0613 45.477L18.8983 45.5263L19.9523 49.0068L16.4112 49.8342L16.4499 50L20.1679 49.1312Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7609 47.0622C16.2977 46.786 15.8274 46.4905 15.3528 46.1758L15.2587 46.3176C15.7356 46.6339 16.2082 46.9309 16.6738 47.2084L16.7609 47.0622ZM18.9535 48.255C18.7113 48.1361 18.4655 48.0111 18.2166 47.8798L18.1372 48.0305C18.3875 48.1624 18.6348 48.2882 18.8785 48.4078L18.9535 48.255ZM13.9837 45.222C13.5426 44.8995 13.0999 44.5609 12.6578 44.2065L12.5513 44.3393C12.9954 44.6954 13.4401 45.0354 13.8833 45.3594L13.9837 45.222ZM11.3797 43.1345C10.9676 42.773 10.5578 42.3976 10.152 42.0084L10.0342 42.1313C10.4418 42.5222 10.8535 42.8993 11.2674 43.2625L11.3797 43.1345ZM8.97551 40.8279C8.59589 40.4293 8.22154 40.0182 7.85397 39.5946L7.72538 39.7062C8.09471 40.1318 8.47084 40.5449 8.85223 40.9453L8.97551 40.8279ZM6.79152 38.3099C6.45029 37.8766 6.11682 37.4318 5.79247 36.9755L5.6537 37.0741C5.97971 37.5327 6.31486 37.9798 6.65776 38.4153L6.79152 38.3099ZM4.86133 35.593C4.56481 35.1276 4.2782 34.6514 4.00274 34.1646L3.85457 34.2484C4.13152 34.7379 4.41967 35.2166 4.71774 35.6845L4.86133 35.593ZM3.22132 32.6928C2.97594 32.1987 2.74229 31.6947 2.52155 31.1807L2.36511 31.2479C2.58712 31.7648 2.82209 32.2717 3.06885 32.7685L3.22132 32.6928ZM1.90755 29.6321C1.71911 29.1143 1.54388 28.5873 1.38295 28.051L1.21988 28.1C1.38177 28.6394 1.55802 29.1695 1.74757 29.6903L1.90755 29.6321ZM0.950637 26.4424C0.823369 25.9072 0.71039 25.3634 0.612656 24.8112L0.445011 24.8408C0.543327 25.3964 0.656979 25.9434 0.785005 26.4818L0.950637 26.4424ZM0.37007 23.1625C0.305847 22.6167 0.256525 22.063 0.222951 21.5017L0.0530041 21.5118C0.0867734 22.0764 0.136383 22.6333 0.200986 23.1824L0.37007 23.1625ZM0.170427 19.8333C0.168551 19.286 0.181619 18.7317 0.210358 18.1706L0.0403309 18.1619C0.0114338 18.7261 -0.00170908 19.2835 0.000177417 19.8339L0.170427 19.8333ZM0.339473 16.5128C0.39624 15.9687 0.467703 15.4184 0.554478 14.8621L0.386261 14.8358C0.299045 15.395 0.22721 15.9481 0.170142 16.4952L0.339473 16.5128ZM0.851924 13.2204C0.962969 12.6819 1.08831 12.1379 1.22847 11.5886L1.06351 11.5465C0.922698 12.0984 0.796764 12.6449 0.685183 13.186L0.851924 13.2204ZM1.67396 9.99027C1.8319 9.4676 2.0032 8.94022 2.1883 8.40818L2.0275 8.35223C1.84164 8.88647 1.66961 9.41607 1.51099 9.94103L1.67396 9.99027ZM2.76951 6.83856C2.96937 6.32942 3.18181 5.81616 3.4072 5.29882L3.25112 5.23082C3.02491 5.75005 2.81166 6.26523 2.61103 6.77635L2.76951 6.83856ZM4.09722 3.78754C4.33459 3.29033 4.58387 2.78947 4.84536 2.28499L4.69421 2.20664C4.43187 2.71275 4.18176 3.21528 3.94358 3.7142L4.09722 3.78754ZM5.63175 0.823394C5.76853 0.578134 5.90818 0.332043 6.05073 0.0851252L5.90329 0C5.76031 0.247644 5.62025 0.49447 5.48306 0.740474L5.63175 0.823394Z"
        fill="white"
      />
    </svg>
  );
}

CurvedArrow.propTypes = {
  style: PropTypes.object,
};

export default {
  aspectRatio: 21 / 50,
  svg: CurvedArrow,
  title,
};
