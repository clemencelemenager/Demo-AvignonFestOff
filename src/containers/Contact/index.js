import { connect } from 'react-redux';

import Contact from 'src/pages/Contact';

import { setAuthValue, sendMessage } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  object: state.auth.object,
  content: state.auth.content,
  isLogged: state.auth.isLogged,
  contactMessage: state.auth.contactMessage,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(setAuthValue(value, name));
  },
  sendMessage: () => {
    dispatch(sendMessage());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
