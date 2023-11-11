import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter.value;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter], (contacts, filter) => {
    filter = filter.toLowerCase();
    
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    });
  }
)