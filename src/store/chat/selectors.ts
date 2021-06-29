import { ChoiceTrace, TraceType } from '@voiceflow/general-types';

import { RootState } from '..';
import { ChatSection, ChatSections } from './types';

export const selectSectionByUserID =
  (userID: string) =>
  (state: RootState): ChatSection =>
    state.chat.sections[userID];

export const selectAllSections = (state: RootState): ChatSections => state.chat.sections;

export const selectIsLoading = (state: RootState): boolean => state.chat.isLoading;

export const selectIsLastChoice =
  (userID: string, trace: ChoiceTrace) =>
  (state: RootState): boolean => {
    const section = state.chat.sections[userID];
    if (!section) return false;
    const lastTrace = section.currentTraces[section.currentTraces.length - 1];

    if (lastTrace.type === TraceType.CHOICE) {
      const button = lastTrace?.payload?.buttons[0];
      if (!button) return false;
      return button.name === trace.payload.buttons[0].name;
    }

    return false;
  };

const selectors = { selectSectionByUserID };

export default selectors;
