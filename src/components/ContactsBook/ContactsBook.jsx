import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
import { ContactsUL } from "./ContactsBook.styled";
import { selectVisibleContacts } from "redux/selectors";

export const ContactsBook = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  
  return (
    <div>
      <ContactsUL>
        {visibleContacts.map(contact =>
          <Contact key={contact.id} contact={contact} />)}
      </ContactsUL>
    </div>
  );
}