import {
  UPDATE_AUTH_VALUE,
  CONNECT_USER,
  SIGNUP_CHECK,
  SAVE_ARTIST_EVENTS,
  SAVE_USER,
  SEND_CHANGE_USER,
  FETCH_USER,
  CONFIRM_DELETE,
  DELETE_OK,
  LOG_OUT,
  ERROR_LOGIN,
  ERROR_SIGNUP,
  ERROR_PASSWORD,
  CANCEL_DELETE_ACCOUNT,
  CHANGE_PASSWORD,
  SUCCES_PASSWORD,
  FAIL_CHANGE_PASSWORD,
  CONTACT_ADMIN_SUCCESS,
} from 'src/actions/auth';

const initialState = {
  id: 0,
  email: '',
  password: '',
  secondPassword: '',
  newPassword: '',
  isLogged: false,
  firstName: '',
  lastName: '',
  isCreated: false,
  artistEvents: [],
  isEdited: false,
  validateDelete: false,
  isDeleted: false,
  isError: false,
  isPasswordChanged: false,
  errorMessageSignup: '',
  object: '',
  content: '',
  contactMessage: '',
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_AUTH_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CONNECT_USER:
      return {
        ...state,
        email: '',
        password: '',
        secondPassword: '',
        isLogged: true,
        firstName: action.firstName,
        lastName: action.lastName,
        id: action.user,
        isError: false,
      };
    case SIGNUP_CHECK:
      return {
        ...state,
        email: '',
        password: '',
        isCreated: true,
        errorMessageSignup: '',
      };
    case SAVE_ARTIST_EVENTS:
      return {
        ...state,
        artistEvents: action.artistEvents,
      };
    case SAVE_USER:
      return {
        ...state,
        id: action.id,
        email: action.email,
        firstName: action.firstName,
        lastName: action.lastName,
        isLogged: true,
      };

    case SEND_CHANGE_USER:
      return {
        ...state,
        isEdited: true,
      };
    case FETCH_USER:
      return {
        ...state,
        isEdited: false,
      };
    case CONFIRM_DELETE:
      return {
        ...state,
        validateDelete: true,
      };
    case CANCEL_DELETE_ACCOUNT:
      return {
        ...state,
        validateDelete: false,
      };
    case DELETE_OK:
      return {
        ...state,
        isDeleted: true,
        isLogged: false,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        id: 0,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        firstName: '',
        lastName: '',
        id: 0,

      };
    case ERROR_LOGIN:
      return {
        ...state,
        isError: true,
      };
    case ERROR_SIGNUP:
      return {
        ...state,
        errorMessageSignup: 'Une erreur est survenus lors de votre inscription, vérifier que votre mot de passe respecte les normes demandées.',
      };
    case ERROR_PASSWORD:
      return {
        ...state,
        errorMessageSignup: 'Veuillez rentrer les mêmes mots de passe dans les deux champs !',
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        isPasswordChanged: false,
      };
    case SUCCES_PASSWORD:
      return {
        ...state,
        isPasswordChanged: true,
        errorMessageSignup: '',
      };
    case FAIL_CHANGE_PASSWORD:
      return {
        ...state,
        errorMessageSignup: 'Une erreur est survenus lors de votre inscription, vérifier que votre mot de passe respecte les normes demandées ou que l\'ancien mot de passe est bien correcte !.',
      };
    case CONTACT_ADMIN_SUCCESS:
      return {
        ...state,
        contactMessage:action.message,
      };
    default:
      return state;
  }
}

export default authReducer;
