import { configureStore } from '@reduxjs/toolkit';
import messagesreducer from './greetings/greetingsSplice';

const store = configureStore({
  reducer: {
    messageList: messagesreducer,
  },
});

export default store;
