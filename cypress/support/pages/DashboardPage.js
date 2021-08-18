import LoginElements from '../elements/DashboardElements';

const loginElements = new LoginElements();
const url = Cypress.config('baseUrl');

const DashboardPage = {
  acessarSite: () => {
    cy.visit(url);
  },
  clicarBotaoPaginaLogin: () => {
    cy.get(loginElements.botaoLogin()).click();
  },
  visualizarBotaoRecuperarSenha: () => {
    cy.get(loginElements.botaoRecuperarSenha()).should('contain', 'Esqueceu sua senha?');
  },
};

export default DashboardPage;
