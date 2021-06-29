import { GeneralTrace } from '@voiceflow/general-types';

export interface Interaction {
  message: string;
  traces?: GeneralTrace[];
}

export interface ChatSection {
  currentTraces: GeneralTrace[];
  interactions: Interaction[];
}

export type ChatSections = { [key in string]: ChatSection };

export interface ChatSectionState {
  sections: ChatSections;
  isLoading: boolean;
}
