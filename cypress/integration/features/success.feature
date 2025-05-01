Feature: Order Success Page

  Background:
  Given I have completed a purchase successfully

  Scenario: Order confirmation is displayed
    Then I should see a success icon
    And I should see a confirmation message
    And I should see the order number
    And I should see the order follow-up message

  Scenario: User continues shopping after order
    When I click the Continue Shopping button on the success page
    Then I should be redirected to the homepage

  Scenario: User views past orders after order completion
    When I click the View Your Orders button on the success page
    Then I should be redirected to the profile page