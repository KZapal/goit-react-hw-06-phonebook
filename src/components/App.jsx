import ContactForm from './Form/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  // const [contacts, setContacts] = useState(getContactsLocalStorage());
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const handleSubmit = newContact => {
  //   const contactIn = contacts.find(
  //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //   );
  //   if (contactIn) {
  //     alert('This contact already is in contacts.');
  //   } else {
  //     const updatedContacts = [...contacts, newContact];
  //     localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  //     setContacts(updatedContacts);
  //   }
  // };

  return (
    <div className={css.mainBlock}>
      <h2 className={css.header}>Phone Book</h2>
      <ContactForm />
      <h2 className={css.header}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
