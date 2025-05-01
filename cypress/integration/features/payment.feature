Feature: Payment Page

  Scenario: Submit valid payment info
    Given I am on the payment page with a product in the cart and address filled
    When I fill all payment fields correctly
    And I click the Place Order button on the payment form
    Then I should be redirected to the success page

  Scenario: Payment form renders correctly
    Given I visit the payment page directly
    Then I should see fields for Card Holder Name, Card Number, Expiry Date, and CVV
    And I should see the Place Order button on the payment form

  Scenario: Required field message is shown on blur
    Given I visit the payment page directly
    When I blur all required fields on the payment form
    Then I should see the message "This field is required" for each payment field

  Scenario: Show error for single-character cardholder name
    Given I visit the payment page directly
    When I type "E" in the cardholder name field and blur
    Then I should see the message "Card holder name must be 2-50 characters and contain only letters"

  Scenario: Show error for numeric-only cardholder name
    Given I visit the payment page directly
    When I type "123456" in the cardholder name field and blur
    Then I should see the message "Card holder name must be 2-50 characters and contain only letters"

  Scenario: Show error for incomplete card number
    Given I visit the payment page directly
    When I type "1234" in the card number field and blur
    Then I should see the message "Card number must be 16 digits"

  Scenario: Show error for short expiry input
    Given I visit the payment page directly
    When I type "8" in the expiry date field and blur
    Then I should see the message "Expiry date must be in MM/YY format"

  Scenario: Show error for short CVV input
    Given I visit the payment page directly
    When I type "92" in the CVV field and blur
    Then I should see the message "CVV must be 3 or 4 digits"

  Scenario: Navigate back to address
    Given I visit the payment page directly
    When I click the Back to Address button on the payment form
    Then I should be redirected to the address page