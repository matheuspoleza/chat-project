import { useDispatch, useSelector } from 'react-redux';

import { createUser as createUserAction, deleteUser as deleteUserAction } from '../../store/users/reducer';
import { selectAllUsers } from '../../store/users/selectors';
import { User } from '../../store/users/types';

interface UseUsers {
  users: User[];
  createUser: (userID: string) => void;
  deleteUser: (userID: string) => void;
}

const useUsers = (): UseUsers => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const createUser = (userID: string) => {
    dispatch(createUserAction(userID));
  };

  const deleteUser = (userID: string) => {
    dispatch(deleteUserAction(userID));
  };

  return { users, createUser, deleteUser };
};

export default useUsers;
