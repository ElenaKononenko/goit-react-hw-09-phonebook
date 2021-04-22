import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.link}>
      <Nav.Link as={NavLink} to="/register" exact>
        Register
      </Nav.Link>
      <Nav.Link as={NavLink} to="/login" exact>
        Log In
      </Nav.Link>
    </div>
  );
};
export default AuthNav;
