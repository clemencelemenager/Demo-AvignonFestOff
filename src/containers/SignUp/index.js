import { connect } from 'react-redux';

import SignUp from 'src/pages/SignUp';

import { setAuthValue, submitSignup, errorSignup, errorPassword } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  username: state.auth.email,
  password: state.auth.password,
  secondPassword: state.auth.secondPassword,
  firstName: state.auth.firstName,
  lastName: state.auth.lastName,
  isCreated: state.auth.isCreated,
  errorMessageSignup: state.auth.errorMessageSignup,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(setAuthValue(value, name));
  },
  submitSignup: () => {
    dispatch(submitSignup());
  },
  errorSignup: () => {
    dispatch(errorSignup());
  },
  errorPassword: () => {
    dispatch(errorPassword());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
