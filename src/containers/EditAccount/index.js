import { connect } from 'react-redux';

import EditAccount from 'src/pages/EditAccount';

import { fetchUser, setAuthValue, sendChangeUser } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  firstName: state.auth.firstName,
  lastName: state.auth.lastName,
  isLogged: state.auth.isLogged,
  isEdited: state.auth.isEdited,
  id: state.auth.id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => {
    dispatch(fetchUser());
  },
  sendChangeUser: () => {
    dispatch(sendChangeUser());
  },
  changeField: (value, name) => {
    dispatch(setAuthValue(value, name));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(EditAccount);
