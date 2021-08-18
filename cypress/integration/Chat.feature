Feature: Chat

  Scenario: I want to order a pizza
    Given I start a chat section
    When I answer all order questions
    Then I see a thank you message with my order information