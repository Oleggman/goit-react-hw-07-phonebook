export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter.value;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state).toLowerCase();

  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });
}