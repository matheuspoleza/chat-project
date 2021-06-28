import { TraceType } from '@voiceflow/general-types';
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

  const handleNewTraces = (counter = 0) => {
    const traces = chatSection.currentTraces;
    if (!traces) return;

    const message = traces[counter];

    if (counter === traces.length) {
      dispatch(cleanCurrentTrace({ userID }));
      return;
    }

    if (message.type === TraceType.SPEAK && message.payload.src) {
      dispatch(addTraceMessage({ userID, trace: message }));
      const sound = new Audio(message.payload.src);
      sound.addEventListener('ended', () => {
        handleNewTraces(counter + 1);
      });
      sound.play();
    } else {
      dispatch(addTraceMessage({ userID, trace: message }));
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
