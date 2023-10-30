import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreetings } from '../redux/greetings/greetingsSplice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { messages, isLoading } = useSelector((store) => store.messageList);

  useEffect(() => {
    dispatch(fetchRandomGreetings());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>
        Random Message:
      </h1>
      <p>{ messages.message }</p>
    </div>
  );
};

export default Greeting;
