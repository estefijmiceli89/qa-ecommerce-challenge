Feature: Homepage

  Background:
    Given I am on the homepage

  Scenario: User can navigate to the homepage
    Then I should see the main content
    And I should see the full list of products

  Scenario: All listed products show complete information
    Then I should see products with complete information

  Scenario: Navigate to the product page
    When I click on the View Details button of a product
    Then I should be redirected to the product page for that item

  Scenario: Sort products by price ascending
    When I sort products by price ascending
    Then the products should be displayed in ascending order of price

  Scenario: Sort products by price descending
    When I sort products by price descending
    Then the products should be displayed in descending order of price

  Scenario: Search for products by name
    When I search for "Watch"
    Then only products containing "Watch" in the name should be shown

  Scenario: Navigate to the cart page
    When I click the Cart button
    Then I should be redirected to the cart page

  Scenario: Navigate to the profile page
    When I click the Profile button
    Then I should be redirected to the profile page

