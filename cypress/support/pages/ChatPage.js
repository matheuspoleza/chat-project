import ChatElements from '../elements/ChatElements';
import DashboardPage from './DashboardPage';

const ChatPage = {
  startChatSection: (userName) => {
    DashboardPage.accessSite();
    DashboardPage.fillsUserName(userName);
    DashboardPage.submitsUser();
    DashboardPage.startSection(userName);
  },
  sendMessage: (message) => {
    cy.getBySel(ChatElements.chatInput()).type(message);
    cy.getBySel(ChatElements.chatSubmitButton()).click();
  },
  waitForWelcomeMessage: () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
  },
  waitForResponseMessage: () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(100);
  },
};

export default ChatPage;
