import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const contactsList = contacts.contacts;

  if (!contacts) {
    return null;
  }

  const filteredContacts = filter
    ? contactsList.filter(contact =>
        contact.name.toLowerCase().includes(filter.text)
      )
    : contactsList;

  return (
    <div className={css.contactList}>
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <ContactListItem contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
