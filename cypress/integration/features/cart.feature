Feature: Cart Page

  Scenario: Display empty cart message
    Given I have no products in the cart
    Then I should see the message "Your cart is empty"
    And I should see a "Continue Shopping" button

  Scenario: Display added product in cart
    Given I have added a product to the cart
    Then I should see the product image, name, price, and quantity selector

  Scenario: Update product quantity in cart
    Given I have a product in the cart with quantity "2"
    When I change the quantity to "3"
    Then the quantity selector should show "3"

  Scenario: Subtotal reflects correct total based on quantity
    Given the product costs "$149.99" and quantity is "3"
    Then the subtotal should be "$449.97"

  Scenario: Remove product from cart
    Given I have added a product to the cart
    When I click the "Remove" button
    Then the cart should be empty

  Scenario: Continue shopping from cart
    When I click the "Continue Shopping" button
    Then I should be redirected to the homepage

  Scenario: Proceed to checkout from cart
    Given I have added a product to the cart
    When I click the "Proceed to Checkout" button
    Then I should be redirected to the address page