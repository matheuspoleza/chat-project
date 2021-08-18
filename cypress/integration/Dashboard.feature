Feature: Dashboard

  Scenario: Add new user
    Given I access the dashboard page
    When I fill the user name
    And I click on submit
    Then the user is added to users list