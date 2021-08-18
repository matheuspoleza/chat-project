import { SpeakTrace, TraceType } from '@voiceflow/general-types';

const speakTraceFixture = (message: string): SpeakTrace => ({ type: TraceType.SPEAK, payload: { type: '' as any, message } });

export default speakTraceFixture;
