import { useSelector } from 'react-redux';

import { selectUser } from '../../store/users/selectors';
import { User } from '../../store/users/types';

const useUser = (userID: string): { user: User } => {
  const user = useSelector(selectUser(userID));

  return { user };
};

export default useUser;
