Feature: Complete a Checkout Process

Background:
    Given I have products in my cart

Scenario: Complete checkout process succesfully
    When I proceed to checkout
    Then I should be on the checkout information page

    When I fill in the shipping information with valid data
    And I continue to payment

    When I enter valid payment details
    And I place my order

    Then I should see the order confirmation page
    