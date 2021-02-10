// here actions & actions creators for events

// Actions
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const SAVE_EVENTS = 'SAVE_EVENTS';
export const FETCH_MORE_EVENTS = 'FETCH_MORE_EVENTS';
export const SAVE_MORE_EVENTS = 'SAVE_MORE_EVENTS';
export const FETCH_ONE_EVENT = 'FETCH_ONE_EVENT';
export const SAVE_ONE_EVENT = 'SAVE_ONE_EVENT';
export const DISPLAY_REPORT = 'DISPLAY_REPORT';
export const SEND_REPORT = 'SEND_REPORT';
export const REPORT_RECEIVED = 'REPORT_RECEIVED';

// Actions creators
export const fetchEvents = () => ({
  type: FETCH_EVENTS,
});

export const saveEvents = (events) => ({
  type: SAVE_EVENTS,
  events,
});

export const fetchMoreEvents = () => ({
  type: FETCH_MORE_EVENTS,
});

export const saveMoreEvents = (events) => ({
  type: SAVE_MORE_EVENTS,
  events,
});

export const fetchOneEvent = (id) => ({
  type: FETCH_ONE_EVENT,
  id,
});

export const saveOneEvent = (event) => ({
  type: SAVE_ONE_EVENT,
  event,
});

export const displayReport = () => ({
  type: DISPLAY_REPORT,
});

export const sendReport = (id) => ({
  type: SEND_REPORT,
  id,
});

export const reportReceived = (message) => ({
  type: REPORT_RECEIVED,
  message,
});
