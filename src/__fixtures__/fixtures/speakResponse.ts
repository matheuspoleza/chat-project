import { SpeakTrace } from '@voiceflow/general-types';

const speakResponse = [
  {
    type: 'speak',
    payload: {
      src: 'data:audio/mpeg;base64,SUQzBAA',
      message: 'Welcome to Domino pizza!',
      type: 'message',
    },
  },
  {
    type: 'speak',
    payload: {
      src: 'data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU',
      message: 'How can I help you?',
      type: 'message',
    },
  },
] as SpeakTrace[];

export default speakResponse;
