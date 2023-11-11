import { useDispatch } from "react-redux";
import { ContactItem, DeleteBtn } from "./Contact.styled";
import { deleteContact } from "redux/operations";

export const Contact = ({ contact: { id, name, phone }}) => {
  const dispatch = useDispatch();
  
  return (
    <ContactItem>
      <p>{name}: {phone}</p>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>Delete</DeleteBtn>
    </ContactItem>
  );
}