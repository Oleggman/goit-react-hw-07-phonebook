import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://654f62ff358230d8f0cd42e1.mockapi.io";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/fetchAll', {});

export const deleteContact = createAsyncThunk('contacts/fetchAll', {});
