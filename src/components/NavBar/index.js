import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { User } from 'react-feather';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

import logo from 'src/assets/images/layout/logo.png';

const NavBar = ({
  responsiveMenu,
  handleToggleMenu,
  windowWidth,
  handleWindowWidth,
  isLogged,
  logOut,
}) => {
  /** Manage toggle for responsive display of menu items */
  const toggleNavSmallScreen = () => {
    handleToggleMenu();
  };
  useEffect(() => {
    /** Update state value for windowWidth when the user resize its window */
    const changeWidth = () => {
      handleWindowWidth(window.innerWidth);
    };
    /** Add event listener on resizing window */
    window.addEventListener('resize', changeWidth);
    /** Clean up function */
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <div className="navbar">
      <NavLink
        to="/"
        key="navlink-home"
        className="navbar-menu-item"
        activeClassName="navbar-menu-item--active"
        exact
      >
        <img src={logo} alt="Avignon Fest'OFF" className="navbar-logo" />
      </NavLink>

      <nav className="navbar-menu-container">
        {
          /** Display menu items */
          (responsiveMenu || windowWidth >= 768) && (
          <ul className="navbar-menu">
            {
              /** Display of menu items for unidentified users */
              (!isLogged && (
                <>
                  <NavLink
                    to="/inscription"
                    key="navlink-signUp"
                    className="navbar-menu-item"
                    activeClassName="navbar-menu-item--active"
                    exact
                  >
                    Inscription Artiste
                  </NavLink>
                  <NavLink
                    to="/connexion"
                    key="navlink-logIn"
                    className="navbar-menu-item"
                    activeClassName="navbar-menu-item--active"
                    exact
                  >
                    Connexion Artiste
                  </NavLink>
                </>
              ))
            }
            {
              /** Display of menu items for identified users */
              (isLogged && (
                <>
                  <NavLink
                    to="/artiste"
                    key="navlink-myAccount"
                    className="navbar-menu-item"
                    activeClassName="navbar-menu-item--active"
                    exact
                  >
                    Espace Artiste
                  </NavLink>
                  <a
                    key="navlink-logOut"
                    className="navbar-menu-item"
                    onClick={logOut}
                  >
                    Déconnexion
                  </a>
                </>
              ))
            }
          </ul>
          )
        }
        {/** Menu Icon for mobile screens */}
        <User
          className="navbar-menu-responsive"
          onClick={toggleNavSmallScreen}
          size={36}
        />
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  responsiveMenu: PropTypes.bool.isRequired,
  handleToggleMenu: PropTypes.func.isRequired,
  windowWidth: PropTypes.number.isRequired,
  handleWindowWidth: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};

export default NavBar;
