import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MapPin,
  Bookmark,
  Info,
  Calendar,
  Clock,
} from 'react-feather';

// Import function for the date
import { formatDate, formatDateText } from 'src/utils';

import './card.scss';

const Card = ({
  title,
  authorName,
  troopName,
  name,
  type,
  dates,
  image,
  time,
  id,
  cardType,
}) => (
  <div className="card">
    {
      (cardType === 'myAccount') && (
        <Link className="card-link" to={`/spectacle/edition/${id}`}>
          <img className="card-picture" src={`http://54.152.137.82/App-pour-les-festivaliers-back/public/upload/images/${image}`} alt="Affiche du spectacle" />
        </Link>
      )
    }
    {
      (cardType === 'home') && (
        <Link className="card-link" to={`/spectacle/id/${id}`}>
          <img className="card-picture" src={`http://54.152.137.82/App-pour-les-festivaliers-back/public/upload/images/${image}`} alt="Affiche du spectacle" />
        </Link>
      )
    }
    <div className="card-content">
      <div className="card-description">
        <div className="card-title-wrapper">
          <span className="card-title">{title}</span>
          <span className="card-author"> de {authorName}</span>
        </div>
        <div className="card-item card-type">
          <Bookmark size={16} />
          <p>{type.name}</p>
        </div>
        <div className="card-item card-troop">
          <Info size={16} />
          <p>{troopName}</p>
        </div>
        <div className="card-item card-place">
          <MapPin size={16} />
          <p>{name}</p>
        </div>
        <div className="card-item card-time">
          <Clock size={16} />
          <p>Spectacle à <span className="time">{time}</span></p>
        </div>
        <div className="card-item card-dates-container">
          <Calendar size={16} />
          <div className="dates-list">
            {dates.map((date) => (
              <p key={date.startDate}>
                Du {formatDateText(date.startDate)} au {formatDateText(date.endDate)}
              </p>
            ))}
          </div>
        </div>

      </div>
      {
        (cardType === 'myAccount') && (
          <Link
            to={`/spectacle/edition/${id}`}
            className="card-button"
            type="button"
          >
            Modifier / Supprimer
          </Link>
        )
      }
      {
        (cardType === 'home') && (
          <Link
            to={`/spectacle/id/${id}`}
            className="card-button"
            type="button"
          >
            En savoir plus
          </Link>
        )
      }
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  troopName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dates: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.object.isRequired,
  time: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
};

export default Card;
