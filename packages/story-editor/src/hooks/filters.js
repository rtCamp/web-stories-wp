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
 * Heavily inspired by https://www.npmjs.com/package/@wordpress/hooks
 * and works on the same logic of @wordpress/hooks.
 */
class Filters {
  constructor() {
    this.filters = {};
    this.applyFilters = this.createApplyFilter(this);
    this.addFilter = this.createAddFilter(this);
  }

  defaultFilterHandler(filterName, handler = null) {
    if (!this.filters[filterName]) {
      this.filters[filterName] = {
        handlers: handler ? [handler] : [],
      };
    }

    return this.filters[filterName].handlers;
  }

  createApplyFilter() {
    return (filterName, ...rest) => {
      const handlers = this.defaultFilterHandler(filterName);

      return handlers?.length ? handlers[0].callback(rest) : rest[0];
    };
  }

  createAddFilter() {
    return (filterName, namespace, callback) => {
      const handler = { callback, namespace };

      const handlers = this.defaultFilterHandler(filterName, handler);

      if (handlers?.length) {
        handlers[0] = handler;
      }
    };
  }
}

const { addFilter, applyFilters } = new Filters();

export { addFilter, applyFilters };
