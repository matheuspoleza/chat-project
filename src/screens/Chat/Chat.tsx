import React from 'react';
import { RouteComponentProps } from 'react-router';

import ChatLoading from '../../components/ChatLoading';
import ChatMessage from '../../components/ChatMessage';
import ChatTraces from '../../components/ChatTraces';
import useChatSection from '../../hooks/useChatSection';
import useUser from '../../hooks/useUser';
import { ChatContainer, ChatInteraction, ChatInteractionList } from './Chat.styles';

interface Props {
  userID: string;
}

const Chat: React.FC<RouteComponentProps<Props>> = ({ match }) => {
  const { userID } = match.params;
  const { user } = useUser(userID);
  const { chatSection, startSection, isLoading, sendMessage } = useChatSection(userID);
  const inputEl = React.useRef<HTMLInputElement>(null);
  const messageEl = React.useRef<HTMLDivElement>(null);

  const scrollToNewMessage = () => {
    if (messageEl.current) {
      messageEl.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cleanInput = () => {
    if (inputEl.current) {
      inputEl.current.value = '';
      inputEl.current.focus();
    }
  };

  const handleSend = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputEl.current) return;
    sendMessage(inputEl.current.value);
    cleanInput();
  };

  React.useEffect(() => {
    if (!chatSection) {
      startSection();
    }
  }, []);

  React.useEffect(scrollToNewMessage, [chatSection?.interactions]);

  return (
    <ChatContainer>
      <div className="ui threaded comments" style={{ width: '100%' }}>
        <h3 className="ui dividing header">{user?.name} Chat</h3>

        <ChatInteraction>
          {chatSection?.interactions?.map((interaction, idx) => (
            <ChatInteractionList key={`interactions-${idx}`}>
              {interaction.message && <ChatMessage message={interaction.message} />}
              {interaction.traces && <ChatTraces traces={interaction.traces} />}
            </ChatInteractionList>
          ))}

          {isLoading && <ChatLoading />}

          <div ref={messageEl} />
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
