import { connect } from 'react-redux';

import { fetchEvents } from 'src/actions/event';
import { fetchTypes, fetchPlaces } from 'src/actions/filters';

import Home from 'src/pages/Home';

const mapStateToProps = (state) => ({
  loading: state.event.loading,
  events: state.event.events,
  loadMoreEvents: state.event.loadMoreEvents,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => {
    dispatch(fetchEvents());
  },
  fetchTypes: () => {
    dispatch(fetchTypes());
  },
  fetchPlaces: () => {
    dispatch(fetchPlaces());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
