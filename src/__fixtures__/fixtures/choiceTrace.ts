import { ChoiceTrace, TraceType } from '@voiceflow/general-types';

const choiceTraceFixture = (buttonName: string): ChoiceTrace => ({
  type: TraceType.CHOICE,
  payload: { buttons: [{ name: buttonName, request: { type: '' as any, payload: {} as any } }] },
});

export default choiceTraceFixture;
