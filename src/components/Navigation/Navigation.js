import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import authselectors from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Nav } from 'react-bootstrap';

export default function Navigation() {
  const isAuthenticated = useSelector(authselectors.getIsAuthenticated);
  return (
    <nav>
      <Nav.Link as={NavLink} to="/" exact className={styles.link}>
        Home
      </Nav.Link>

      {isAuthenticated && (
        <Nav.Link as={NavLink} to="/contacts" exact className={styles.link}>
          Contacts
        </Nav.Link>
      )}
    </nav>
  );
}
