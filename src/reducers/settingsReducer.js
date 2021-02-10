import {
  TOGGLE_MENU,
  UPDATE_WINDOW_WIDTH,
  TOGGLE_FILTERS,
  TOGGLE_LOADER,
  FILTERS_FALSE,
} from 'src/actions/settings';

const initialState = {
  responsiveMenu: false,
  windowWidth: window.innerWidth,
  isLogged: false,
  filtersOpen: false,
  loader: false,
};

function settingsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        responsiveMenu: !state.responsiveMenu,
      };
    case UPDATE_WINDOW_WIDTH:
      return {
        ...state,
        windowWidth: action.windowWidth,
      };
    case TOGGLE_FILTERS:
      return {
        ...state,
        filtersOpen: !state.filtersOpen,
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        loader: !state.loader,
      };
    case FILTERS_FALSE:
      return {
        ...state,
        filtersOpen: false,
      };
      
    default:
      return state;
  }
}

export default settingsReducer;
