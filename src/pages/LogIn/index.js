/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import './login.scss';

import Field from 'src/components/Field';

const LogIn = ({ username, password, changeField, submitLogin, isLogged, isError }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitLogin();
  };

  return (
    <>
      {!isLogged && (

        <div className="login">
          <h2 className="login-title">Connexion</h2>
          {isError && (
            <div className="login-error">
              <p>Une erreur dans la combinaison email/mot de passe a été détectée à la connexion ! </p>
              <p>Veuillez réessayer de vous connecter.</p>
            </div>
          )}
          <form autoComplete="on" className="login-form" onSubmit={handleSubmit}>
            <Field
              name="email"
              placeholder="Adresse Email"
              manageChange={changeField}
              value={username}
            />
            <Field
              name="password"
              type="password"
              placeholder="Mot de passe"
              manageChange={changeField}
              value={password}
            />
            <button
              type="submit"
              className="login-button"
            >
              Valider
            </button>
          </form>
          <Link className="login-signup" to="inscription">Pas de compte ? Cliquer ici !</Link>
        </div>
      )}
      {isLogged && (
        <Redirect to="/artiste" />
      )}
    </>
  );
};

LogIn.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default LogIn;
