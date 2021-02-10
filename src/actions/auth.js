// here actions & actions creators for auth
export const UPDATE_AUTH_VALUE = 'UPDATE_AUTH_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CONNECT_USER = 'CONNECT_USER';
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';
export const SIGNUP_CHECK = 'SIGNUP_CHECK';
export const FETCH_MY_ACCOUNT = 'FETCH_MY_ACCOUNT';
export const SAVE_ARTIST_EVENTS = 'SAVE_ARTIST_EVENTS';
export const FETCH_USER = 'FETCH_USER';
export const SAVE_USER = 'SAVE_USER';
export const SEND_CHANGE_USER = 'SEND_CHANGE_USER';
export const CONFIRM_DELETE = 'CONFIRM_DELETE';
export const SEND_DELETE_ACCOUNT = 'SEND_DELETE_ACCOUNT';
export const DELETE_OK = 'DELETE_OK';
export const LOG_OUT = 'LOG_OUT';
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const ERROR_SIGNUP = 'ERROR_SIGNUP';
export const ERROR_PASSWORD = 'ERROR_PASSWORD';
export const CANCEL_DELETE_ACCOUNT = 'CANCEL_DELETE_ACCOUNT';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const SUCCES_PASSWORD = 'SUCCES_PASSWORD';
export const FAIL_CHANGE_PASSWORD = 'FAIL_CHANGE_PASSWORD';
export const SEND_MESSAGE ='SEND_MESSAGE';
export const CONTACT_ADMIN_SUCCESS = 'CONTACT_ADMIN_SUCCESS';

export const setAuthValue = (value, name) => ({
  type: UPDATE_AUTH_VALUE,
  value,
  name,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const connectUser = (firstName, lastName, user) => ({
  type: CONNECT_USER,
  firstName,
  lastName,
  user,
});

export const submitSignup = () => ({
  type: SUBMIT_SIGNUP,
});

export const signupCheck = (status) => ({
  type: SIGNUP_CHECK,
  status,
});

export const fetchMyAccount = () => ({
  type: FETCH_MY_ACCOUNT,
});

export const saveArtistEvents = (artistEvents) => ({
  type: SAVE_ARTIST_EVENTS,
  artistEvents,
});

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const saveUser = (id, email, firstName, lastName) => ({
  type: SAVE_USER,
  id,
  email,
  firstName,
  lastName,
});

export const sendChangeUser = () => ({
  type: SEND_CHANGE_USER,
});

export const confirmDelete = () => ({
  type: CONFIRM_DELETE,
});

export const sendDeleteAccount = (id) => ({
  type: SEND_DELETE_ACCOUNT,
  id,
});

export const deleteOk = () => ({
  type: DELETE_OK,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const errorLogin = () => ({
  type: ERROR_LOGIN,
});

export const errorSignup = () => ({
  type: ERROR_SIGNUP,
});

export const errorPassword = () => ({
  type: ERROR_PASSWORD,
});

export const cancelDeleteAccount = () => ({
  type: CANCEL_DELETE_ACCOUNT,
});

export const changePassword = () => ({
  type: CHANGE_PASSWORD,
});

export const succesPassword = () => ({
  type: SUCCES_PASSWORD,
});

export const failChangePassword = () => ({
  type: FAIL_CHANGE_PASSWORD,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const contactAdminSuccess = (message) => ({
  type: CONTACT_ADMIN_SUCCESS,
  message,
});
