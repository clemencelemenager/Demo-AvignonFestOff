import { connect } from 'react-redux';

import NavBar from 'src/components/NavBar';

import { toggleMenu, updateWindowWidth } from 'src/actions/settings';

import { logOut } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  responsiveMenu: state.settings.responsiveMenu,
  windowWidth: state.settings.windowWidth,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleMenu: () => {
    dispatch(toggleMenu());
  },
  handleWindowWidth: (newValue) => {
    dispatch(updateWindowWidth(newValue));
  },
  logOut: () => {
    dispatch(logOut());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
