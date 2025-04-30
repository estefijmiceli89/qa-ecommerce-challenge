Feature: Success Page

Scenario: Display success page after successful order
  Given I have successfully placed an order
  When I am redirected to the success page
  Then I should see the message "Thank You for Your Purchase!"
  And I should see an order number
  And I should see a confirmation message
  And I should see options to continue shopping and view orders

Scenario: User clicks on Continue Shopping
    Given I have successfully placed an order
    When I click on the "Continue Shopping" button
    Then I should be redirected to the home page

  Scenario: User clicks on View Your Orders
    Given I have successfully placed an order
    When I click on the "View Your Orders" button
    Then I should be redirected to the orders page
