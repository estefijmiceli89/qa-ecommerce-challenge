Feature: Product Catalog Main Page

  Scenario: Main page displays all required elements and product cards
    Given I visit the product catalog main page
    Then the page title should be visible
    And the main content should be visible
    And the products grid should be visible
    And the profile button should be visible
    And the cart button should be visible
    And the search input should be visible
    And the sort button should be visible
    And there should be 3 product cards displayed
    And product card 1 should have correct information
    And product card 2 should have correct information
    And product card 3 should have correct information
