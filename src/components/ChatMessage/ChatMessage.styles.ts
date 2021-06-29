import styled from 'styled-components';

export const MessageBox = styled.div`
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
  margin-top: 16px;
  margin-bottom: 16px;
  margin-right: 8px;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
`;

export const MessageImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
