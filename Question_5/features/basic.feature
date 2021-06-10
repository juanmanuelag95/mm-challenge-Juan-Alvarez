Feature: Search Bar

  Scenario: Search Bar Happy Path
    Given I am non registered user
    When I search for a product "table"
    Then Results are listed
