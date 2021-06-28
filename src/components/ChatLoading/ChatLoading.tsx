import React from 'react';

import Logo from '../Logo';
import { Container, DotFlashing, Dots } from './ChatLoading.styles';

const ChatLoading: React.FC = () => {
  return (
    <Container>
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
