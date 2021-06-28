import { GeneralTrace, TraceType } from '@voiceflow/general-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sendChatMessage } from '../../store/chat/asyncActions';
import { addTraceMessage, cleanCurrentTrace } from '../../store/chat/reducer';
import { selectIsCreatingSection, selectSectionByUserID } from '../../store/chat/selectors';

const useChatSection = (userID: string) => {
  const chatSection = useSelector(selectSectionByUserID(userID));
  const isCreatingSection = useSelector(selectIsCreatingSection);
  const dispatch = useDispatch();

  const sendMessage = (message: string) => {
    dispatch(sendChatMessage({ userID, message }));
  };

  const sendTraceMessage = (trace: GeneralTrace) => {
    dispatch(addTraceMessage({ userID, trace }));
  };

  const playAudio = (audioSource: string, onEnded: () => void) => {
    const sound = new Audio(audioSource);
    sound.addEventListener('ended', onEnded);
    sound.play();
  };

  const handleNewTraces = (counter = 0) => {
    const traces = chatSection.currentTraces;
    if (!traces) return;

    const message = traces[counter];

    if (counter === traces.length) {
      dispatch(cleanCurrentTrace({ userID }));
      return;
    }

    if (message.type === TraceType.SPEAK && message.payload.src) {
      sendTraceMessage(message);
      playAudio(message.payload.src, () => handleNewTraces(counter + 1));
    } else {
      sendTraceMessage(message);
      handleNewTraces(counter + 1);
    }
  };

  useEffect(() => {
    if (chatSection.currentTraces?.length > 0) {
      handleNewTraces();
    }
  }, [chatSection.currentTraces]);

  return { chatSection, isCreatingSection, sendMessage };
};

export default useChatSection;
