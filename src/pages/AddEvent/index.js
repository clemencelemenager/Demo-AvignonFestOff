import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import FileInputComponent from 'react-file-input-previews-base64';
import { Link, Redirect } from 'react-router-dom';
import { X, PlusSquare } from 'react-feather';

import EventField from './EventField';
import SelectedDates from './SelectedDates';

import './addevent.scss';

const AddEvent = ({
  fetchTypes,
  fetchPlaces,
  types,
  places,
  user,
  type,
  place,
  title,
  authorName,
  troopName,
  duration,
  time,
  startDate,
  endDate,
  date,
  dates,
  dayOffs,
  eventDescription,
  troopDescription,
  fullPrice,
  subscriberPrice,
  reducedPrice,
  childrenPrice,
  reservationContact,
  handleField,
  handleSubmitDates,
  handleSubmitDayOff,
  handleSubmitForm,
  handleUploadFile,
  isSaved,
  updateSelectedDates,
  updateSelectedDayOffs,
  errors,
}) => {
  /** Get list of types and places from API */
  useEffect(() => {
    fetchTypes();
    fetchPlaces();
  }, []);

  /** Get input names which are invalid */
  const inputListErrors = Object.keys(errors);

  /** Display alert if errors */
  useEffect(() => {
    // console.log('check errors: ', errors);
    if (inputListErrors.length > 0) {
      // eslint-disable-next-line no-alert
      window.alert('Veuillez vérifier la saisie des champs obligatoires');
    }
  }, [errors]);

  /** Check if dates are not empty before submit */
  const handleCheckSubmitForm = (e) => {
    e.preventDefault();
    if (dates.length === 0) {
      // eslint-disable-next-line no-alert
      window.alert('Veuillez renseigner au moins une date');
    }
    else {
      handleSubmitForm(e);
    }
  };

  return (
    <>
      {/** While new event is not saved or user is identified, display form */
        (!isSaved && user !== null) && (

        <div className="addEvent">
          <h1 className="addEvent-title">
            Créer un nouvel événément
          </h1>
          <p className="input-help">Les champs avec * sont obligatoires.</p>

          <form
            className="addEvent-form"
            name="addEventForm"
            onSubmit={(e) => handleCheckSubmitForm(e)}
          >

            <fieldset className="form-fieldset-general">
              <legend>Présentation générale</legend>

              <label htmlFor="type">
                <p className="label">Type d'événement * :</p>
                <select
                  name="type"
                  id="type"
                  className="input-select"
                  value={type}
                  onChange={(e) => handleField(parseInt(e.currentTarget.value, 10), 'type')}
                  required
                >
                  <option value="">-- Sélectionnez le type d'événément :</option>
                  {types.map((typeItem) => (
                    <option key={typeItem.name} value={typeItem.id}>{typeItem.name}</option>
                  ))}
                </select>
              </label>

              <label htmlFor="place">
                <p className="label">Lieu de l'événement * :</p>
                <select
                  name="place"
                  id="place"
                  className="input-select"
                  value={place}
                  onChange={(e) => handleField(parseInt(e.currentTarget.value, 10), 'place')}
                  required
                >
                  <option value="">-- Sélectionnez le lieu :</option>
                  {
                    places.map((placeItem) => (
                      <option
                        key={placeItem.name}
                        value={placeItem.id}
                      >
                        {placeItem.name}
                      </option>
                    ))
                  }
                </select>
              </label>

              <EventField
                label="Nom de l'événement * :"
                name="title"
                value={title}
                fieldType="text"
                handleField={handleField}
              />

              <EventField
                label="Auteur * :"
                name="authorName"
                value={authorName}
                fieldType="text"
                handleField={handleField}
              />

              <EventField
                label="Nom de la troupe / de l'artiste * :"
                name="troopName"
                value={troopName}
                fieldType="text"
                handleField={handleField}
              />

              <div className="duration">
                <EventField
                  label="Durée de la représentation * :"
                  name="duration"
                  value={duration}
                  placeholder="60"
                  fieldType="number"
                  handleField={handleField}
                />
                <p className="suffix">mn</p>
              </div>

              <div className="time">
                <EventField
                  label="Heure de la représentation * :"
                  name="time"
                  value={time}
                  placeholder="18h00"
                  fieldType="time"
                  handleField={handleField}
                />
              </div>

              <FileInputComponent
                labelText="Affiche de l'événement :"
                labelStyle={{ fontSize: 16 }}
                multiple={false}
                callbackFunction={(file) => {
                  handleUploadFile(file);
                }}
                accept="image/*"
                buttonComponent={(
                  <button
                    type="button"
                    className="upload-file-button"
                  >
                    Joindre une image
                  </button>
            )}
              />

            </fieldset>

            <fieldset className="form-fieldset-details ">
              <legend>Présentation détaillée</legend>

              <EventField
                label="Description de l'événement * :"
                name="eventDescription"
                value={eventDescription}
                fieldType="textarea"
                handleField={handleField}
              />

              <EventField
                label="Description de la troupe * :"
                name="troopDescription"
                value={troopDescription}
                fieldType="textarea"
                handleField={handleField}
              />

            </fieldset>

            <fieldset className="form-fieldset-dates ">
              <legend>Date(s) de représentation</legend>

              {/** display of selected dates and dayOffs */}
              <div className="selectedDates">
                <p className="selectedDates-title label">
                  Dates enregistrées * :
                </p>
                { /** If no dates selected, display a notice message */
                  ((dates.length + dayOffs.length) === 0)
                  && (
                  <p className="input-help">
                    Vous n'avez pas encore sélectionné de dates.
                  </p>
                  )
                }
                {
                  dates.map((dateItem) => (
                    <SelectedDates
                      key={`${dateItem.startDate}-${dateItem.endDate}`}
                      startDate={dateItem.startDate}
                      endDate={dateItem.endDate}
                      dateType="dates"
                      updateSelectedDates={updateSelectedDates}
                      dates={dates}
                      user={user}
                    />
                  ))
                }
                {
                  dayOffs.map((dayOffItem) => (
                    <SelectedDates
                      key={`${dayOffItem.date}`}
                      date={dayOffItem.date}
                      dateType="dayOffs"
                      updateSelectedDayOffs={updateSelectedDayOffs}
                      dayOffs={dayOffs}
                      user={user}
                    />
                  ))
                }
              </div>

              {/** onClick on button, display div to select dates */}
              <div
                className="add-dates-button"
                onClick={() => {
                  document.querySelector('.selectDates-container').style.display = 'flex';
                }}
              >
                <PlusSquare color="#333" />
                <p>Ajouter une plage de dates</p>
              </div>

              {/** displayed only on request */}
              <div className="selectDates-container">
                <X
                  className="selectDates-button-nodisplay"
                  size={18}
                  onClick={() => {
                    const datesContainer = document.querySelector('.selectDates-container');
                    datesContainer.style.display = 'none';
                  }}
                />

                <EventField
                  label="Date de début :"
                  name="startDate"
                  value={startDate}
                  fieldType="date"
                  handleField={handleField}
                />
                <EventField
                  label="Date de fin :"
                  name="endDate"
                  value={endDate}
                  fieldType="date"
                  handleField={handleField}
                />

                <button
                  className="selectDate-submit"
                  type="button"
                  onClick={() => {
                    /** Get startDate, endDate, id user from state */
                    const newDates = {
                      startDate,
                      endDate,
                      user,
                    };
                    /** Action to add these details to the state dates */
                    handleSubmitDates(newDates);
                    /** Set display none to selectDates-container */
                    document.querySelector('.selectDates-container').style.display = 'none';
                  }}
                >
                  Ajouter
                </button>
              </div>

              {/** onClick on button, display div to select day_off */}
              <div
                className="add-dates-button"
                onClick={() => {
                  document.querySelector('.selectDayOff-container').style.display = 'flex';
                }}
              >
                <PlusSquare color="#333" />
                <p>Ajouter un jour de relâche</p>
              </div>

              {/** displayed only on request */}
              <div className="selectDayOff-container">
                <X
                  className="selectDates-button-nodisplay"
                  size={18}
                  onClick={() => {
                    const dayOffContainer = document.querySelector('.selectDayOff-container');
                    dayOffContainer.style.display = 'none';
                  }}
                />

                <EventField
                  label="Relâche :"
                  name="date"
                  value={date}
                  fieldType="date"
                  handleField={handleField}
                />

                <button
                  className="selectDate-submit"
                  type="button"
                  onClick={() => {
                    /** Get date id user from state */
                    const newDayOff = {
                      date,
                      user,
                    };
                    /** Action to add these details to the state dates */
                    handleSubmitDayOff(newDayOff);
                    /** Set display none to selectDayOff-container */
                    document.querySelector('.selectDayOff-container').style.display = 'none';
                  }}
                >
                  Ajouter
                </button>
              </div>

            </fieldset>

            <fieldset className="form-fieldset-prices ">
              <legend>Tarifs & Réservation</legend>
              <p className="input-help">Indiquer 0 si entrée gratuite</p>

              <div className="prices-wrapper">

                <EventField
                  label="Tarif plein * :"
                  name="fullPrice"
                  value={fullPrice}
                  fieldType="price"
                  handleField={handleField}
                />

                <EventField
                  label="Tarif abonné :"
                  name="subscriberPrice"
                  value={subscriberPrice}
                  fieldType="price"
                  handleField={handleField}
                  optionnal
                />

                <EventField
                  label="Tarif réduit :"
                  name="reducedPrice"
                  value={reducedPrice}
                  fieldType="price"
                  handleField={handleField}
                  optionnal
                />

                <EventField
                  label="Tarif enfant :"
                  name="childrenPrice"
                  value={childrenPrice}
                  fieldType="price"
                  handleField={handleField}
                  optionnal
                />

              </div>

              <div className="reservation">
                <EventField
                  label="Contact de réservation :"
                  name="reservationContact"
                  value={reservationContact}
                  placeholder="Numéro de téléphone"
                  fieldType="phone"
                  handleField={handleField}
                />
              </div>

            </fieldset>

            <div className="addEvent-buttons-container">
              {/** Cancel form and return to my account */}
              <Link
                to="/artiste"
                className="addEvent-form-cancel"
              >
                Annuler
              </Link>
              {/** Submit form add event */}
              <button
                className="addEvent-form-submit"
                type="submit"
              >
                Créer l'événement
              </button>
            </div>

          </form>

        </div>
        )
      }
      {/** When new event is saved or user not identified, redirect to myAccount */
        (isSaved || user == null) && (
          <Redirect to="/artiste" />
        )
      }
    </>

  );
};

AddEvent.propTypes = {
  fetchTypes: PropTypes.func.isRequired,
  fetchPlaces: PropTypes.func.isRequired,
  types: PropTypes.array.isRequired,
  places: PropTypes.array.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  place: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  troopName: PropTypes.string.isRequired,
  duration: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  time: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired, // date of day off
  dates: PropTypes.array.isRequired,
  dayOffs: PropTypes.array.isRequired,
  eventDescription: PropTypes.string.isRequired,
  troopDescription: PropTypes.string.isRequired,
  fullPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  subscriberPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  reducedPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  childrenPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  reservationContact: PropTypes.string.isRequired,
  handleField: PropTypes.func.isRequired,
  handleSubmitDates: PropTypes.func.isRequired,
  handleSubmitDayOff: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  handleUploadFile: PropTypes.func,
  isSaved: PropTypes.bool.isRequired,
  updateSelectedDates: PropTypes.func.isRequired,
  updateSelectedDayOffs: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default AddEvent;
