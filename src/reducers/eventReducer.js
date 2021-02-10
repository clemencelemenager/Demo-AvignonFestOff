// Import actions
import {
  UPDATE_AUTH_VALUE,
}
  from 'src/actions/auth';
import {
  FETCH_EVENTS,
  SAVE_EVENTS,
  SAVE_MORE_EVENTS,
  FETCH_MORE_EVENTS,
  SAVE_ONE_EVENT,
  FETCH_ONE_EVENT,
  DISPLAY_REPORT,
  REPORT_RECEIVED,
} from 'src/actions/event';

import {
  SAVE_FILTERED_EVENTS,
  FILTERS_ALL,
  SAVE_MORE_FILTERED_EVENTS,
  FETCH_MORE_FILTERED_EVENTS,
} from 'src/actions/filters';

const initialState = {
  events: [],
  loading: true,
  nbEvents: 0,
  loadMoreEvents: false,
  event: {},
  globalCount: 0,
  reportModal: false,
  contentReport: '',
  messageResponseReport: '',
};

function eventReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_AUTH_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case FETCH_EVENTS:
      return {
        ...state,
        loading: true,
      };
    case SAVE_EVENTS:
      return {
        ...state,
        events: action.events,
        nbEvents: 12,
        loading: false,
      };
    case FETCH_MORE_EVENTS:
      return {
        ...state,
        loadMoreEvents: true,
      };
    case SAVE_MORE_EVENTS:
      return {
        ...state,
        events: action.events,
        nbEvents: state.nbEvents + 12,
        loadMoreEvents: false,
      };
    case FETCH_ONE_EVENT:
      return {
        ...state,
        loading: true,
      };
    case SAVE_ONE_EVENT:
      return {
        ...state,
        loading: false,
        event: action.event,
      };
    case FILTERS_ALL:
      return {
        ...state,
        loading: true,
      };
    case SAVE_FILTERED_EVENTS:
      return {
        ...state,
        loading: false,
        events: action.newEvents,
        globalCount: action.count,
      };
    case FETCH_MORE_FILTERED_EVENTS:
      return {
        ...state,
        loadMoreEvents: true,
      };
    case SAVE_MORE_FILTERED_EVENTS:
      return {
        ...state,
        loadMoreEvents: false,
        events: action.events,
        nbEvents: state.nbEvents + 12,
      };
    case DISPLAY_REPORT:
      return {
        ...state,
        reportModal: !state.reportModal,
        contentReport: '',
        messageResponseReport: '',
      };
    case REPORT_RECEIVED:
      return {
        ...state,
        messageResponseReport: action.message,
      };
    default:
      return state;
  }
}

export default eventReducer;
