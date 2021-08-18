Feature: Dashboard

  Scenario: Add new user
    Given I access the dashboard page
    When I fill a new user name
    Then the user is added to users list