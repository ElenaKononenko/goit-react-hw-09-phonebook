import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './AppBar.module.css';
import { Navbar, Nav } from 'react-bootstrap';
const AppBar = ({ isAuthenticated }) => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <section>
          <Nav className={s.AppBar}>
            <Navigation />
            <div className={s.AuthNav}>
              {isAuthenticated ? <UserMenu /> : <AuthNav />}
            </div>
          </Nav>
        </section>
      </Navbar>
    </header>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);

// const AppBar = ({ isAuthenticated }) => (
//     <header style={styles.header}>
//       <Navigation />
//       {isAuthenticated ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
