import React, { useEffect, useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import stateApi from '../../api/stateApi';
import capitalize from '../../utils/capitalize';
import { ChatContainer, ChatInteraction, ChatInteractionList } from './Chat.styles';

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
    <ChatContainer>
      <div className="ui threaded comments" style={{ width: '100%' }}>
        <h3 className="ui dividing header">{capitalize(userID)} Chat</h3>

        <ChatInteraction>
          <ChatInteractionList>
            {messages?.map((message, idx) => (
              <div key={idx}>{message}</div>
            ))}
          </ChatInteractionList>
        </ChatInteraction>

        <form className="ui reply form" onSubmit={handleSend}>
          <div className="field">
            <input ref={inputEl} placeholder="Start typing ..." />
          </div>
          <button type="submit" className="ui button">
            Send
          </button>
        </form>
      </div>
    </ChatContainer>
  );
};

export default Chat;
