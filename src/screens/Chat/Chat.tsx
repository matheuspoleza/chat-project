import { GeneralTrace } from '@voiceflow/general-types';
import React, { useEffect, useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import stateApi from '../../api/stateApi';
import ChatLoading from '../../components/ChatLoading';
import ChatMessage from '../../components/ChatMessage';
import ChatTraces from '../../components/ChatTraces';
import capitalize from '../../utils/capitalize';
import { ChatContainer, ChatInteraction, ChatInteractionList } from './Chat.styles';

interface Props {
  userID: string;
}

interface Interaction {
  message?: string;
  traces: GeneralTrace[];
}

interface Section {
  interactions: Interaction[];
}

const Chat: React.FC<RouteComponentProps<Props>> = ({ match }) => {
  const { userID } = match.params;
  const [isLoading, setIsLoading] = useState(false);
  const [previousInteractions, setPreviousInteractions] = useState<Interaction[]>([]);
  const [currentInteraction, setCurrentInteraction] = useState<Interaction>({ message: '', traces: [] });
  const [previousSections, setPreviousSections] = useState<Section[]>([]);
  const inputEl = useRef<HTMLInputElement>(null);
  const messageEl = useRef<HTMLDivElement>(null);

  const sendInteraction = async (message: string) => {
    if (!currentInteraction) return;

    try {
      setIsLoading(true);
      const response = await stateApi.interact(message, userID);

      for (let i = 0; i < response.length; i++) {
        const responseMessage = response[i];
        setCurrentInteraction((currentInteraction) => ({ ...currentInteraction, traces: [...currentInteraction.traces, responseMessage] }));
      }
    } catch (e) {
      alert('Error sending error message');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async (event: React.FormEvent) => {
    event.preventDefault();

    if (inputEl.current) {
      const message = inputEl.current.value;
      setPreviousInteractions([...previousInteractions, currentInteraction]);
      setCurrentInteraction({ message, traces: [] });
      sendInteraction(message);
    }
  };

  const scrollToNewMessage = () => {
    if (messageEl.current) {
      messageEl.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const startChatSection = () => {
    sendInteraction('');
  };

  const finishChatSection = () => {
    setPreviousSections((previousSections) => [...previousSections, { interactions: [...previousInteractions, currentInteraction] }]);
    setPreviousInteractions([]);
    setCurrentInteraction({ message: '', traces: [] });
    sendInteraction('');
  };

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.value = '';
    }
  }, [currentInteraction]);

  useEffect(() => {
    if (currentInteraction.traces.find((trace) => trace.type === 'end')) {
      setTimeout(finishChatSection, 1000);
    }
  }, [currentInteraction]);

  useEffect(scrollToNewMessage, [currentInteraction]);

  useEffect(startChatSection, []);

  return (
    <ChatContainer>
      <div className="ui threaded comments" style={{ width: '100%' }}>
        <h3 className="ui dividing header">{capitalize(userID)} Chat</h3>

        <ChatInteraction>
          <ChatInteractionList>
            {previousSections.map((section, idx) => {
              return (
                <div key={idx} style={{ opacity: '0.5' }}>
                  {section.interactions.map((interaction, idx) => {
                    return (
                      <div key={idx}>
                        <div>{interaction.message}</div>
                        {interaction.traces.map((trace, idx) => (
                          <div key={idx}>{trace.payload?.message}</div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              );
            })}

            <div>Section started</div>

            {previousInteractions &&
              previousInteractions.map((interaction, idx) => {
                return (
                  <div key={`previous-interactions-${idx}`}>
                    {interaction.message && <ChatMessage message={interaction.message} />}
                    {interaction.traces && <ChatTraces traces={interaction.traces} />}
                  </div>
                );
              })}

            {currentInteraction && (
              <div>
                {currentInteraction.message && <ChatMessage message={currentInteraction.message} />}
                {currentInteraction.traces && <ChatTraces traces={currentInteraction.traces} />}
              </div>
            )}
          </ChatInteractionList>

          <div ref={messageEl} />

          {isLoading && <ChatLoading />}
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
