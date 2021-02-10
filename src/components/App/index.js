// == Import npm
import React, { useEffect } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import NavBar from 'src/containers/NavBar';
import Home from 'src/containers/Home';
import Event from 'src/containers/Event';
import SignUp from 'src/containers/SignUp';
import LogIn from 'src/containers/LogIn';
import MyAccount from 'src/containers/MyAccount';
import EditAccount from 'src/containers/EditAccount';
import EditPassword from 'src/containers/EditPassword';
import AddEvent from 'src/containers/AddEvent';
import EditEvent from 'src/containers/EditEvent';
import Contact from 'src/containers/Contact';
import About from 'src/pages/About';
import LegalMentions from 'src/pages/LegalMentions';
import Footer from 'src/components/Footer';
import Page404 from 'src/pages/Page404';

// == Composant
const App = ({ fetchUser, id }) => {
  useEffect(() => {
    if (localStorage.getItem('token') !== null)
    {
      if (id !== 0) {
        fetchUser();
      }
    }
  }, []);

  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/spectacle/id/:id">
          <Event />
        </Route>
        <Route exact path="/inscription">
          <SignUp />
        </Route>
        <Route exact path="/connexion">
          <LogIn />
        </Route>
        <Route exact path="/artiste">
          <MyAccount />
        </Route>
        <Route exact path="/artiste/edition/:id">
          <EditAccount />
        </Route>
        <Route exact path="/artiste/edition/motdepasse/:id">
          <EditPassword />
        </Route>
        <Route exact path="/artiste/contact/:id">
          <Contact />
        </Route>
        <Route exact path="/spectacle/ajout">
          <AddEvent />
        </Route>
        <Route exact path="/spectacle/edition/:id">
          <EditEvent />
        </Route>
        <Route exact path="/a_propos">
          <About />
        </Route>
        <Route exact path="/mentions_legales">
          <LegalMentions />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

// == Export
export default App;
