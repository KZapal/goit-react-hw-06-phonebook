import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contactsSlice';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

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

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
};

export default ContactListItem;
