/* eslint-disable max-len */
// Import
import axios from 'axios';

// Import actions
import {
  FETCH_TYPES,
  FETCH_PLACES,
  FILTERS_ALL,
  FETCH_MORE_FILTERED_EVENTS,
  savePlaces,
  saveTypes,
  saveFilteredEvents,
  saveMoreFilteredEvents,
} from 'src/actions/filters';

const eventMiddleware = (store) => (next) => (action) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const { filters, event } = store.getState();

  switch (action.type) {
    case FETCH_TYPES:
      axios.get(`${apiUrl}api/home_types`)
        .then((response) => {
          store.dispatch(saveTypes(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    case FETCH_PLACES:
      axios.get(`${apiUrl}api/home_places`)
        .then((response) => {
          store.dispatch(savePlaces(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    case FILTERS_ALL:
      axios.get(`${apiUrl}api/filter/?date=${filters.currentDate}&type=${filters.genre}&place=${filters.place}&price=${filters.price}&word=${filters.name}&limit=12`)
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveFilteredEvents(response.data.events, response.data.count));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    case FETCH_MORE_FILTERED_EVENTS:
      axios.get(`${apiUrl}api/filter/?date=${filters.currentDate}&type=${filters.genre}&place=${filters.place}&price=${filters.price}&word=${filters.name}&limit=${event.nbEvents + 12}`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveMoreFilteredEvents(response.data.events));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    default:
      next(action);
  }
};
export default eventMiddleware;
