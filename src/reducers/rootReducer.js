import { combineReducers } from 'redux';

// import reducers
import addEvent from './addEventReducer';
import event from './eventReducer';
import settings from './settingsReducer';
import auth from './authReducer';
import filters from './filtersReducer';
import editEvent from './editEventReducer';

// combine reducers
export default combineReducers({
  auth,
  addEvent,
  event,
  settings,
  filters,
  editEvent,
});
