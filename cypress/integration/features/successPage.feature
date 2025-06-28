Feature: Success Page
    
    Navigate to the success page after a successful checkout and payment process.

    Background: User has completed the checkout and payment process
        Given I am on the order success page

    Scenario: Verify success page elements
            When I see the success message
            Then I should see the order number
            And I should see a message indicating the order has been placed successfully
            And I can see my order details clicking on the "View Your Orders" button
    