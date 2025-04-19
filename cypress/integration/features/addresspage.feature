Feature: Address Page

  Scenario: User submits address form with valid data
    Given the user is on the address page
    When the user fills out the address form with valid data
    And submits the address form
    Then the user should be redirected to the payment page

  Scenario: User submits form with empty required fields
    Given the user is on the address page
    When the user submits the address form without filling it
    Then the form should display validation errors

  Scenario: User triggers validation by clicking into and out of a required field
    Given the user is on the address page
    When the user clicks into the "firstName" field and clicks out without typing
    Then the form should show a validation message for the "firstName" field

  Scenario: User enters invalid address data using test data
    Given the user is on the address page
    When the user enters invalid address data
    Then the form should show validation messages for all invalid fields
