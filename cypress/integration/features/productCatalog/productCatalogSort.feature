Feature: Product Catalog Sorting

  Scenario: User can sort products by price (low to high)
    Given I visit the product catalog main page
    When I click the sort button
    Then the products should be sorted by price ascending
