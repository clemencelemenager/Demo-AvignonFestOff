import axios from 'axios';

import {
  SUBMIT_LOGIN,
  SUBMIT_SIGNUP,
  FETCH_MY_ACCOUNT,
  FETCH_USER,
  SEND_CHANGE_USER,
  SEND_DELETE_ACCOUNT,
  LOG_OUT,
  CHANGE_PASSWORD,
  SEND_MESSAGE,
  connectUser,
  signupCheck,
  saveArtistEvents,
  saveUser,
  deleteOk,
  errorLogin,
  errorSignup,
  succesPassword,
  failChangePassword,
  contactAdminSuccess,
} from 'src/actions/auth';
import { toggleLoader } from 'src/actions/settings';

const authMiddleware = (store) => (next) => (action) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { auth } = store.getState();
  const token = localStorage.getItem('token');

  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(`${apiUrl}api/login_check`, {
        username: auth.email,
        password: auth.password,
      })
        .then((response) => {
          store.dispatch(connectUser(
            response.data.data.firstname,
            response.data.data.lastname,
            response.data.data.user,
          ));
          localStorage.setItem('token', response.data.token);
        })
        .catch((error) => {
          store.dispatch(errorLogin());
        });
      next(action);
      break;

    case SUBMIT_SIGNUP:
      axios.post(`${apiUrl}api/user/new`, {
        email: auth.email,
        password: auth.password,
        firstname: auth.firstName,
        lastname: auth.lastName,
      })
        .then((response) => {
          store.dispatch(signupCheck(response.status));
        })
        .catch((error) => {
          store.dispatch(errorSignup());
        });
      next(action);
      break;

    case FETCH_MY_ACCOUNT:
      axios({
        method: 'get',
        url: `${apiUrl}api/home_artist`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          // console.log('fetch my account:', response.data);
          store.dispatch(saveArtistEvents(response.data));
          /** Stop loader */
          store.dispatch(toggleLoader());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case FETCH_USER:
      axios({
        method: 'get',
        url: `${apiUrl}api/handle_user/${auth.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          store.dispatch(saveUser(
            response.data.id,
            response.data.email,
            response.data.firstname,
            response.data.lastname,
          ));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case SEND_CHANGE_USER:
      axios({
        method: 'put',
        url: `${apiUrl}api/handle_user/${auth.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          email: auth.email,
          firstname: auth.firstName,
          lastname: auth.lastName,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    case SEND_DELETE_ACCOUNT:
      axios({
        method: 'delete',
        url: `${apiUrl}api/handle_user/${auth.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          store.dispatch(deleteOk());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    case LOG_OUT:
      localStorage.removeItem('token');
      next(action);
      break;
    case CHANGE_PASSWORD:
      axios({
        method: 'put',
        url: `${apiUrl}api/handle_user/edit_password/${auth.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          password: auth.password,
          newPassword: auth.newPassword,
        },
      })
        .then((response) => {
          store.dispatch(succesPassword());
        })
        .catch((error) => {
          store.dispatch(failChangePassword());
        });
      break;
    case SEND_MESSAGE:
      axios({
        method: 'post',
        url: `${apiUrl}api/handle_contact/new`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          object: auth.object,
          content: auth.content,
          user: auth.id,
        },
      })
        .then((response) => {
          store.dispatch(contactAdminSuccess(response.data.Message));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    default:
      next(action);
  }
};
export default authMiddleware;
