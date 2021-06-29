import { GeneralTrace } from '@voiceflow/general-types';

const endFlowResponse = [
  { type: 'path', payload: { path: 'jump' } },
  {
    type: 'speak',
    payload: {
      src: 'data:audio/mpeg;base64,SUQzBAAAAA',
      message: 'Thanks!',
      type: 'message',
    },
  },
  { type: 'end' },
] as GeneralTrace[];

export default endFlowResponse;
