import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import operations from '../../redux/operations';
import s from './ContactForm.module.css';
import { getLoading, getAllContacts } from '../../redux/selectors';
import { Form, Button, Spinner } from 'react-bootstrap';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const valueFilter = useSelector(getAllContacts);
  const isLoading = useSelector(getLoading);

  const handleInputChange = useCallback(e => {
    const { name, value } = e.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  }, []);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const uniqueContact = valueFilter.find(
        item => item.name.toLowerCase() === name.toLocaleLowerCase(),
      );
      if (!uniqueContact) {
        dispatch(operations.addContact({ name, number }));
        reset();
        return;
      }
      alert(`${name} is already in contacts`);
      reset();
    },
    [valueFilter, name, dispatch, number],
  );

  return (
    <>
      {isLoading && (
        <Spinner className={s.loader} animation="border" variant="info" />
      )}

      <Form className={s.ContactForm} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label className={s.formLabel} name="name">
            Name
          </Form.Label>
          <Form.Control
            className={s.formInput}
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className={s.formLabel} name="number">
            {' '}
            Number
          </Form.Label>
          <Form.Control
            className={s.formInput}
            name="number"
            type="tel"
            placeholder="0630000000"
            pattern="[0-9]{10}"
            required
            value={number}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="outline-info" type="submit">
          Add contact
        </Button>
      </Form>
    </>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
