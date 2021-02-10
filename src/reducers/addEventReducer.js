import {
  SAVE_FIELD,
  SAVE_DATES,
  SAVE_DAY_OFF,
  UPLOAD_FILE,
  REDIRECT_TO_ACCOUNT,
  RESET_FORM,
  UPDATE_SELECTED_DATES,
  UPDATE_SELECTED_DAYOFFS,
  DISPLAY_ERRORS,
} from 'src/actions/addEvent';

const initialState = {
  type: 0,
  place: 0,
  title: '',
  authorName: '',
  troopName: '',
  duration: '',
  time: '',
  image: '', // image encoded base64
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
  errors: {},
};

function addEventReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_FIELD:
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
    case UPLOAD_FILE:
      return {
        ...state,
        image: action.uploadedFile.base64,
      };
    case REDIRECT_TO_ACCOUNT:
      return {
        ...state,
        isSaved: true,
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

export default addEventReducer;
