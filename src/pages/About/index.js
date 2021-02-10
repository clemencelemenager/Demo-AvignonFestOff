import React from 'react';

import './about.scss';

import TeamCard from 'src/components/TeamCard';

// import images for TeamCard
import anthony from 'src/assets/images/profil/anthony.jpg';
import pierre from 'src/assets/images/profil/pierre.jpeg';
import clemence from 'src/assets/images/profil/clemence.jpg';
import robin from 'src/assets/images/profil/robin.jpg';

const About = () => (
  <div className="about">
    <h1 className="about-title">
      L'équipe
    </h1>
    <div className="about-wrapper">
      <TeamCard img={clemence} name="Clémence Leménager" developper="Front-End React.js" linked="https://www.linkedin.com/in/clemenager/" git="https://github.com/clemencelemenager" />
      <TeamCard img={robin} name="Robin Ferreira Da Silva" developper="Front-End React.js" linked="https://www.linkedin.com/in/robinferreiradasilva/" git="https://github.com/RobinFERREIRADASILVA" />
      <TeamCard img={pierre} name="Pierre Garcia" developper="Back-End Symfony" linked="https://www.linkedin.com/in/pierre-garcia-m/" git="https://github.com/Pierre-mg" />
      <TeamCard img={anthony} name="Anthony Ammar" developper="Back-End Symfony" linked="https://www.linkedin.com/in/anthony-ammar/" git="https://github.com/Antho13710" />
    </div>
  </div>
);

export default About;
