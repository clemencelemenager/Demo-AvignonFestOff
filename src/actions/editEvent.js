export const UPDATE_FIELD = 'UPDATE_FIELD';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_SELECTED_DATES = 'DELETE_SELECTED_DATES';
export const DELETE_SELECTED_DAYOFFS = 'DELETE_SELECTED_DAYOFFS';
export const UPLOAD_NEW_FILE = 'UPLOAD_NEW_FILE';
export const DELETE_EVENT = 'DELETE_EVENT';

// Actions creators
export const updateField = (value, name) => ({
  type: UPDATE_FIELD,
  value,
  name,
});

export const updateEvent = () => ({
  type: UPDATE_EVENT,
});

export const deleteSelectedDates = (idDatesToDelete) => ({
  type: DELETE_SELECTED_DATES,
  idDatesToDelete,
});

export const deleteSelectedDayOffs = (idDayOffToDelete) => ({
  type: DELETE_SELECTED_DAYOFFS,
  idDayOffToDelete,
});

export const uploadNewFile = (uploadedFile) => ({
  type: UPLOAD_NEW_FILE,
  uploadedFile,
});

export const deleteEvent = (idEvent) => ({
  type: DELETE_EVENT,
  idEvent,
});
