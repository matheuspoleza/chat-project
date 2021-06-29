import { createMemoryHistory } from 'history';
import React from 'react';
import { MemoryRouter, Router } from 'react-router';

import reactRouterPropsFactory from '../../__fixtures__/factories/reactRouterPropsFactory';
import { fireEvent, render, waitFor } from '../../__fixtures__/testUtils';
import App from '../../App';
import { RootState } from '../../store';
import { chatInitialState } from '../../store/chat/reducer';
import Dashboard from './Dashboard';

const renderDashboardPage = (storeState?: Partial<RootState>) => {
  const routerProps = reactRouterPropsFactory<{ match: null }>();

  return render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <Dashboard {...routerProps} />
    </MemoryRouter>,
    storeState && { preloadedState: storeState }
  );
};

describe('Screens | Dashboard', () => {
  it('shows all users', () => {
    const storeState: Partial<RootState> = {
      chat: chatInitialState,
      users: {
        jose: {
          avatar: '',
          id: 'jose',
          name: 'Jose',
        },
        juan: {
          avatar: '',
          id: 'juan',
          name: 'Juan',
        },
      },
    };

    const screen = renderDashboardPage(storeState);

    expect(screen.queryByText('Jose')).not.toBeNull();
    expect(screen.queryByText('Juan')).not.toBeNull();
  });

  describe('when user already have a section', () => {
    it('shows open chat button text instead of start chat', () => {
      const storeState: Partial<RootState> = {
        chat: {
          ...chatInitialState,
          sections: {
            jose: {
              currentTraces: [],
              interactions: [],
            },
          },
        },
        users: {
          jose: {
            avatar: '',
            id: 'jose',
            name: 'Jose',
          },
        },
      };

      const screen = renderDashboardPage(storeState);

      expect(screen.queryByText('Open chat')).not.toBeNull();
      expect(screen.queryByText('Start chat')).toBeNull();
    });
  });

  describe('when fills new user', () => {
    it('adds an user to the list', () => {
      const storeState: Partial<RootState> = {
        chat: {
          ...chatInitialState,
          sections: {
            jose: {
              currentTraces: [],
              interactions: [],
            },
          },
        },
        users: {
          jose: {
            avatar: '',
            id: 'jose',
            name: 'Jose',
          },
        },
      };
      const screen = renderDashboardPage(storeState);

      fireEvent.change(screen.getByTestId('new-user-input'), { target: { value: 'Lucas' } });
      fireEvent.click(screen.getByTestId('new-user-button'));

      expect(screen.queryByText('Lucas')).not.toBeNull();
    });
  });

  describe('when clicking on delete button', () => {
    it('removes the user from the list', () => {
      const storeState: Partial<RootState> = {
        chat: {
          ...chatInitialState,
          sections: {
            jose: {
              currentTraces: [],
              interactions: [],
            },
          },
        },
        users: {
          jose: {
            avatar: '',
            id: 'jose',
            name: 'Jose',
          },
        },
      };
      const screen = renderDashboardPage(storeState);

      fireEvent.click(screen.getByText('Delete user'));

      expect(screen.queryByText('Jose')).toBeNull();
    });
  });

  describe('when clicking on start chat', () => {
    it('redirects to user chat page', async () => {
      const storeState: Partial<RootState> = {
        chat: chatInitialState,
        users: {
          jose: {
            avatar: '',
            id: 'jose',
            name: 'Jose',
          },
        },
      };
      const history = createMemoryHistory();
      const screen = render(
        <Router history={history}>
          <App />
        </Router>,
        { preloadedState: storeState }
      );

      fireEvent.click(screen.getByText('Start chat'));

      await waitFor(() => expect(screen.queryByText('Jose Chat')).not.toBeNull());
    });
  });
});
