import { connect } from 'react-redux';

import EditPassword from 'src/pages/EditPassword';

import { fetchUser, setAuthValue, changePassword, errorPassword } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  password: state.auth.password,
  secondPassword: state.auth.secondPassword,
  newPassword: state.auth.newPassword,
  isLogged: state.auth.isLogged,
  isPasswordChanged: state.auth.isPasswordChanged,
  errorMessage: state.auth.errorMessageSignup,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => {
    dispatch(fetchUser());
  },
  changeField: (value, name) => {
    dispatch(setAuthValue(value, name));
  },
  changePassword: () => {
    dispatch(changePassword());
  },
  errorPassword: () => {
    dispatch(errorPassword());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(EditPassword);
