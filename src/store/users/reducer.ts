/* eslint no-param-reassign: 0 */ // --> OFF
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { internet } from 'faker';

import { UsersState } from './types';

const initialState: UsersState = {};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<string>) => {
      const id = action.payload.toLowerCase();
      const name = action.payload;
      const avatar = internet.avatar();

      state[id] = { id, name, avatar };
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

export const { createUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
