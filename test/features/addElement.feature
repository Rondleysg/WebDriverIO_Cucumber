Feature: Add and remove elements

  Scenario Outline: As a user, I can add or remove elements on the page

    Given I am on the addRemove page
    When I click on the btnAddElement of addRemove page
    Then I should see a btnRemove element