import { GeneralTrace } from '@voiceflow/general-types';
import React from 'react';
import { MemoryRouter } from 'react-router';

import reactRouterPropsFactory from '../../__fixtures__/factories/reactRouterPropsFactory';
import choiceResponse from '../../__fixtures__/fixtures/choiceResponse';
import speakResponse from '../../__fixtures__/fixtures/speakResponse';
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '../../__fixtures__/testUtils';
import stateApi from '../../api/stateApi';
import playAudio from '../../utils/playAudio';
import Chat from './Chat';

jest.mock('../../utils/playAudio');
const playAudioMock = playAudio as jest.Mock;

const userID = 'jose';
const routerProps = reactRouterPropsFactory<{ userID: string }>({ userID });

const renderChatPage = () => {
  return render(
    <MemoryRouter initialEntries={[`/chat/${userID}`]}>
      <Chat {...routerProps} />
    </MemoryRouter>
  );
};

const sendMessage = (message: string) => {
  fireEvent.change(screen.getByTestId('chat-input'), { target: { value: message } });
  fireEvent.click(screen.getByText('Send'));
};

const mockInteractApi = (response: GeneralTrace[]) => jest.spyOn(stateApi, 'interact').mockResolvedValue(response);

describe('Screens | Chat', () => {
  beforeEach(() => {
    playAudioMock.mockResolvedValue({});
  });

  afterEach(() => {
    playAudioMock.mockReset();
  });

  describe('when starting chat', () => {
    it('shows welcome message', async () => {
      mockInteractApi(speakResponse);

      const screen = renderChatPage();
      await waitForElementToBeRemoved(screen.getByTestId('chat-loading'));

      await waitFor(() => expect(screen.queryByText('Welcome to Domino pizza!')).not.toBeNull());
    });
  });

  describe('when sending a message', () => {
    it('shows sent message', async () => {
      mockInteractApi(speakResponse);
      const message = 'Hello';
      const screen = renderChatPage();

      sendMessage(message);

      await waitFor(() => expect(screen.queryByText(message)).not.toBeNull());
    });

    it('shows response trace', async () => {
      const message = 'I want a pizza';
      mockInteractApi(choiceResponse);
      const screen = renderChatPage();

      sendMessage(message);

      await waitFor(() => expect(screen.queryAllByText('Is this for take-away or delivery?')?.length).toBeTruthy());
    });
  });
});
