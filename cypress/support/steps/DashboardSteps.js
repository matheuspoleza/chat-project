/* global Given, Then, When */

import faker from 'faker';

import DashboardPage from '../pages/DashboardPage';

const userName = faker.name.firstName();

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
