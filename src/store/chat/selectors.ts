import { RootState } from '..';
import { ChatSection, ChatSections } from './types';

export const selectSectionByUserID =
  (userID: string) =>
  (state: RootState): ChatSection =>
    state.chat.sections[userID] || {};

export const selectIsCreatingSection = (state: RootState): boolean => state.chat.isLoading;

export const selectAllSections = (state: RootState): ChatSections => state.chat.sections;

const selectors = { selectSectionByUserID };

export default selectors;
