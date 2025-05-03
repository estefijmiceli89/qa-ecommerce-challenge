Feature: Product Sorting
  Background:
    Given I am on the homepage  

  Scenario: Sort products by price (low to high)
    When I select "Price: Low to High" from the sort dropdown
    Then products should be sorted by price in ascending order
    And the first product should be the cheapest
