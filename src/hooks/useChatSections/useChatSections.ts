import { useDispatch, useSelector } from 'react-redux';

import { deleteChatSection, startChatSection } from '../../store/chat/asyncActions';
import { selectAllSections } from '../../store/chat/selectors';

const useChatSections = () => {
  const dispatch = useDispatch();
  const sections = useSelector(selectAllSections);

  const deleteSection = (userID: string) => {
    dispatch(deleteChatSection(userID));
  };

  const startSection = (userID: string) => {
    if (!sections[userID]) {
      dispatch(startChatSection(userID));
    }
  };

  return { sections, deleteSection, startSection };
};

export default useChatSections;
