import ChatElements from '../elements/ChatElements';
import DashboardPage from './DashboardPage';

const ChatPage = {
  startChatSection: () => {
    DashboardPage.accessSite();
    DashboardPage.fillsUserName();
    DashboardPage.startSection();
  },
  sendMessage: (message) => {
    cy.getBySel(ChatElements.chatInput()).type(message);
    cy.getBySel(ChatElements.chatSubmitButton()).click();
  },
};

export default ChatPage;
