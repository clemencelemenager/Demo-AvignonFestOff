import React from 'react';
import PropTypes from 'prop-types';

import './morebutton.scss';

const MoreButton = ({ fetchMoreEvents, events, isFilter, fetchMoreFilteredEvents }) => (
  <>
    {!isFilter && (
      <div className="morebutton">
        <button type="button" className="morebutton-button" onClick={fetchMoreEvents}>Plus de spectacles</button>
      </div>
    )}
    {isFilter && (
      <>
        {events.length >= 9 && (
          <div className="morebutton">
            <button type="button" className="morebutton-button" onClick={fetchMoreFilteredEvents}>Plus de spectacles</button>
          </div>
        )}
      </>
    )}
  </>
);

MoreButton.propTypes = {
  fetchMoreEvents: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  isFilter: PropTypes.bool.isRequired,
  fetchMoreFilteredEvents: PropTypes.func.isRequired,
};

export default MoreButton;
