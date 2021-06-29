import { useDispatch, useSelector } from 'react-redux';

import stateApi from '../../api/stateApi';
import { deleteSection as deleteSectionAction } from '../../store/chat/reducer';
import { selectAllSections } from '../../store/chat/selectors';
import { ChatSection } from '../../store/chat/types';

interface UseChatSection {
  sections: { [key in string]: ChatSection };
  deleteSection: (userID: string) => Promise<void>;
}

const useChatSections = (): UseChatSection => {
  const dispatch = useDispatch();
  const sections = useSelector(selectAllSections);

  const deleteSection = async (userID: string) => {
    dispatch(deleteSectionAction(userID));
    await stateApi.deleteState(userID);
  };

  return { sections, deleteSection };
};

export default useChatSections;
