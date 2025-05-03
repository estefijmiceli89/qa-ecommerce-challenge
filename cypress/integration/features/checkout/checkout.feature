Feature: Complete a Checkout Process

Background:
    Given I have products in my cart

Scenario: Complete checkout process succesfully
    When I proceed to checkout, I should be on the checkout information page
    Then I fill in the shipping information with valid data
    And I enter valid payment details to place my order
    Then I should see the order confirmation page
    