Feature: Product detais page Renderization

Background:
    Given I am on the homepage
    When I click on "View Details" for a random product

Scenario: View the selected product details and Add multiple quantities to cart
    Then I should see the product specifications
    And I should see a quantity picker
    And I should see an "Add to Cart" button
    And I select 5 units from it
    And I click "Add to Cart"
    And see my products in Cart
    

