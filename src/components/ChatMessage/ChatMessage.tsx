import React from 'react';
import styled from 'styled-components';

interface Props {
  message: string;
}

const MessageBox = styled.div`
  max-width: 100%;
  padding: 12px 16px;
  overflow: hidden;
  text-align: left;
  word-break: break-word;
  font-size: 15px;
  border-radius: 15px 15px 5px;
  min-height: 45px;
  background-color: rgb(93, 157, 245);
  color: white;
  align-self: flex-end;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ChatMessage: React.FC<Props> = ({ message }) => {
  return (
    <MessageBox>
      <p>{message}</p>
    </MessageBox>
  );
};

export default ChatMessage;
