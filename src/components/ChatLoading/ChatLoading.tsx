import React from 'react';

import Logo from '../Logo';
import { Container, DotFlashing, Dots } from './ChatLoading.styles';

const ChatLoading: React.FC = () => {
  return (
    <Container data-testid="chat-loading">
      <Logo />

      <Dots>
        <DotFlashing />
        <DotFlashing />
        <DotFlashing />
      </Dots>
    </Container>
  );
};

export default ChatLoading;
