import { GeneralTrace, TraceType } from '@voiceflow/general-types';
import React from 'react';

import ChoiceMessage from '../ChoiceMessage';
import Logo from '../Logo';
import SpeakMessage from '../SpeakMessage';
import VisualMessage from '../VisualMessage';
import { ResponseContainer, ResponseList } from './ChatTraces.styles';

interface Props {
  traces: GeneralTrace[];
}

interface ComponentProps {
  message: GeneralTrace;
}

const MessageComponentMapper: { [key in TraceType]?: React.FC<ComponentProps> } = {
  [TraceType.SPEAK]: SpeakMessage,
  [TraceType.VISUAL]: VisualMessage,
  [TraceType.CHOICE]: ChoiceMessage,
};

const ChatTraces: React.FC<Props> = ({ traces }) => {
  if (traces.length === 0) return null;

  return (
    <ResponseContainer>
      <Logo />

      <ResponseList>
        {traces.map((message, idx) => {
          const MessageComponent = MessageComponentMapper[message.type];
          if (!MessageComponent) return null;

          return <MessageComponent key={idx} message={message} />;
        })}
      </ResponseList>
    </ResponseContainer>
  );
};

export default ChatTraces;
