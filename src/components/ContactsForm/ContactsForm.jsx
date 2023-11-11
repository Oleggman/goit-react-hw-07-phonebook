import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { FormTitle, StyledForm, InputBox, InputLabel, StyledField, SubmitBtn, Error } from './ContactsForm.styled';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
      .trim()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Invalid name format.'
        )
      .min(3, 'Too short contact name!')
      .max(50, 'Too long contact name!')
      .required('Required'),
  phone: Yup.string()
      .trim()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Invalid phone number format'
      )
      .required('Required'),
 });

export const ContactsForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmitForm = (values, helpers) => {
    if (contacts.some(contact => contact.name === values.name)) {
      Notiflix.Notify.failure('This person already exists');
      helpers.resetForm();
      return;
    }

    dispatch(addContact(values));
    helpers.resetForm();
  }

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={ContactSchema}
      onSubmit={onSubmitForm}
    >
      <StyledForm>
        <FormTitle>Add contact</FormTitle>
        <InputBox>
          <StyledField name="name" autoComplete="off" required />
          <InputLabel>Name</InputLabel>
          <Error component='p' name="name" />
        </InputBox>
        <InputBox>
          <StyledField type="tel" autoComplete="off" name="phone" required />
          <InputLabel>Phone</InputLabel>
          <Error component='p' name="phone" />
        </InputBox>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </StyledForm>
    </Formik>
  )
}
