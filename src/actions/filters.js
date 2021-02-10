export const FETCH_TYPES = 'FETCH_TYPES';
export const SAVE_TYPES = 'SAVE_TYPES';
export const FETCH_PLACES = 'FETCH_PLACES';
export const SAVE_PLACES = 'SAVE_PLACES';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const FILTER_DATE = 'FILTER_DATE';
export const FILTERS_ALL = 'FILTERS_ALL';
export const SAVE_FILTERED_EVENTS = 'SAVE_FILTERED_EVENTS';
export const FETCH_MORE_FILTERED_EVENTS = 'FETCH_MORE_FILTERED_EVENTS';
export const SAVE_MORE_FILTERED_EVENTS = 'SAVE_MORE_FILTERED_EVENTS';
export const REINIT_FILTERS = 'REINIT_FILTERS';

export const fetchTypes = () => ({
  type: FETCH_TYPES,
});

export const fetchPlaces = () => ({
  type: FETCH_PLACES,
});

export const saveTypes = (types) => ({
  type: SAVE_TYPES,
  types,
});

export const savePlaces = (places) => ({
  type: SAVE_PLACES,
  places,
});

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const filterDate = () => ({
  type: FILTER_DATE,
});

export const filtersAll = () => ({
  type: FILTERS_ALL,
});

export const saveFilteredEvents = (newEvents, count) => ({
  type: SAVE_FILTERED_EVENTS,
  newEvents,
  count,
});

export const fetchMoreFilteredEvents = () => ({
  type: FETCH_MORE_FILTERED_EVENTS,
});

export const saveMoreFilteredEvents = (events) => ({
  type: SAVE_MORE_FILTERED_EVENTS,
  events,
});

export const reinitFilters = () => ({
  type: REINIT_FILTERS,
});
