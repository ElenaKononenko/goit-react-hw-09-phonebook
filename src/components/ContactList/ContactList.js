import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import operations from '../../redux/operations';
import { getVisibleContacts } from '../../redux/selectors';
import s from './ContactList.module.css';
import { Button } from 'react-bootstrap';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const onDeleteContact = useCallback(
    id => {
      dispatch(operations.deleteContact(id));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ul className={s.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.contactListItem}>
            {name}: {number}
            <Button variant="outline-info" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
