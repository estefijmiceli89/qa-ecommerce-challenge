Feature: Success Page

  Scenario: User sees confirmation message after successful payment
    Given the user is on the success page
    Then the user should see a confirmation message
    And the order number should be displayed and valid
    And the user should be able to view their orders
