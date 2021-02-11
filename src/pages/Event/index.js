/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Bookmark,
  Info,
  Calendar,
  Clock,
} from 'react-feather';
import classNames from 'classnames';

import Loader from 'src/components/Loader';

import './event.scss';
// Import functions to get event and format date
import { formatDateText } from 'src/utils';

const Event = ({
  event,
  fetchOneEvent,
  displayReport,
  reportModal,
  changeField,
  contentReport,
  sendReport,
  messageResponseReport,
}) => {
  // Get the event by his id to display the right informations
  const { id } = useParams();
  useEffect(() => {
    fetchOneEvent(id);
  }, [Event]);

  // Controlled input for the form of reports
  const handleChange = (value, name) => {
    changeField(value, name);
  };
  // Treatment on submit of the report's form
  const handleReportSubmit = (e) => {
    e.preventDefault();
    sendReport(id);
  };

  return (
    <>
      {event.dates === undefined && <Loader />}
      {event.dates !== undefined && (
      <article className="event">
        <Link to="/">
          <ArrowLeft className="event-back-icon" size="30" />
        </Link>
        <div className="event-header">
          <h2 className="event-title">{event.title}</h2>
        </div>
        <div className="event-container">
          <div className="event-content">
            <div className="event-img">
              <img src={`${process.env.REACT_APP_ASSETS_URL}${event.image}`} alt="Affiche de l'événement" />
            </div>
            <div className="event-info">
              {/* <h3 className="event-subtitle">{event.troopName}</h3> */}
              <div className="event-first-part">
                <div className="event-author">Auteur : {event.authorName}</div>
                <div className="event-time">
                  <Clock size={16} />
                  <p>Spectacle à <span className="time">{event.time}</span></p>
                </div>
                <div><Calendar size={16} /><p>Date(s) :</p></div>
                <ul>
                  {event.dates.map((date) => (
                    <li key={date.startDate}>Du <span className="event-date">{formatDateText(date.startDate)}</span> au <span className="event-date">{formatDateText(date.endDate)}</span></li>
                  ))}
                </ul>
                {event.dayOffs !== undefined && (
                  <div className="dayOffsList"> Jour(s) de relâche :
                    <ul>
                      {event.dayOffs.map((dayOff) => (
                        <li className="event-dayoff" key={dayOff.date}>{formatDateText(dayOff.date)}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="event-place">
                  <MapPin size={16} />
                  <p>Lieu : {event.place.name}</p>
                </div>
                <div className="event-genre">
                  <Bookmark size={16} />
                  <p>Genre : {event.type.name}</p>
                </div>
                <div className="event-troopName">
                  <Info size={16} />
                  <p>Troupe : {event.troopName}</p>
                </div>

                <p>Contact de réservation : {event.reservationContact}</p>
              </div>
              <div className="event-prices">
                <h4>Prix :</h4>
                <ul className="prices-list">
                  <li className="prices-item">Plein tarif : {event.fullPrice} €</li>
                  <li className="prices-item">Tarif réduit : {event.reducedPrice} €</li>
                  <li className="prices-item">Tarif abonné : {event.subscriberPrice} €</li>
                  <li className="prices-item">Tarif enfant : {event.childrenPrice} €</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="event-description">
            <div className="event-text">
              <h3>Description de l'événement</h3>
              <p>
                {event.eventDescription}
              </p>
            </div>
            <div className="event-troop">
              <h3>Description de la troupe</h3>
              <p>
                {event.troopDescription}
              </p>
            </div>
          </div>
          <div className={classNames('report-container',{'report-display': reportModal })}>
            <div className="event-report-modal">
              {messageResponseReport !== '' && (
                <p>{messageResponseReport}</p>
              )}
              {messageResponseReport === '' && (

                <form onSubmit={handleReportSubmit}>
                  <textarea
                    name="contentReport"
                    placeholder="Description du signalement"
                    onChange={(e) => handleChange(e.target.value, 'contentReport')}
                    value={contentReport}
                    required
                  />
                  <button type="submit" className="report-button">Envoyer</button>
                </form>
              )}
            </div>
          </div>
          <button type="button" className="event-report" onClick={displayReport}>Signaler</button>
        </div>
      </article>
      )}
    </>
  );
};

Event.propTypes = {
  event: PropTypes.object.isRequired,
  fetchOneEvent: PropTypes.func.isRequired,
  displayReport: PropTypes.func.isRequired,
  reportModal: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
  contentReport: PropTypes.string.isRequired,
  sendReport: PropTypes.func.isRequired,
  messageResponseReport: PropTypes.string.isRequired,
};

export default Event;
