import { createSlice } from "@reduxjs/toolkit";
import { deleteContact,addContact, fetchContacts } from "./operations";
import Notiflix from "notiflix";

const initialState = {
  items: [],
  isLoading: false,
  error: null
}

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
      Notiflix.Notify.success(`${action.payload.name} has been added to your contacts`);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === action.payload.id);
      state.items.splice(index, 1);
      Notiflix.Notify.success(`${action.payload.name} has been deleted from your contacts`);
    },
    [deleteContact.rejected]: handleRejected,
  },
})

export const contactsReducer = contactsSlice.reducer;