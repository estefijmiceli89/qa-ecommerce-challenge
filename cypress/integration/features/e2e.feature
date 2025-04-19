Feature: End-to-End Checkout Flow

  Scenario: User completes a purchase and order is saved
    Given the user is on the homepage
    When the user selects a product and views its details
    And the user adds the product to the cart
    And the user proceeds to checkout
    And the user fills in the address form with valid information
    And the user continues to the payment page
    And the user enters valid payment details
    And the user submits the payment
    Then the user should be redirected to the success page
    And the order number should be displayed and valid
    When the user navigates to their orders
    Then the user should see the order in their order history
