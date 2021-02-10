import { connect } from 'react-redux';

import { toggleFilters, filtersFalse } from 'src/actions/settings';
import { changeField, filterDate, filtersAll, reinitFilters } from 'src/actions/filters';
import { fetchEvents } from 'src/actions/event';

import Filters from 'src/components/Filters';

const mapStateToProps = (state) => ({
  filtersOpen: state.settings.filtersOpen,
  types: state.filters.types,
  places: state.filters.places,
  currentDate: state.filters.currentDate,
  place: state.filters.place,
  genre: state.filters.genre,
  name: state.filters.name,
  price: state.filters.price,
  isFilter: state.filters.isFilter,
  windowWidth: state.settings.windowWidth,
  globalCount: state.event.globalCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFilters: () => {
    dispatch(toggleFilters());
  },
  filterDate: () => {
    dispatch(filterDate());
  },
  filtersAll: () => {
    dispatch(filtersAll());
  },
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  reinitFilters: () => {
    dispatch(reinitFilters());
  },
  fetchEvents: () => {
    dispatch(fetchEvents());
  },
  filtersFalse: () => {
    dispatch(filtersFalse());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
