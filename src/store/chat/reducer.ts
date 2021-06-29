/* eslint no-param-reassign: 0 */ // --> OFF
import { createSlice } from '@reduxjs/toolkit';

import { ChatSectionState } from './types';

const initialState: ChatSectionState = {
  sections: {},
  isLoading: false,
};

export const chatSectionsSlice = createSlice({
  name: 'chatSections',
  initialState,
  reducers: {
    addInteractionTrace: (state, action) => {
      const { userID, trace } = action.payload;
      const { interactions } = state.sections[userID];

      state.isLoading = false;
      interactions[interactions.length - 1].traces?.push(trace);
    },
    createInteraction: (state, action) => {
      const { userID, message } = action.payload;

      state.isLoading = true;
      state.sections[userID].interactions.push({ message, traces: [] });
    },
    sendInteractionTraces: (state, action) => {
      const { userID, traces } = action.payload;

      state.sections[userID].currentTraces = traces;
    },
    createSection: (state, action) => {
      const { userID } = action.payload;

      state.sections[userID] = {
        currentTraces: [],
        interactions: [{ message: '', traces: [] }],
      };
    },
    deleteSection: (state, action) => {
      const userID = action.payload;

      delete state.sections[userID];
    },
  },
});

export const { addInteractionTrace, sendInteractionTraces, createInteraction, createSection, deleteSection } = chatSectionsSlice.actions;

export default chatSectionsSlice.reducer;
