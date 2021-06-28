import { GeneralTrace, RequestType, TextRequest } from '@voiceflow/general-types';

import voiceFlowClient from './voiceFlowClient';

const interact = async (message: string, userID: string): Promise<GeneralTrace[]> => {
  const request: TextRequest = { type: RequestType.TEXT, payload: message };

  const { data } = await voiceFlowClient.post<GeneralTrace[]>(`/user/${userID}/interact`, { request, config: { tts: true } });

  return data;
};

const deleteState = async (userID: string): Promise<void> => {
  await voiceFlowClient.delete(`/user/${userID}`);
};

const stateApi = {
  interact,
  deleteState,
};

export default stateApi;
