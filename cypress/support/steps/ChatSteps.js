/* global Given, Then, When */

import ChatPage from '../pages/ChatPage';

Given('I start a chat section', () => {
  ChatPage.startChatSection('Matheus');
});

When('I answer all order questions', () => {
  ChatPage.sendMessage('Hello world');
});

Then('I see a thank you message with my order information', () => {
  ChatPage.sendMessage('Hello world');
});
