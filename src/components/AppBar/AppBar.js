import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './AppBar.module.css';
import { Navbar, Nav } from 'react-bootstrap';

const AppBar = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
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

export default AppBar;
