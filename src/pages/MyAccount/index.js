/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link, useHistory } from 'react-router-dom';

import Loader from 'src/components/Loader';
import Card from 'src/components/Card';

import './myaccount.scss';

const MyAccount = ({
  firstName,
  isLogged,
  artistEvents,
  fetchMyAccount,
  id,
  confirmDelete,
  validateDelete,
  sendDeleteAccount,
  isDeleted,
  loader,
  toggleLoader,
  cancelDeleteAccount,
}) => {
  useEffect(() => {
    fetchMyAccount();
    /** Launch loader */
    toggleLoader();
  }, []);

  const history = useHistory();

  // When user click on delete my account.
  const handleButtonClick = () => {
    confirmDelete();
  };
  // When user click on delete my account.
  const handleDeleteAccount = () => {
    sendDeleteAccount(id);
  };
  const handleCancelDeleteAccount = () => {
    cancelDeleteAccount();
  };

  return (
    <>
      {(isLogged && loader) && <Loader />}
      {
        /** if account has been deleted, display confirmation message */
        isDeleted && (
          <>
            <div className="hidden">
              { setTimeout(() => {
                history.push('/');
              }, 2500) }
            </div>
            <p className="myaccount-delete-message">
              Votre compte a bien été supprimé : tous vos événements sont supprimés aussi.
            </p>
            <p className="myaccount-delete-message">
              Vous allez être redirigé(e) vers la page d'accueil.
            </p>
          </>
        )
      }
      {
        /** if user not identified, redirect to login  */
        (!isDeleted && !isLogged) && (
          <Redirect to="/connexion" />
        )
      }
      {
        /** if user is identified, display account */
        (!loader && isLogged) && (
          <div className="myaccount">
            <div className="myaccount-header">
              <h1 className="myaccount-title">
                Bienvenue {firstName} sur votre espace Artiste !
              </h1>
              <div className="myaccount-wrapper-button">

                <Link
                  to={`/artiste/edition/${id}`}
                  className="myaccount-button button-modify"
                >
                  Modifier mon profil
                </Link>
                {!validateDelete && (
                  <button
                    type="button"
                    className="myaccount-button button-delete"
                    onClick={handleButtonClick}
                  >
                    Supprimer mon profil
                  </button>
                )}
                {validateDelete && (
                  <>
                    <span
                      type="button"
                      className="myaccount-button button-cancel-delete"
                      onClick={handleCancelDeleteAccount}
                    >
                      Annuler la suppression
                    </span>
                    <span
                      type="button"
                      className="myaccount-button button-confirm-delete"
                      onClick={handleDeleteAccount}
                    >
                      Confirmer la suppression
                    </span>
                  </>
                )}
                <Link
                  to={`/artiste/contact/${id}`}
                  className="myaccount-button button-admin"
                >
                  Contact Administrateur
                </Link>
              </div>
            </div>

            <h2
              className="myaccount-subtitle"
            >
              Mes spectacles :
            </h2>
            {/* {console.log(artistEvents)} */}

            <div className="myaccount-create-event-container">
              <Link
                to="/spectacle/ajout"
                className="myaccount-create-event-button"
              >
                Créer un nouvel événement
              </Link>
            </div>

            <div className="myaccount-wrapper-event">
              { artistEvents.map((artistEvent) => (
                <Card
                  key={artistEvent.id}
                  {...artistEvent}
                  {...artistEvent.place}
                  id={artistEvent.id}
                  cardType="myAccount"
                />
              ))}
            </div>

          </div>
        )
      }
    </>
  );
};

MyAccount.propTypes = {
  firstName: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  artistEvents: PropTypes.array.isRequired,
  fetchMyAccount: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  confirmDelete: PropTypes.func.isRequired,
  validateDelete: PropTypes.bool.isRequired,
  sendDeleteAccount: PropTypes.func.isRequired,
  isDeleted: PropTypes.bool.isRequired,
  loader: PropTypes.bool.isRequired,
  toggleLoader: PropTypes.func.isRequired,
  cancelDeleteAccount: PropTypes.func.isRequired,
};

export default MyAccount;
