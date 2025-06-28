Feature: Product Details Page

As a user
I want to view product details
So that I can know more about the product before purchasing it

Background: User is on the homepage and has a product available to view
    Given I am on the homepage
    When I click on the "View Details" button for the product "Premium Leather Watch"

Scenario: View product Details
    
    Then I should see the product image
    And I should see the product title "Premium Leather Watch"
    And I should see the product description "Elegant leather watch with premium craftsmanship"
    And I should see the product price "$149.99"

Scenario: Add product to cart
    
    When I select the quantity "2"
    When I click on the "Add to Cart" button
    And I should see the cart page with the number of items updated to "2"
    And I should see the total price "$299.98" for "2" items
