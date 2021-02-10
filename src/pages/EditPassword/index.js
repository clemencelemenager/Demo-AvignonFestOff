import React, { useEffect } from 'react';
import { Redirect, useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './editpassword.scss';

import Field from 'src/components/Field';

const EditPassword = ({
  password,
  secondPassword,
  newPassword,
  changeField,
  isLogged,
  isPasswordChanged,
  changePassword,
  errorPassword,
  errorMessage,
}) => {
  const history = useHistory();

  // Send a request to API when form is submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== secondPassword) {
      errorPassword();
    }
    else {
      changePassword();
    }
  };

  return (
    <>
      {!isLogged && (
        <Redirect to="/connexion" />
      )}
      <div className="password-account">
        <h2 className="password-title">Changement de mot de passe</h2>
        {errorMessage !== '' && (
          <p className="password-error">{errorMessage}</p>
        )}
        {isPasswordChanged && (
          <>
            <div className="hidden">
              { setTimeout(() => {
                history.push('/artiste');
              }, 2500) }
            </div>
            <div className="password-message">
              <p className="password-ok">Votre mot de passe a été modifié avec succès !</p>
              <p className="password-ok">Vous allez être redirigé automatiquement sur votre page artiste</p>
            </div>
          </>
        )}
        <form autoComplete="on" className="password-form" onSubmit={handleSubmit}>
          <Field
            name="password"
            type="password"
            placeholder="Ancien mot de passe *"
            manageChange={changeField}
            value={password}
          />
          <Field
            name="newPassword"
            type="password"
            placeholder="Nouveau mot de passe *"
            manageChange={changeField}
            value={newPassword}
          />
          <Field
            name="secondPassword"
            type="password"
            placeholder="Validation du nouveau mot de passe *"
            manageChange={changeField}
            value={secondPassword}
          />
          <div className="password-infos">
            * Tous les champs sont obligatoires.<br />
            Le mot de passe doit contenir au minimum :
            <ul>
              <li>- 1 majuscule</li>
              <li>- 1 minuscule</li>
              <li>- 1 chiffre</li>
            </ul>
          </div>
          <button
            type="submit"
            className="password-button"
          >
            Valider
          </button>
        </form>
      </div>
    </>
  );
};

EditPassword.propTypes = {
  changeField: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isPasswordChanged: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  secondPassword: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  changePassword: PropTypes.func.isRequired,
  errorPassword: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default EditPassword;
