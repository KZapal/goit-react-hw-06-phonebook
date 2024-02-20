import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/contactsSlice';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));

    const contactsFromLocalStorage = JSON.parse(
      localStorage.getItem('contacts')
    );
    const updatedContacts = contactsFromLocalStorage.filter(
      item => item.id !== contact.id
    );

    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <div className={css.itemIn}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button onClick={handleDelete} className={css.btn}>
        Delete
      </button>
    </div>
  );
};

export default ContactListItem;
