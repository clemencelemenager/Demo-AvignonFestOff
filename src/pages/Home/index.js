import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './home.scss';

// Import components

import Banner from 'src/components/Banner';
import Card from 'src/components/Card';
import MoreButton from 'src/containers/MoreButton';
import Filters from 'src/containers/Filters';
import Loader from 'src/components/Loader';

const Home = ({
  fetchEvents,
  loading,
  events,
  loadMoreEvents,
  fetchTypes,
  fetchPlaces,
}) => {
  // Load all types and places for filters and events for card
  useEffect(() => {
    fetchTypes();
    fetchPlaces();
    fetchEvents();
  }, []);

  return (
    <div className="home">
      <Banner />
      <Filters />
      <h2 className="home-title">Les prochains spectacles :</h2>
      {loading && <Loader />}
      {!loading && (
      <>
        {/* {console.log(events)} */}
        <div className="card-container">
          { events.map((event) => (
            <Card
              key={event.title}
              {...event}
              {...event.place}
              id={event.id}
              cardType="home"
            />
          ))}
        </div>
        {loadMoreEvents && <Loader />}
        <MoreButton />
      </>
      )}
    </div>
  );
};

Home.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  events: PropTypes.array.isRequired,
  loadMoreEvents: PropTypes.bool.isRequired,
  fetchTypes: PropTypes.func.isRequired,
  fetchPlaces: PropTypes.func.isRequired,
};

export default Home;
