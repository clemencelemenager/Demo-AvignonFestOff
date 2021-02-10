import { connect } from 'react-redux';

import LogIn from 'src/pages/LogIn';

import { setAuthValue, submitLogin } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  username: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
  isError: state.auth.isError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(setAuthValue(value, name));
  },
  submitLogin: () => {
    dispatch(submitLogin());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
