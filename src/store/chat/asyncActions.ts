import { createAsyncThunk } from '@reduxjs/toolkit';

import stateApi from '../../api/stateApi';

export const sendChatMessage = createAsyncThunk('chatSections/sendMessage', async (payload: { userID: string; message: string }) => {
  const interaction = await stateApi.interact(payload.message, payload.userID);
  return { userID: payload.userID, interaction };
});

export const startChatSection = createAsyncThunk('chatSections/startChatSection', async (userID: string) => {
  const interaction = await stateApi.interact('', userID);
  return { userID, interaction };
});

export const deleteChatSection = createAsyncThunk('chatSections/deleteChatSection', async (userID: string) => {
  await stateApi.deleteState(userID);
});

const asyncActions = { sendChatMessage, startChatSection, deleteChatSection };

export default asyncActions;
