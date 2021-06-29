import React from 'react';
import { useParams } from 'react-router';

import useUser from '../../hooks/useUser';
import { MessageBox, MessageContainer, MessageImage } from './ChatMessage.styles';

interface Props {
  message: string;
}

const ChatMessage: React.FC<Props> = ({ message }) => {
  const { userID } = useParams<{ userID: string }>();
  const { user } = useUser(userID);

  return (
    <MessageContainer>
      <MessageBox>{message}</MessageBox>
      <MessageImage alt="avatar" src={user.avatar} />
    </MessageContainer>
  );
};

export default ChatMessage;
