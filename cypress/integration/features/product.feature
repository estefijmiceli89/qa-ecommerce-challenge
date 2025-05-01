Feature: Product Page

  Background:
    Given I am on the homepage
    When I click on the View Details button of a product
    Then I should be redirected to the product page for that item

  Scenario: Essential product details are shown
    Then I should see all product details

  Scenario: Product quantity can be selected
    Then I should be able to see the quantity dropdown
    When I choose the quantity "4"
    Then the dropdown should reflect the selected quantity "4"

  Scenario: Add product to cart with selected quantity
    When I choose the quantity "3"
    And I click on the "Add to Cart" action
    Then the cart should include the product with quantity "3"

  Scenario: Return to the product listing
    When I use the "Back to Products" navigation
    Then I should be redirected to the homepage