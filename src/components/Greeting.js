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
    <div className="container">
      <h1 className="label">
        Random Message:
      </h1>
      <span className="text-success">
        &quot;
        { messages.message }
        &quot;
      </span>
    </div>
  );
};

export default Greeting;
