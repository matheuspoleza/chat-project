import { ChoiceTrace } from '@voiceflow/general-types';

const choiceResponse = [
  {
    type: 'speak',
    payload: {
      src: 'data:audio/mpeg;base64,SUQz',
      message: 'Is this for take-away or delivery?',
      type: 'message',
    },
  },
  {
    type: 'choice',
    payload: {
      buttons: [
        { name: "it's to take away", request: { type: 'text', payload: "it's to take away" } },
        { name: 'for delivery', request: { type: 'text', payload: 'for delivery' } },
      ],
    },
  },
] as ChoiceTrace[];

export default choiceResponse;
