Feature: Payment form validation

  Scenario: Form validation error when submitting empty payment form
    When I submit the payment form with empty fields
    Then I should see a validation message for the first required payment field

  Scenario: Validation error for invalid card holder name
    When I enter "1" into the card holder name field and blur
    Then I should see a message "Card holder name must be 2-50 characters and contain only letters"

  Scenario: Validation error for short card number
    When I enter "1234" into the card number field and blur
    Then I should see a message "Card number must be 16 digits"

  Scenario: Validation error for incorrect expiry date format
    When I enter "1325" into the expiry date field and blur
    Then I should see a message "Expiry date must be in MM/YY format"

  Scenario: Validation error for invalid CVV
    When I enter "12" into the CVV field and blur
    Then I should see a message "CVV must be 3 or 4 digits"

  Scenario: Validation error for 1-letter card holder name
    When I enter "A" into the card holder name field and blur
    Then I should see a message "Card holder name must be 2-50 characters and contain only letters"

  Scenario: Validation error for 1-digit expiry date
    When I enter "3" into the expiry date field and blur
    Then I should see a message "Expiry date must be in MM/YY format"

  Scenario: Successful payment with valid data
    Given I fill the payment form with valid details
    When I submit the payment form
    Then I should be redirected to the success page