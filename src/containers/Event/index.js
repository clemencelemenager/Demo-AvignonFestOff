import { connect } from 'react-redux';

import Event from 'src/pages/Event';

import {
  fetchOneEvent,
  saveOneEvent,
  displayReport,
  sendReport,
} from 'src/actions/event';

import { setAuthValue } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  event: state.event.event,
  reportModal: state.event.reportModal,
  contentReport: state.event.contentReport,
  messageResponseReport: state.event.messageResponseReport,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOneEvent: (id) => {
    dispatch(fetchOneEvent(id));
  },
  saveOneEvent: (event) => {
    dispatch(saveOneEvent(event));
  },
  displayReport: () => {
    dispatch(displayReport());
  },
  changeField: (value, name) => {
    dispatch(setAuthValue(value, name));
  },
  sendReport: (id) => {
    dispatch(sendReport(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Event);
