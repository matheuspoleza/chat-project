import { useSelector } from 'react-redux';

import { selectUser } from '../../store/users/selectors';

const useUser = (userID: string) => {
  const user = useSelector(selectUser(userID));

  return { user };
};

export default useUser;
