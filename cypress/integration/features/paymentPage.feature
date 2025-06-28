Feature: Payment page

    As a user
    I want to enter my payment details
    So that I can complete my purchase

Background: User is on the payment page after successful checkout
    Given I am on the payment page after successful checkout

Scenario Outline: Invalid payment field entries
  When I enter an "<invalidValue>" in the "<field>" field
  Then I should see an error message "<errorMessage>" for the "<field>" field

  Examples:
    | field             | invalidValue | errorMessage                                                  |
    | Card Holder Name  | 12           | Card holder name must be 2-50 characters and contain only letters |
    | Card Number       | 12345678     | Card number must be 16 digits                                 |
    | Expiry Date       | 13           | Expiry date must be in MM/YY format                           |
    | CVV               | 1a           | CVV must be 3 or 4 digits                                   |

Scenario: Successful payment

    When I enter valid payment details
    Then I should be redirected to the successful page