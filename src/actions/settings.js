// here actions & actions creators for settings
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const UPDATE_WINDOW_WIDTH = 'UPDATE_WINDOW_WIDTH';
export const TOGGLE_FILTERS = 'TOGGLE_FILTERS';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';
export const FILTERS_FALSE = 'FILTERS_FALSE';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const updateWindowWidth = (newValue) => ({
  type: UPDATE_WINDOW_WIDTH,
  windowWidth: newValue,
});

export const toggleFilters = () => ({
  type: TOGGLE_FILTERS,
});

export const toggleLoader = () => ({
  type: TOGGLE_LOADER,
});

export const filtersFalse = () => ({
  type: FILTERS_FALSE,
});
