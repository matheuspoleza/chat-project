import { useDispatch, useSelector } from 'react-redux';

import { createUser as createUserAction, deleteUser as deleteUserAction } from '../../store/users/reducer';
import { selectAllUsers } from '../../store/users/selectors';

const useUsers = () => {
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
