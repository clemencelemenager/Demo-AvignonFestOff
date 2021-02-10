/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import './page404.scss';

const Page404 = () => (
  <div className="page404">
    <h1 className="page404-title">
      Erreur 404
    </h1>
    <div className="page404-subtitle">
      Oups, cette page n'existe pas...
    </div>
    <div className="page404-content">
      La liste des spectacles est disponible sur la page d'accueil, reprenez votre recherche par là, vous trouverez sans doute votre bonheur !
    </div>
    <Link
      to="/"
      className="page404-button"
    >
      Revenir à l'accueil
    </Link>

  </div>
);

export default Page404;
