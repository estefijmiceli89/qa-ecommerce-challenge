Feature: Address Page

  Background:
    Given I am on the address page with a product in the cart

  Scenario: Form loads with all required fields
    Then I should see fields for First Name, Email, Phone, Street Address, City, State, ZIP Code, and Country
    And I should see the "Continue to Payment" button

  Scenario: Required field message is shown on blur
    When I focus and unfocus each required field without entering a value
    Then I should see the message "This field is required" for each field

  Scenario: Error messages are shown while typing invalid data
    When I enter invalid values in all fields
    Then I should see validation messages like "valid email", "only letters", or "ZIP code must be 4 or 5 digits" 

  Scenario: Submit form with valid data
    When I fill in all address fields correctly
    And I click the "Continue to Payment" button
    Then I should be redirected to the payment page

  Scenario: Navigate back to cart
    When I click the "Back to Cart" button
    Then I should be redirected to the cart page