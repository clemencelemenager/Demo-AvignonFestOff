// Import
import axios from 'axios';

// Import actions
import {
  redirectToAccount,
  resetForm,
  displayErrors,
} from 'src/actions/addEvent';
import {
  UPDATE_EVENT,
  DELETE_SELECTED_DATES,
  DELETE_SELECTED_DAYOFFS,
  DELETE_EVENT,
} from 'src/actions/editEvent';
import { toggleLoader } from 'src/actions/settings';

const editEventMiddleware = (store) => (next) => (action) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  switch (action.type) {
    case UPDATE_EVENT: {
      /** Get data from state */
      const {
        idEvent,
        title,
        duration,
        authorName,
        troopName,
        eventDescription,
        troopDescription,
        time,
        reservationContact,
        newFile,
        fullPrice,
        reducedPrice,
        subscriberPrice,
        childrenPrice,
        type,
        place,
        dates,
        dayOffs,
      } = store.getState().editEvent;
      const { id } = store.getState().auth;

      /** Modify dates & day off to add user id before sending to API */
      const newDates = dates.map((date) => {
        const object = { ...date, user: id };
        return object;
      });
      const newDayOffs = dayOffs.map((dayOff) => {
        const object = { ...dayOff, user: id };
        return object;
      });

      /** Convert empty prices into null before sending to API */
      const convert = (price) => {
        let convertedPrice = price;
        if (price === '') {
          convertedPrice = null;
          return convertedPrice;
        }
        convertedPrice = parseFloat(price);
        return convertedPrice;
      };
      const convertedFullPrice = convert(fullPrice);
      const convertedReducedPrice = convert(reducedPrice);
      const convertedSubscriberPrice = convert(subscriberPrice);
      const convertedChildrenPrice = convert(childrenPrice);

      /** Construct data object for API */
      const data = {
        title,
        duration,
        authorName,
        troopName,
        eventDescription,
        troopDescription,
        time,
        reservationContact,
        image: newFile,
        fullPrice: convertedFullPrice,
        reducedPrice: convertedReducedPrice,
        subscriberPrice: convertedSubscriberPrice,
        childrenPrice: convertedChildrenPrice,
        type,
        place,
        user: id,
        dates: newDates,
        dayOffs: newDayOffs,
      };
      const jsonData = JSON.stringify(data);
      // console.log('Update event:', jsonData);

      /** Get token from local storage */
      const token = localStorage.getItem('token');

      /** Request put to modify event in db */
      axios({
        method: 'put',
        url: `${apiUrl}api/handle_event/${idEvent}`,
        data: jsonData,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          // console.log(response.data);
          /** Dispatch action to redirect to myAccount */
          store.dispatch(redirectToAccount());
          /** Dispatch action to clean state of addEventReducer */
          store.dispatch(resetForm());
          /** Stop loader */
          store.dispatch(toggleLoader());
        })
        .catch((error) => {
          console.log('Submit Edit Event :', error);
          /** Save list of errors in state */
          const errors = error.response.data;
          store.dispatch(displayErrors(errors));
        });

      next(action);
      break;
    }
    case DELETE_SELECTED_DATES: {
      const { idDatesToDelete } = action;
      // console.log(idDatesToDelete);

      const token = localStorage.getItem('token');
      axios({
        method: 'delete',
        url: `${apiUrl}api/handle_date/${idDatesToDelete}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log('Delete dates:', response);
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case DELETE_SELECTED_DAYOFFS: {
      const { idDayOffToDelete } = action;
      const token = localStorage.getItem('token');
      axios({
        method: 'delete',
        url: `${apiUrl}api/handle_day_off/${idDayOffToDelete}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log('Delete day offs:', response);
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    case DELETE_EVENT: {
      const { idEvent } = action;
      const token = localStorage.getItem('token');

      axios({
        method: 'delete',
        url: `${apiUrl}api/handle_event/${idEvent}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          // console.log('Delete event:', response);
          /** Dispatch action to redirect to myAccount */
          store.dispatch(redirectToAccount());
          /** Stop loader */
          store.dispatch(toggleLoader());
        })
        .catch((error) => {
          console.log(error);
          /** Stop loader */
          store.dispatch(toggleLoader());
        });

      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default editEventMiddleware;
