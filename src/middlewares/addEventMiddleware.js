// Import
import axios from 'axios';

// Import actions
import {
  ADD_NEW_EVENT,
  redirectToAccount,
  resetForm,
  displayErrors,
} from 'src/actions/addEvent';

const addEventMiddleware = (store) => (next) => (action) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  switch (action.type) {
    case ADD_NEW_EVENT: {
      /** Get data from state */
      const {
        title,
        duration,
        authorName,
        troopName,
        eventDescription,
        troopDescription,
        time,
        reservationContact,
        image,
        fullPrice,
        reducedPrice,
        subscriberPrice,
        childrenPrice,
        type,
        place,
        dates,
        dayOffs,
      } = store.getState().addEvent;
      const { id } = store.getState().auth;

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
        image,
        fullPrice: convertedFullPrice,
        reducedPrice: convertedReducedPrice,
        subscriberPrice: convertedSubscriberPrice,
        childrenPrice: convertedChildrenPrice,
        type,
        place,
        user: id,
        dates,
        dayOffs,
      };
      const jsonData = JSON.stringify(data);
      // console.log(jsonData);

      /** Get token from local storage */
      const token = localStorage.getItem('token');

      /** Request post to add event in db */
      axios({
        method: 'post',
        url: `${apiUrl}api/handle_event/new`,
        data: jsonData,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          // console.log(response);
          // console.log(response.data);
          /** Dispatch action to redirect to myAccount */
          store.dispatch(redirectToAccount());
          /** Dispatch action to clean state of addEventReducer */
          store.dispatch(resetForm());
        })
        .catch((error) => {
          console.log('Submit Add Event :', error);
          /** Save list of errors in state */
          const errors = error.response.data;
          store.dispatch(displayErrors(errors));
        });

      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default addEventMiddleware;
