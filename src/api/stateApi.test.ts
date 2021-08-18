import { GeneralTrace } from '@voiceflow/general-types';
import speakResponse from 'src/__fixtures__/fixtures/speakResponse';

import stateApi from './stateApi';
import voiceFlowClient from './voiceFlowClient';

describe('Unit | API | stateApi', () => {
  describe('when calling interact', () => {
    it('returns correct data from api', async () => {
      const userID = 'matheus';
      const message = 'Hello world';
      const data: GeneralTrace[] = speakResponse;
      jest.spyOn(voiceFlowClient, 'post').mockResolvedValue({ data });

      const interaction = await stateApi.interact(message, userID);

      expect(interaction).toEqual(data);
    });
  });
});
