import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import operations from '../../redux/operations';
import s from './ContactForm.module.css';
import { getLoading, getAllContacts } from '../../redux/selectors';
import { Form, Button, Spinner } from 'react-bootstrap';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit, value } = this.props;
    const uniqueContact = value.find(
      item => item.name.toLowerCase() === this.state.name.toLocaleLowerCase(),
    );
    if (!uniqueContact) {
      onSubmit(this.state);
      this.reset();
      return;
    }
    alert(`${this.state.name} is already in contacts`);
    // this.reset();
  };

  render() {
    const { name, number } = this.state;
    const { handleInputChange, handleSubmit } = this;
    return (
      <>
        {this.props.isLoading && (
          <Spinner className={s.loader} animation="border" variant="info" />
        )}
        {/* <form className={s.ContactForm} action="" onSubmit={handleSubmit}>
          <label className={s.formLabel} name="name">
            Name
            <input
              className={s.formInput}
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              required
              onChange={handleInputChange}
            />
          </label>
          <label className={s.formLabel} name="number" htmlFor="">
            Number
            <input
              className={s.formInput}
              name="number"
              type="tel"
              placeholder="0630000000"
              pattern="[0-9]{10}"
              required
              value={number}
              onChange={handleInputChange}
            />
          </label>
          <Button variant="outline-info" type="submit">
            Add contact
          </Button>
        </form> */}

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
}

const mapStateToProps = state => ({
  value: getAllContacts(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: obj => dispatch(operations.addContact(obj)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
