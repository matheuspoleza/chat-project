import React, { useEffect, useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import stateApi from '../../api/stateApi';

interface Props {
  userID: string;
}

const Chat: React.FC<RouteComponentProps<Props>> = ({ match }) => {
  const { userID } = match.params;
  const [messages, setMessages] = useState<string[]>([]);
  const inputEl = useRef<HTMLInputElement>(null);

  const handleSend = async (event: React.FormEvent) => {
    event.preventDefault();

    if (inputEl.current) {
      const message = inputEl.current.value;
      const newMessages = [];
      const response = await stateApi.interact(message, userID);

      for (let i = 0; i < response.length; i++) {
        const responseMessage = response[i];
        if (responseMessage.type === 'end') {
          setMessages([]);
          return;
        }

        if (responseMessage.type === 'speak') {
          newMessages.push(responseMessage.payload.message);
        }
      }

      setMessages([...messages, message, ...newMessages]);
    }
  };

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.value = '';
    }
  }, [messages]);

  return (
    <div>
      <h1>{userID} Chat</h1>

      <dl>
        {messages.map((message, idx) => {
          return <dd key={idx}>{message}</dd>;
        })}
      </dl>

      <form onSubmit={handleSend}>
        <input ref={inputEl} placeholder="user input here" />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Chat;
