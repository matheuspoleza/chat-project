import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import chatReducer from '../store/chat/reducer';
import usersReducer from '../store/users/reducer';

const render = (
  ui: React.ReactElement,
  { preloadedState, store = configureStore({ reducer: { chat: chatReducer, users: usersReducer }, preloadedState }), ...renderOptions }: any = {}
) => {
  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };
