// Import
import axios from 'axios';

// Import actions
import {
  FETCH_ONE_EVENT,
  FETCH_EVENTS,
  FETCH_MORE_EVENTS,
  SEND_REPORT,
  saveEvents,
  saveMoreEvents,
  saveOneEvent,
  reportReceived,
} from 'src/actions/event';

const eventMiddleware = (store) => (next) => (action) => {
  const apiUrl = 'http://54.152.137.82/App-pour-les-festivaliers-back/public/';

  const { event } = store.getState();

  switch (action.type) {
    case FETCH_EVENTS:
      axios.get(`${apiUrl}api/home_events/12`)
        .then((response) => {
          store.dispatch(saveEvents(response.data.events));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    case FETCH_MORE_EVENTS:
      axios.get(`${apiUrl}api/home_events/${event.nbEvents + 12}`)
        .then((response) => {
          // console.log(response);
          store.dispatch(saveMoreEvents(response.data.events));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    case FETCH_ONE_EVENT:
      axios.get(`${apiUrl}api/home_event/${action.id}`)
        .then((response) => {
          // console.log('Chargement event:', response.data);
          store.dispatch(saveOneEvent(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    case SEND_REPORT:
      // console.log(action);
      axios.post(`${apiUrl}api/alert/add`, {
        comment: event.contentReport,
        event: action.id,
      })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(reportReceived(response.data.Message));
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
