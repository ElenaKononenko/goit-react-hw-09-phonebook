import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import styles from './UserMenu.module.css';
import defaultAvatar from './ava.gif';
import { Button } from 'react-bootstrap';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <img src={defaultAvatar} alt="" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <Button
        variant="outline-info"
        type="button"
        onClick={onLogout}
        className={styles.btn}
      >
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
