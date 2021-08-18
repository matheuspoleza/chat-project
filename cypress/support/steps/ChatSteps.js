/* global Given, Then, When */

import faker from 'faker';

import ChatPage from '../pages/ChatPage';

Given('I start a chat section', () => {
  const userName = faker.name.firstName();
  ChatPage.startChatSection(userName);
});

When('I answer all order questions', () => {
  ChatPage.waitForWelcomeMessage();
  ChatPage.sendMessage('I want a pizza');

  ChatPage.waitForResponseMessage();
  ChatPage.sendMessage('medium');

  ChatPage.sendMessage('delivery');
  ChatPage.waitForResponseMessage();

  ChatPage.sendMessage('coke');
  ChatPage.waitForResponseMessage();
});

Then('I see a thank you message with my order information', () => {
  cy.contains('Great, your medium pizza will be delivered to you in 20 minutes.');
});
