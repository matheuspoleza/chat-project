import DashboardElements from '../elements/DashboardElements';

const url = Cypress.config('baseUrl');

const DashboardPage = {
  accessSite: () => {
    cy.visit(url);
  },
  fillsUserName: (userName) => {
    cy.getBySel(DashboardElements.newUserInput()).type(userName);
  },
  submitsUser: () => {
    cy.getBySel(DashboardElements.createUserSubmit()).click();
  },
  startSection: (userName) => {
    cy.getBySel(DashboardElements.startChatButton(userName)).click();
  },
  verifiesUserStartSection: (userName) => {
    cy.getBySel(DashboardElements.startChatButton(userName)).should('contain', 'Start chat');
  },
};

export default DashboardPage;
