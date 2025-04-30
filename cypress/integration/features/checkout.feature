Feature: Checkout Address Entry

  Background:
    Given I have added 2 items of a product to the cart
    When I am on the cart page
    And I click "Proceed to Checkout"

  Scenario: User is redirected to the address page
    Then I should be on the address page
    And I should see the address form
    And I should see the continue payment button

  Scenario: User submits a valid address form
    When I fill in the address form with valid details
    And I submit the address form
    Then I should be redirected to the payment page

  Scenario: User enters a too-short first name and sees validation error
    When the user enters "s" into the First Name field
    And the user blurs out of the First Name field
    Then an error message should be displayed for the First Name field
  Scenario: Form validation error is shown for the first empty field on submit
    When I submit the address form with empty fields
    Then I should see a validation message for the first required field

  Scenario: User leaves all address fields empty and sees required field errors
    When the user taps through all address fields without entering data
    Then all required field error messages should be displayed
    
