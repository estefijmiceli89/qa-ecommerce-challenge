Feature: Full Purchase Flow

  Scenario: User completes a full purchase successfully
    Given I am on the homepage
    When I click on the View Details button of a product
    Then I should be redirected to the product page for that item
    When I choose the quantity "3"
    And I click on the "Add to Cart" action
    Then the cart should include the product with quantity "3"
    And I click the "Proceed to Checkout" button
    Then I should be redirected to the address page
    When I fill in all address fields correctly
    And I click the "Continue to Payment" button
    Then I should be redirected to the payment page
    When I fill all payment fields correctly
    And I click the Place Order button on the payment form
    Then I should be redirected to the success page
    And I should see a confirmation message
    And I should see the order number
		And I navigate to the profile page
    Then I should see my personal information
    And I should see at least one past order