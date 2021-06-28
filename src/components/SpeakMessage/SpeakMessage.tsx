import { SpeakTrace } from '@voiceflow/general-types';
import React from 'react';
import styled from 'styled-components';

interface Props {
  message: SpeakTrace;
}

const SpeakMessageBox = styled.div`
  max-width: 100%;
  padding: 12px 16px;
  overflow: hidden;
  color: rgb(19, 33, 68);
  text-align: left;
  word-break: break-word;
  font-size: 15px;
  border-radius: 5px 15px 15px;
  min-height: 45px;
  cursor: pointer;
  background-color: rgb(244, 244, 244);
  margin-top: 4px;

  &:hover {
    background-color: rgb(222, 222, 222);
  }
`;

const SpeakMessage: React.FC<Props> = ({ message }) => {
  const createOnPlayAudio = React.useCallback((audioSrc) => {
    return () => {
      if (!message.payload.src) return;
      const audio = new Audio(audioSrc);
      audio.play();
    };
  }, []);

  return <SpeakMessageBox onClick={createOnPlayAudio(message.payload.src)}>{message.payload.message}</SpeakMessageBox>;
};

export default SpeakMessage;
