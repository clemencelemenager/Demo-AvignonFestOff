import { connect } from 'react-redux';

import MyAccount from 'src/pages/MyAccount';

import { toggleLoader } from 'src/actions/settings';
import {
  fetchMyAccount,
  confirmDelete,
  sendDeleteAccount,
  cancelDeleteAccount,
} from 'src/actions/auth';

const mapStateToProps = (state) => ({
  firstName: state.auth.firstName,
  isLogged: state.auth.isLogged,
  artistEvents: state.auth.artistEvents,
  id: state.auth.id,
  isEdited: state.auth.isEdited,
  validateDelete: state.auth.validateDelete,
  isDeleted: state.auth.isDeleted,
  loader: state.settings.loader,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMyAccount: () => {
    dispatch(fetchMyAccount());
  },
  confirmDelete: () => {
    dispatch(confirmDelete());
  },
  sendDeleteAccount: () => {
    dispatch(sendDeleteAccount());
  },
  toggleLoader: () => {
    dispatch(toggleLoader());
  },
  cancelDeleteAccount: () => {
    dispatch(cancelDeleteAccount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
