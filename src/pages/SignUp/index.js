/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Field from 'src/components/Field';

import './signup.scss';

const SignUp = ({
  username,
  password,
  firstName,
  lastName,
  changeField,
  submitSignup,
  isCreated,
  secondPassword,
  errorPassword,
  errorMessageSignup,
}) => {
  const handleSignup = (event) => {
    event.preventDefault();
    // if the two password or the same we request api to create user's account
    if (password === secondPassword) {
      submitSignup();
    }
    // Or we send an error to tell the user the two passwords or not the same
    else {
      errorPassword();
    }
  };

  const history = useHistory();

  return (
    <div className="signup">
      {!isCreated && (
        <>
          <h2 className="signup-title">Inscription</h2>
          {errorMessageSignup !== '' && (
            <p className="signup-error">{errorMessageSignup}</p>
          )}
          <form autoComplete="on" className="signup-form" onSubmit={handleSignup}>
            <Field
              name="email"
              placeholder="Adresse Email *"
              manageChange={changeField}
              value={username}
            />
            <Field
              name="password"
              type="password"
              placeholder="Mot de passe *"
              manageChange={changeField}
              value={password}
            />
            <Field
              name="secondPassword"
              type="password"
              placeholder="Validation du mot de passe *"
              manageChange={changeField}
              value={secondPassword}
            />
            <Field
              name="firstName"
              type="firstname"
              placeholder="Prénom *"
              manageChange={changeField}
              value={firstName}
            />
            <Field
              name="lastName"
              type="lastname"
              placeholder="Nom de famille *"
              manageChange={changeField}
              value={lastName}
            />
            <div className="signup-infos">
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
              className="signup-button"
            >
              Valider
            </button>
          </form>
        </>
      )}
      {isCreated && (
        <div className="signup-validate">
          <div className="hidden">
            { setTimeout(() => {
              history.push('/connexion');
            }, 2500) }
          </div>
          <h2>Votre inscription a bien été réalisée, vous allez être redirigé vers la page de connexion !</h2>
        </div>
      )}
    </div>
  );
};

SignUp.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  submitSignup: PropTypes.func.isRequired,
  isCreated: PropTypes.bool.isRequired,
  secondPassword: PropTypes.string.isRequired,
  errorSignup: PropTypes.func.isRequired,
  errorPassword: PropTypes.func.isRequired,
  errorMessageSignup: PropTypes.string.isRequired,
};

export default SignUp;
