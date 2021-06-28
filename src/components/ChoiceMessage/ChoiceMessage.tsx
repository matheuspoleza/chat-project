import { BaseRequest, ChoiceTrace } from '@voiceflow/general-types';
import React from 'react';

interface Props {
  message: ChoiceTrace;
  onChoiceSelect?: (request: BaseRequest) => void;
}

const ChoiceMessage: React.FC<Props> = ({ message, onChoiceSelect }) => {
  if (message.payload.buttons.length === 0 || !message.payload.buttons[0].name) return null;

  return (
    <div className="ui basic buttons">
      {message.payload.buttons.map((button, idx) => (
        <button className="ui button" key={idx} onClick={() => onChoiceSelect && onChoiceSelect(button.request)}>
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default ChoiceMessage;
