import React from 'react';
// import ContactListItem from './ContactListItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import ContactListItem from './ContactListItem';
// import { contactsSlice } from '../../redux/contactsSlice';
// import PropTypes from 'prop-types';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts
    ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
    : [];

  console.log(JSON.parse(localStorage.getItem('contacts')));

  return (
    <div className={css.contactList}>
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <ContactListItem contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   deleteContacts: PropTypes.func,
// };

export default ContactList;
