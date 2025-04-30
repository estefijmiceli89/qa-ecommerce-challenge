Feature: Full E-commerce User Journey

Scenario: User completes a purchase and navigates through the app
    Given I am on the homepage
    When I click on the "View Details" button for a product
    Then I should be redirected to the product page
    When I select quantity "2"
    And I click the "Add to Cart" button
    Then the product should be added to the cart with quantity "2"
    When I am on the cart page
    Then I should see the product in the cart
    And I should see its name, price, and quantity selector
    And I click "Proceed to Checkout"
    Then I should be taken to the checkout page
    When I fill in the address form with valid details
    And I submit the address form
    Then I should be redirected to the payment page
    Given I fill the payment form with valid details
    When I submit the payment form
    Then I should be redirected to the success page
    Then I should see the message "Thank You for Your Purchase!"
    And I should see an order number
    And I should see a confirmation message
    And I should see options to continue shopping and view orders
  
  