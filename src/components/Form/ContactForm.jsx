import css from './ContactForm.module.css';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.reset();

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    if (contacts.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));

      const localStorageContacts =
        JSON.parse(localStorage.getItem('contacts')) || [];
      localStorageContacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(localStorageContacts));
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.formInput}
        type="text"
        name="name"
        placeholder="Name: full name"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <input
        className={css.formInput}
        type="number"
        name="number"
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
