Feature: Payment Page

  Scenario: User submits payment form with valid card information using test data
    Given the user is on the payment page
    When the user enters valid card information
    And submits the payment form
    Then the user should be redirected to the success page

  Scenario: User submits invalid card information and should see validation errors
    Given the user is on the payment page
    When the user enters invalid card information
    And submits the payment form
    Then the payment form should display validation errors