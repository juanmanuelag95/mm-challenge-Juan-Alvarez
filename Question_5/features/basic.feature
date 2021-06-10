Feature: Search Bar

  Scenario: Search Bar Happy Path
    Given I am non registered user
    When I search for a product "table" 
    And Click on the Search Button
    Then Results are listed

  Scenario: Empty Search Bar
    Given I am non registered user
    When I search for a product "" 
    And Click on the Search Button
    Then Results should not be listed

  Scenario: Suggestion list should be shown
    Given I am non registered user
    When I search for a product "tab" 
    Then Suggestion list should be shown

  Scenario: Should be able to select a item from the suggestion list
    Given I am non registered user
    When I search for a product "tab" 
    And We select an item from the suggestion list
    Then Results are listed
