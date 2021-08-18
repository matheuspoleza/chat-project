/* global Given, Then, When */

import DashboardPage from '../pages/DashboardPage';

const userName = 'Matheus';

Given('I access the dashboard page', () => {
  DashboardPage.accessSite();
});

When('I fill a new user name', () => {
  DashboardPage.fillsUserName(userName);
  DashboardPage.submitsUser();
});

Then('the user is added to users list', () => {
  DashboardPage.verifiesUserStartSection(userName);
});
