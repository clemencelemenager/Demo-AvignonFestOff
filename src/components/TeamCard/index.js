import React from 'react';
import PropTypes from 'prop-types';

import './teamcard.scss';

const TeamCard = ({
  img, name, developper, linked, git,
}) => (
  <div className="teamcard">
    <img src={img} alt="Membre de l'équipe" />
    <div className="teamcard-infos">
      <h2>{name}</h2>
      <p>Développeur {developper}</p>
      <p className="teamcard-socials">
        <i className="fab fa-linkedin" /><a href={linked} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
      <p className="teamcard-socials">
        <i className="fab fa-github" /><a href={git} target="_blank" rel="noopener noreferrer"><span className="github">Github</span></a>
      </p>
    </div>
  </div>
);

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  developper: PropTypes.string.isRequired,
  linked: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
};

export default TeamCard;
