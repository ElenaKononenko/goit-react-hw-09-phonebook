import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/action';
import s from './Filter.module.css';
import { getFilter } from '../../redux/selectors';
import { Form } from 'react-bootstrap';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
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
}
const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
