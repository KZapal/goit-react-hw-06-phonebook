import React, { useEffect, useState } from 'react';
import css from './ContactForm.module.css';
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const parseNumber = number => {
    const groups = number.match(/(\d{1,3})/g);
    const formattedString = groups.join('-');
    return formattedString;
  };

  const handleSubmit = event => {
    event.preventDefault();
    let newContact = {
      name: name,
      number: parseNumber(number),
      id: nanoid(),
    };

    dispatch(addContact(newContact));
    dispatch(getContacts);
    resetForm();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.formInput}
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name: full name"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <input
        className={css.formInput}
        type="number"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Phone number: seven digits"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

// ContactForm.propTypes = {
//   handleSubmit: PropTypes.func,
// };

export default ContactForm;
