Feature: Shopping Cart

  Scenario: User adds a product to the cart and verifies cart functionality
    Given I visit the product catalog main page
    When I click the view details button for product card 1
    And I add the product to the cart
    Then the shopping cart page should be displayed
    And the continue shopping button should be visible
    And the cart should show the product with correct title and price
    And the quantity input should be visible and set to 1
    When I change the quantity to 2
    Then the subtotal should match the product price times quantity
    When I change the quantity to 0
    And the product should be removed from the cart
    And the empty cart message should be visible
    And the continue shopping button should be visible

  Scenario: User adds multiple products to the cart and verifies cart functionality
    Given I visit the product catalog main page
    When I click the view details button for product card 1
    And I add the product to the cart
    And I click the continue shopping button
    And I click the view details button for product card 2
    And I add the product to the cart
    Then the shopping cart page should be displayed
    And the cart should show the product with correct title and price for product 1
    And the cart should show the product with correct title and price for product 2
    And the subtotal should match the sum of all product prices
    When I change the quantity of product 1 to 2
    Then the subtotal should update accordingly
    When I remove the product using the remove button for product 2
    Then the product should be removed from the cart for product 2
    And the subtotal should update accordingly
