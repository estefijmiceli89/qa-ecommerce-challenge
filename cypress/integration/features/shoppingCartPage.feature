Feature: Shopping Cart Page

    As a user
    I want to manage my shopping cart
    So that I can view, add, and remove products
    

Scenario: View empty cart
    Given I am on the shopping cart page
    Then I should see a specific message "Your cart is empty"
    And I should not see any products listed

Scenario: Add product to cart
    Given I am on the homepage
    When I click on "View Details" for the product "Premium Leather Watch"
    And I click on the "Add to Cart" button
    Then I should see the product "Premium Leather Watch" in my cart
    And I should see the total price "$149.99" for "1" item
    And I can see the button "Proceed to Checkout" displayed