/* global Given, Then, When, And */

import DashboardPage from '../pages/DashboardPage';

Given('I access the dashboard page', () => {
  DashboardPage.acessarSite();
});

When('I fill the user name', () => {
  DashboardPage.clicarBotaoPaginaLogin();
});

And('I click on submit', () => {
  DashboardPage.clicarBotaoPaginaLogin();
});

Then('the user is added to users list', () => {
  DashboardPage.visualizarBotaoRecuperarSenha();
});
