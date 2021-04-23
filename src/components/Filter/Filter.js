import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/action';
import s from './Filter.module.css';
import { getFilter } from '../../redux/selectors';
import { Form } from 'react-bootstrap';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = useCallback(
    e => {
      dispatch(actions.changeFilter(e.currentTarget.value));
    },
    [dispatch],
  );

  return (
    <Form>
      <Form.Group controlId="formBasicFilter">
        <Form.Label>
          Find contacts by name
          <Form.Control
            className={s.filterInput}
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
          />
        </Form.Label>
      </Form.Group>
    </Form>
  );
}
