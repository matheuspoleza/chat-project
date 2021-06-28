import { RootState } from '..';
import { User } from './types';

export const selectAllUsers = (state: RootState): User[] => Object.values(state.users);

export const selectUser =
  (userID: string) =>
  (state: RootState): User =>
    state.users[userID];

const usersSelectors = { selectAllUsers };

export default usersSelectors;
