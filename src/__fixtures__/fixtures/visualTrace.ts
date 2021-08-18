import { TraceType, VisualTrace } from '@voiceflow/general-types';

const visualTraceFixture = (): VisualTrace => ({ type: TraceType.VISUAL, payload: { image: '/some-image' } as any });

export default visualTraceFixture;
