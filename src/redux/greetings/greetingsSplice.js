import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/greetings/random_greeting';

export const fetchRandomGreetings = createAsyncThunk('messages/fetchRandomGreetings', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error(error);
  }
});

const initialState = {
  messages: {},
  isLoading: false,
};

const greetingsSlice = createSlice({
  name: 'messageList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreetings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRandomGreetings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = action.payload;
      })
      .addCase(fetchRandomGreetings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingsSlice.reducer;
