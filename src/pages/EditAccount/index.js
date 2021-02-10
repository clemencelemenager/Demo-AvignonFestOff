import React, { useEffect } from 'react';
import { Redirect, useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './editaccount.scss';

import Field from 'src/components/Field';

const EditAccount = ({
  fetchUser,
  email,
  firstName,
  lastName,
  changeField,
  isLogged,
  sendChangeUser,
  isEdited,
  id,
}) => {
  const history = useHistory();
  // Get the user's info when component mount
  useEffect(() => {
    fetchUser();
  }, []);

  // Send a request to API when form is submit
  const handleSubmit = (event) => {
    event.preventDefault();
    sendChangeUser();
  };

  return (
    <>
      {!isLogged && (
        <Redirect to="/connexion" />
      )}
      <div className="edit-account">
        <h2 className="edit-title">Edition de profil</h2>
        {isEdited && (
          <>
            <div className="hidden">
              { setTimeout(() => {
                history.push('/artiste');
              }, 2500) }
            </div>
            <div className="edit-message">
              <p className="edit-ok">Votre profil a été modifié avec succès !</p>
              <p className="edit-ok">Vous allez être redirigé automatiquement sur votre page artiste</p>
            </div>
          </>
        )}
        <form autoComplete="on" className="edit-form" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
            manageChange={changeField}
            value={email}
          />
          <Field
            name="firstName"
            type="firstName"
            placeholder="Prénom"
            manageChange={changeField}
            value={firstName}
          />
          <Field
            name="lastName"
            type="lastName"
            placeholder="Nom de famille"
            manageChange={changeField}
            value={lastName}
          />
          <Link to={`/artiste/edition/motdepasse/${id}`}>Vous voulez changer de mot de passe, c'est par ici !</Link>
          <button
            type="submit"
            className="edit-button"
          >
            Valider
          </button>
        </form>
      </div>
    </>
  );
};

EditAccount.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  sendChangeUser: PropTypes.func.isRequired,
  isEdited: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default EditAccount;
