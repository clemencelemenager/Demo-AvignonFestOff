import React from 'react';

import { Link } from 'react-router-dom'

import './footer.scss';

const Footer = () => (

  <footer>
    <div className="footer">
      <ul className="footer-list">
        <li><Link to="/a_propos" className="footer-item">A Propos</Link></li>
        <li><Link to="/mentions_legales" className="footer-item">Mentions Légales</Link></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
