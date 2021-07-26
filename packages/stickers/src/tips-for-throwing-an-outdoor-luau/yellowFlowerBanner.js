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

const title = _x('Yellow Flower Banner', 'sticker name', 'web-stories');

const YellowFlowerBanner = ({ style }) => (
  <svg
    style={style}
    viewBox="0 0 52 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M16.6412 3.25188C17.5499 2.14201 19.0266 1.03214 20.489 1.14433C20.9491 1.17962 21.2316 1.61844 21.2297 2.07986L21.2068 7.83163C21.2068 8.09585 21.3106 8.36007 21.5181 8.53621C22.2185 9.1307 23.1783 8.51419 23.749 7.9197C25.6946 5.91606 27.5624 3.86838 29.3263 1.75465C29.7933 1.2042 30.2602 0.653748 30.9347 0.301459C31.6091 -0.0508293 32.543 -0.138901 33.1656 0.279441C33.9957 0.851911 33.8141 1.97483 33.5547 2.85555C32.8284 5.32157 32.102 7.7876 31.3757 10.2536C31.22 10.8041 31.0903 11.4866 31.5573 11.883C32.128 12.3674 33.0878 12.1031 33.7882 11.7729C37.2124 10.0775 39.599 6.97293 43.3345 5.82799C43.6458 5.73992 43.983 5.65185 44.2943 5.69588C45.0206 5.80597 45.4097 6.48853 45.4616 7.08302C45.5913 8.42612 44.7093 9.68115 43.8533 10.8041C42.0115 13.2261 40.1956 15.648 38.3538 18.07C36.5956 20.382 49.0443 19.7647 50.1784 19.7039C50.2392 19.7006 50.2913 19.7016 50.3512 19.7118C50.5281 19.742 50.7022 19.8067 50.8573 19.9195C51.3502 20.2718 51.1686 20.6682 50.9352 21.0204C49.7419 22.87 47.5888 24.169 45.2282 24.7855C44.0549 25.0919 42.2345 25.1699 40.7 25.1708C39.6886 25.1714 39.098 26.4283 39.7541 27.1982C41.343 29.0625 43.4951 31.7823 44.3202 33.7249C44.4759 34.0992 44.6056 34.5836 44.2683 34.8698C44.0868 35.0239 43.8273 35.09 43.5679 35.134C42.1671 35.3982 40.5847 35.6404 39.3396 34.9799C38.8467 34.7157 38.4576 34.3414 38.0944 33.945C37.1452 32.9866 36.2064 32.0282 35.2649 31.0753C34.6032 30.4057 33.4597 30.8111 33.3371 31.7444C33.0994 33.553 32.7945 35.3507 32.4133 37.1377C32.1539 38.4147 31.4276 39.978 29.897 40C29.0669 40 28.3406 39.4716 27.9515 38.8551C27.5883 38.2165 27.4845 37.512 27.4067 36.8074C27.2576 35.4995 27.1085 34.1917 26.9594 32.8781C26.8552 31.9604 25.7587 31.572 25.158 32.2736C24.3393 33.2299 23.6167 34.2439 22.9968 35.3102C22.2445 36.6312 21.4922 38.1285 19.9098 38.7009C18.576 39.1806 17.8529 38.8242 16.5903 38.8267C16.2165 38.8274 15.8295 38.6867 15.7016 38.3355C15.3382 37.3376 15.7092 35.9037 15.9927 34.1253C16.3711 32.1705 16.2238 30.4843 16.0908 28.7752C16.0331 28.0346 15.287 27.5391 14.6586 27.9352C13.1446 28.8894 12.0711 30.38 10.8045 31.6111C9.14428 33.2184 6.03136 35.134 4.68243 35.2221C3.3335 35.3102 3.02221 32.1836 3.25568 30.5983C3.38538 29.7396 4.03391 29.013 4.63055 28.3304C5.92193 26.8797 7.22722 25.4408 8.52605 23.9964C9.1287 23.3262 8.72736 22.2439 7.84552 22.0577C5.8944 21.6459 4.01156 21.0007 2.26992 20.1397C1.33605 19.6773 0.402174 19.0829 0.0908825 18.2021C-0.171362 17.413 0.179871 16.568 0.560645 15.804C0.626616 15.6716 0.719267 15.5541 0.821667 15.4474C0.936565 15.3277 1.05368 15.2091 1.23228 15.1636C1.43981 15.1196 1.64734 15.1857 1.82893 15.2517C3.87826 15.9343 6.0573 16.3086 8.23634 16.3967C8.39199 16.3967 8.52169 16.3746 8.6514 16.3306C9.0924 16.1545 9.01457 15.8022 8.91081 15.4939C8.36605 14.0187 7.19871 12.7637 6.03136 11.5747C4.73431 10.2536 3.46321 8.91052 2.16616 7.58943C1.25823 6.64266 0.324351 5.25552 1.25823 4.30874C2.16616 3.42802 3.85232 3.8904 5.07155 4.44085C7.95099 5.67386 11.1725 10.0471 12.7925 8.25943"
      fill="#ECE7BD"
    />
  </svg>
);

YellowFlowerBanner.propTypes = {
  style: PropTypes.object,
};

export default {
  aspectRatio: 52 / 40,
  svg: YellowFlowerBanner,
  title,
};
