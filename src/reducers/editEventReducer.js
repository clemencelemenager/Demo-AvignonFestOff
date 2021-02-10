import {
  UPDATE_FIELD,
  UPLOAD_NEW_FILE,
  UPDATE_EVENT,
} from 'src/actions/editEvent';
import { SAVE_ONE_EVENT } from '../actions/event';
import {
  REDIRECT_TO_ACCOUNT,
  RESET_FORM,
  UPDATE_SELECTED_DATES,
  UPDATE_SELECTED_DAYOFFS,
  SAVE_DATES,
  SAVE_DAY_OFF,
  DISPLAY_ERRORS,
} from '../actions/addEvent';

const initialState = {
  idEvent: null,
  event: {},
  type: 0,
  place: 0,
  title: '',
  authorName: '',
  troopName: '',
  duration: '',
  time: '',
  image: '', // name of image
  newFile: '', // image encoded base64
  dates: [],
  startDate: '',
  endDate: '',
  dayOffs: [],
  date: '', // date of day off
  eventDescription: '',
  troopDescription: '',
  fullPrice: '',
  subscriberPrice: '',
  reducedPrice: '',
  childrenPrice: '',
  reservationContact: '',
  isSaved: false,
  errors: {}, // errors response after submitting form
};

function editEventReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_ONE_EVENT:
      return {
        ...state,
        type: action.event.type.id,
        place: action.event.place.id,
        title: action.event.title,
        idEvent: action.event.id,
        authorName: action.event.authorName,
        troopName: action.event.troopName,
        duration: action.event.duration,
        time: action.event.time,
        image: action.event.image,
        dates: action.event.dates,
        dayOffs: action.event.dayOffs,
        eventDescription: action.event.eventDescription,
        troopDescription: action.event.troopDescription,
        fullPrice: action.event.fullPrice,
        subscriberPrice: action.event.subscriberPrice,
        childrenPrice: action.event.childrenPrice,
        reducedPrice: action.event.reducedPrice,
        reservationContact: action.event.reservationContact,
      };
    case UPDATE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_DATES:
      return {
        ...state,
        dates: [...state.dates, action.newDates],
      };
    case SAVE_DAY_OFF:
      return {
        ...state,
        dayOffs: [...state.dayOffs, action.newDayOff],
      };
    case UPLOAD_NEW_FILE:
      return {
        ...state,
        newFile: action.uploadedFile.base64,
      };
    case REDIRECT_TO_ACCOUNT:
      return {
        ...state,
        isSaved: true,
      };
    case UPDATE_EVENT:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SELECTED_DATES:
      return {
        ...state,
        dates: action.dates,
      };
    case UPDATE_SELECTED_DAYOFFS:
      return {
        ...state,
        dayOffs: action.dayOffs,
      };
    case DISPLAY_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
}

export default editEventReducer;
