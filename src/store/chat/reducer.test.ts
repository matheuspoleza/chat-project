import reducer, { chatInitialState, createInteraction } from './reducer';
import { ChatSectionState } from './types';

describe('Unit | Store | chat | reducer', () => {
  describe('when creating interaction', () => {
    it('sets is loading to true', () => {
      const userID = 'matheus';
      const action = createInteraction({ userID: 'matheus', message: 'Hello world' });
      const storeState: ChatSectionState = {
        ...chatInitialState,
        sections: {
          [userID]: {
            currentTraces: [],
            interactions: [],
          },
        },
      };

      const newState = reducer(storeState, action);

      expect(newState.isLoading).toBeTruthy();
    });

    it('adds interaction message', () => {
      const userID = 'matheus';
      const action = createInteraction({ userID: 'matheus', message: 'Hello world' });
      const storeState: ChatSectionState = {
        ...chatInitialState,
        sections: {
          [userID]: {
            currentTraces: [],
            interactions: [],
          },
        },
      };

      const newState = reducer(storeState, action);

      expect(newState.sections[userID].interactions).toEqual([
        {
          message: 'Hello world',
          traces: [],
        },
      ]);
    });
  });
});
