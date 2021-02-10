import {
  SAVE_TYPES,
  SAVE_PLACES,
  CHANGE_FIELD,
  SAVE_FILTERED_EVENTS,
  REINIT_FILTERS,
} from 'src/actions/filters';

import { FETCH_EVENTS } from 'src/actions/event';

const initialState = {
  types: [],
  places: [],
  isFilter: false,
  currentDate: '',
  genre: '',
  place: '',
  name: '',
  price: '',
};

function settingsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_TYPES:
      return {
        ...state,
        types: action.types,
      };
    case SAVE_PLACES:
      return {
        ...state,
        places: action.places,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_FILTERED_EVENTS:
      return {
        ...state,
        isFilter: true,
      };
    case REINIT_FILTERS:
      return {
        ...state,
        isFilter: false,
      };
    case FETCH_EVENTS:
      return {
        ...state,
        currentDate: '',
        genre: '',
        place: '',
        name: '',
        price: '',
      };
    default:
      return state;
  }
}

export default settingsReducer;
