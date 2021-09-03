// Heavily inspired by https://www.npmjs.com/package/@wordpress/hooks
// and works on the same logic of @wordpress/hooks.
class Filters {
  constructor() {
    this.filters = {};
    this.applyFilters = this.createApplyFilter( this );
    this.addFilter = this.createAddFilter( this );
  }

  createApplyFilter( { filters } ) {
    return ( filterName, ...rest ) => {
      let value = rest[ 0 ];
      if ( ! filters[ filterName ] ) {
        filters[ filterName ] = {
          handlers: [],
        };
      }

      const { handlers } = filters[ filterName ];

      if ( ! handlers?.length ) {
        return value;
      }

      const filterInfo = {
        name: filterName,
        currentIndex: 0,
      };

      while ( filterInfo.currentIndex < handlers.length ) {
        value = handlers[ filterInfo.currentIndex ].callback( rest );
        filterInfo.currentIndex++;
      }

      return value;
    };
  }

  createAddFilter( { filters } ) {
    return ( filterName, namespace, callback, priority = 10 ) => {
      const handler = { callback, priority, namespace };

      if ( ! filters[ filterName ] ) {
        filters[ filterName ] = {
          handlers: [ handler ],
        };
        return;
      }

      const { handlers } = filters[ filterName ];

      let counter;

      for( counter = handlers.length; counter > 0; counter-- ) {
        if ( priority >= handlers[ counter - 1 ].priority ) {
          break;
        }
      }

      if ( counter === handlers.length ) {
        handlers[ counter ] = handler;
      } else {
        handlers.splice( counter, 0, handler );
      }

    };
  }
}

const { addFilter, applyFilters } = new Filters();

export {
  addFilter,
  applyFilters,
};
