Feature: Checkout

  Scenario: User completes a purchase and verifies the order details
    Given I visit the product catalog main page
    When I click the view details button for product card 1
    And I add the product to the cart
    And I proceed to checkout
    Then the checkout page should be displayed
    And the delivery form should be visible
    When I fill the checkout form with valid data
    And I continue to payment
    Then the payment step should be started
    When I fill the payment form with valid data
    And I place the order
    Then the checkout success page should be displayed
    And the success purchase component should show the correct title, order number, description, continue shopping button, and view your orders button
    When I click the view your orders button
    Then the order details page should be displayed
    And the order number should match the one from the success page
    And the order date should be correct
    And the order total amount should be correct
    And the order item quantity should be correct
    And the order item price should be correct

  Scenario: User sees validation errors for invalid or empty checkout and payment fields
    Given I visit the product catalog main page
    When I click the view details button for product card 1
    And I add the product to the cart
    And I proceed to checkout
    Then the checkout page should be displayed
    When I try to continue to payment with empty fields
    Then all required field errors should be shown
    When I fill the checkout form with invalid data
    Then all validation errors should be shown
    When I fill the checkout form with valid data
    And I continue to payment
    Then the payment step should be started
    When I fill the payment form with invalid data
    And I place the order
    Then all payment validation errors should be shown
