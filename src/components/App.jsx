import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { ContactsForm } from './ContactsForm/ContactsForm'
import { ContactsBook } from './ContactsBook/ContactsBook'
import { Filter } from './Filter/Filter'
import { MainContainer, AppTitle, ContactsList, ContactsTitle } from './App.styled';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  

  return (
    <div>
        <AppTitle><RiContactsBook2Fill />Phonebook</AppTitle>

        <MainContainer>
          <ContactsForm />

          <ContactsList>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter />
            <ContactsBook />
          </ContactsList>
        </MainContainer>
      </div>
  )
}
