/* eslint-disable max-len */
import React from 'react';

import './legalmentions.scss';

const LegalMentions = () => (
  <div className="legalmentions">
    <h1 className="legalmentions-title">
      Mentions légales
    </h1>
    <div className="legalmentions-content">
      <p>Cette application web est issue d'un projet pédagogique de formation en développement web, de ce fait il est indépendant de l'organisation du festival d'Avignon.</p>
      <p>Les événements sur le site internet sont créés et publiés par les utilisateurs ayant créé un compte : cette fonctionnalité de création d'événement est destinée aux troupes de théâtre afin de faciliter la diffusion et la visibilité de leurs spectacles. L'équipe d'édition du site internet n'est pas responsable de la véracité et conformité des informations. </p>
      <p><strong>Hébergement :</strong> <a href="http://aws.amazon.com">Amazon Web Services LLC</a>, P.O. Box 81226 Seattle, WA 98108-1226</p>
      <p><strong>Utilisation des cookies :</strong> Un cookie d'authentification sera déposé sur le navigateur internet pour tout utilisateur ayant créé un compte et s'y connectant, ceci dans un but de sécurisation de la connexion au compte utilisateur. La durée de validité de ce cookie est inférieure à 24h. Aucun cookie publicitaire n'est déposé.</p>
      <p><strong>Protection des données personnelles :</strong> tout utilisateur ayant créé un compte en fournissant email, prénom et nom peut accéder à tout moment à la modification et suppression de ses données dans son compte en ligne. </p>
    </div>
  </div>
);

export default LegalMentions;
