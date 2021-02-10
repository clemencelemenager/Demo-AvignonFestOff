import { connect } from 'react-redux';

import MoreButton from 'src/components/MoreButton';

import { fetchMoreEvents } from 'src/actions/event';
import { fetchMoreFilteredEvents } from 'src/actions/filters';

const mapStateToProps = (state) => ({
  isFilter: state.filters.isFilter,
  events: state.event.events,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoreEvents: () => {
    dispatch(fetchMoreEvents());
  },
  fetchMoreFilteredEvents: () => {
    dispatch(fetchMoreFilteredEvents());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MoreButton);
