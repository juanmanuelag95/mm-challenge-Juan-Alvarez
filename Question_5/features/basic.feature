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

  Scenario: No products found
    Given I am non registered user
    When I search for a product "Lorem ipsum dolor sit amet, consectetur" 
    And Click on the Search Button
    Then No products found legend should be display

  Scenario: Check funcionality of the clear button
    Given I am non registered user
    When I search for a product "table" 
    And Click on the Clean Button
    Then Verify that value of the search var is the following ""