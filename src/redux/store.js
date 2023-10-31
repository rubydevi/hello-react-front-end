import { configureStore } from '@reduxjs/toolkit';
import greetingsreducer from './greetings/greetingsSplice';

const store = configureStore({
  reducer: {
    messageList: greetingsreducer,
  },
});

export default store;
