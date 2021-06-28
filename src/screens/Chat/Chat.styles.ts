import styled from 'styled-components';

export const ChatContainer = styled.div`
  width: 920px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
`;

export const ChatInteraction = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  height: 400px;
  width: 100%;
  padding: 16px;
`;

export const ChatInteractionList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
