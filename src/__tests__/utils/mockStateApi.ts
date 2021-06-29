import { GeneralTrace } from '@voiceflow/general-types';
import MockAdapter from 'axios-mock-adapter';

import voiceFlowClient from '../../api/voiceFlowClient';

const mockStateApi = (userID: string, response: GeneralTrace[]): MockAdapter => {
  const apiMock = new MockAdapter(voiceFlowClient);
  apiMock.onPost(`/user/${userID}/interact}`).reply(200, response);
  return apiMock;
};

export default mockStateApi;
