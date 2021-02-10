// here actions & actions creators for addEvent

// Actions
export const SAVE_FIELD = 'SAVE_FIELD';
export const SAVE_DATES = 'SAVE_DATES';
export const SAVE_DAY_OFF = 'SAVE_DAY_OFF';
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const ADD_NEW_EVENT = 'ADD_NEW_EVENT';
export const REDIRECT_TO_ACCOUNT = 'REDIRECT_TO_ACCOUNT';
export const RESET_FORM = 'RESET_FORM';
export const UPDATE_SELECTED_DATES = 'UPDATE_SELECTED_DATES';
export const UPDATE_SELECTED_DAYOFFS = 'UPDATE_SELECTED_DAYOFFS';
export const DISPLAY_ERRORS = 'DISPLAY_ERRORS';

// Actions creators
export const saveField = (value, name) => ({
  type: SAVE_FIELD,
  value,
  name,
});

export const saveDates = (newDates) => ({
  type: SAVE_DATES,
  newDates,
});

export const saveDayOff = (newDayOff) => ({
  type: SAVE_DAY_OFF,
  newDayOff,
});

export const uploadFile = (uploadedFile) => ({
  type: UPLOAD_FILE,
  uploadedFile,
});

export const addNewEvent = (formData) => ({
  type: ADD_NEW_EVENT,
  formData,
});

export const redirectToAccount = () => ({
  type: REDIRECT_TO_ACCOUNT,
});

export const resetForm = () => ({
  type: RESET_FORM,
});

export const updateSelectedDates = (dates) => ({
  type: UPDATE_SELECTED_DATES,
  dates,
});

export const updateSelectedDayOffs = (dayOffs) => ({
  type: UPDATE_SELECTED_DAYOFFS,
  dayOffs,
});

export const displayErrors = (errors) => ({
  type: DISPLAY_ERRORS,
  errors,
});
