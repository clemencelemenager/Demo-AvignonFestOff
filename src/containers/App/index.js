import { connect } from 'react-redux';

import { fetchUser } from 'src/actions/auth';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  id: state.auth.id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => {
    dispatch(fetchUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
