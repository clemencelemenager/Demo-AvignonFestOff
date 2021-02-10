import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, useHistory } from 'react-router-dom';

import './contact.scss';

const Contact = ({
  object, content, changeField, sendMessage, contactMessage, isLogged,
}) => {
  const handleChange = (value, name) => {
    changeField(value, name);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  const history = useHistory();

  return (
    <div className="contact-container">
      {isLogged && (
      <div className="contact">
        <h2 className="contact-title">Contact Administrateur</h2>
        {contactMessage !== '' && (
          <>
            <div className="hidden">
              { setTimeout(() => {
                history.push('/artiste');
              }, 2500) }
            </div>
            <div className="contact-message">
              <p className="contact-ok">Votre message a bien été transmis ! Vous aurez un retour dans les prochains jours.</p>
            </div>
          </>
        )}
        <form autoComplete="on" className="contact-form" onSubmit={handleSubmit}>
          <input
            name="object"
            type="text"
            placeholder="Objet"
            onChange={(e) => handleChange(e.target.value, 'object')}
            required
            value={object}
          />
          <textarea
            name="content"
            placeholder="Contact"
            onChange={(e) => handleChange(e.target.value, 'content')}
            value={content}
            required
          />
          <button type="submit" className="contact-button">Envoyer</button>
        </form>
      </div>
      )}
      {!isLogged && (
      <Redirect to="/connexion" />
      )}
    </div>
  );
};

Contact.propTypes = {
  content: PropTypes.string.isRequired,
  object: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  contactMessage: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Contact;
