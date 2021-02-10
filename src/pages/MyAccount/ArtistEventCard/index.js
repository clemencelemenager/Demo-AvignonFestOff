import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import function for the date
import { formatDate } from 'src/utils';

import './artistEventCard.scss';

const ArtistEventCard = ({
  title,
  id,
  authorName,
  troopName,
  name,
  dates,
  image,
}) => (
  <div className="card">
    <img className="card-picture" src={`http://54.152.137.82/App-pour-les-festivaliers-back/public/upload/images/${image}`} alt="Affiche du spectacle" />
    <div className="card-content">
      <div className="card-description">
        <p className="card-name">{title} by <span className="card-author">{authorName}</span></p>
        <p className="card-troop">{troopName}</p>
        <p>{name}</p>
        {dates.map((date) => (
          <p key={`${id}-${date.startDate}-${date.endDate}`}>du <span className="card-date">{formatDate(date.startDate)} au {formatDate(date.endDate)}</span></p>
        ))}
      </div>
      <Link to={`/spectacle/edition/${id}`} className="card-button" type="button">Modifier l'événement</Link>
    </div>
  </div>
);

ArtistEventCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  authorName: PropTypes.string.isRequired,
  troopName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dates: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
};

export default ArtistEventCard;
