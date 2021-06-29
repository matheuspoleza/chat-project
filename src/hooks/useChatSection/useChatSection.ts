import { GeneralTrace, TraceType } from '@voiceflow/general-types';
import { useDispatch, useSelector } from 'react-redux';

import stateApi from '../../api/stateApi';
import { addInteractionTrace, createInteraction, createSection, sendInteractionTraces } from '../../store/chat/reducer';
import { selectIsLoading, selectSectionByUserID } from '../../store/chat/selectors';
import playAudio from '../../utils/playAudio';

const useChatSection = (userID: string) => {
  const chatSection = useSelector(selectSectionByUserID(userID));
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const sendTraceMessage = (trace: GeneralTrace) => {
    dispatch(addInteractionTrace({ userID, trace }));
  };

  const isEnding = (traces: GeneralTrace[]) => {
    return traces.some((trace) => trace.type === TraceType.END);
  };

  const startSection = () => {
    dispatch(createSection({ userID }));
    sendMessage('');
  };

  const handleNewTraces = async (traces: GeneralTrace[]) => {
    for (let i = 0; i < traces.length; i++) {
      const message = traces[i];
      sendTraceMessage(message);

      if (message.type === TraceType.SPEAK && message.payload.src) {
        // eslint-disable-next-line no-await-in-loop
        await playAudio(message.payload.src);
      }
    }

    if (isEnding(traces)) {
      startSection();
    }
  };

  const sendMessage = async (message: string) => {
    dispatch(createInteraction({ userID, message }));
    try {
      const traces = await stateApi.interact(message, userID);
      dispatch(sendInteractionTraces({ userID, traces }));
      handleNewTraces(traces);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return { chatSection, startSection, isLoading, sendMessage };
};

export default useChatSection;
