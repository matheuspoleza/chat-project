import { AnyRequestButton, ChoiceTrace, GeneralTrace } from '@voiceflow/general-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import useChatSection from '../../hooks/useChatSection';
import { selectIsLastChoice } from '../../store/chat/selectors';

interface Props {
  message: GeneralTrace;
}

const ChoiceMessage: React.FC<Props> = ({ message }) => {
  const { userID } = useParams<{ userID: string }>();
  const { sendMessage } = useChatSection(userID);
  const isLastChoice = useSelector(selectIsLastChoice(userID, message as ChoiceTrace));

  const handleChoiceSelect = (button: AnyRequestButton) => {
    const { payload } = button.request;
    let message;

    if (typeof payload === 'string') {
      message = payload;
    } else {
      message = payload.query;
    }

    sendMessage(message);
  };

  if (!isLastChoice) return null;

  return (
    <div className="ui basic buttons" style={{ marginTop: '4px' }}>
      {message.payload.buttons.map((button: AnyRequestButton, idx: number) => (
        <button className="ui button" key={idx} onClick={() => handleChoiceSelect(button)}>
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default ChoiceMessage;
