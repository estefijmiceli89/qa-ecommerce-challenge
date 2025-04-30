Feature: Cart Page Functionality

  Scenario: Cart is empty
    Given I navigate to the cart page directly
    Then I should see an empty cart message
    And I should see a "Continue Shopping" button

Scenario: Cart displays added products
    Given I have added 2 items of a product to the cart
    When I am on the cart page
    Then I should see the product in the cart
    And I should see its name, price, and quantity selector

  Scenario: Changing quantity updates subtotal
    Given I have added 2 items of a product to the cart
    When I am on the cart page
    And I change the quantity to "2"
    Then the subtotal should update accordingly

  Scenario: Removing a product from cart
    Given I have added 2 items of a product to the cart
    When I am on the cart page
    And I remove the product from the cart
    Then the cart should be empty

  Scenario: Proceeding to checkout
    Given I have added 2 items of a product to the cart
    When I am on the cart page
    And I click "Proceed to Checkout"
    Then I should be taken to the checkout page
