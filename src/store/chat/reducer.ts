/* eslint no-param-reassign: 0 */ // --> OFF
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GeneralTrace } from '@voiceflow/general-types';

import { deleteChatSection, sendChatMessage, startChatSection } from './asyncActions';
import { ChatSectionState } from './types';

const initialState: ChatSectionState = {
  sections: {},
  isLoading: false,
};

export const chatSectionsSlice = createSlice({
  name: 'chatSections',
  initialState,
  reducers: {
    cleanCurrentTrace: (state, action: PayloadAction<{ userID: string }>) => {
      const { userID } = action.payload;
      state.sections[userID].currentTraces = [];
    },
    addTraceMessage: (state, action: PayloadAction<{ userID: string; trace: GeneralTrace }>) => {
      const { userID, trace } = action.payload;
      const { interactions } = state.sections[userID];
      interactions[interactions.length - 1].traces?.push(trace);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(startChatSection.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(startChatSection.fulfilled, (state, action) => {
      const { userID, interaction } = action.payload;

      state.isLoading = false;

      state.sections[userID] = {
        currentTraces: interaction,
        interactions: [{ message: '', traces: [] }],
        isLoading: false,
      };
    });

    builder.addCase(sendChatMessage.pending, (state, action) => {
      const { userID, message } = action.meta.arg;

      state.sections[userID].interactions.push({ message, traces: [] });
      state.sections[userID].isLoading = true;
    });

    builder.addCase(sendChatMessage.fulfilled, (state, action) => {
      const { userID, interaction } = action.payload;

      state.sections[userID].isLoading = false;
      state.sections[userID].currentTraces = interaction;
    });

    builder.addCase(deleteChatSection.fulfilled, (state, action) => {
      const userID = action.meta.arg;

      delete state.sections[userID];
    });
  },
});

export const { addTraceMessage, cleanCurrentTrace } = chatSectionsSlice.actions;

export default chatSectionsSlice.reducer;
