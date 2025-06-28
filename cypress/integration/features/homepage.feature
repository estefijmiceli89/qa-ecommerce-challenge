Feature: Homepage Navigation

  As a user
  I want to navigate to the homepage
  So that I can view the product catalog and search for products

Background:
  Given I am on the homepage

Scenario: User can navigate to the homepage
  
  Then I should see the main content
  And I should see the full list of products

Scenario: User sees the product catalog
  
  Then I should see the price "$149.99" for the product "Premium Leather Watch"
  And I should see the price "$199.99" for the product "Wireless Headphones"
  And I should see the price "$79.99" for the product "Classic White Sneakers"

Scenario Outline: Product card should include title and description
  
  Then I should see the product titled "<productTitle>"
  And I should see the product "<productDescription>"

  Examples:
    | productTitle             |  productDescription                                 |
    | Premium Leather Watch    | Elegant leather watch with premium craftsmanship    |
    | Wireless Headphones      | High-quality wireless headphones with noise cancellation         |
    | Classic White Sneakers   | Comfortable and stylish white sneakers for everyday wear         |

Scenario: User can sort products by price
  
  When I sort products by price in ascending order
  Then I should see the product "Classic White Sneakers" first
  And I should see the product "Wireless Headphones" second
  And I should see the product "Premium Leather Watch" last

Scenario: Search for an existing product
  
  When I type "Watch" in the search bar
  Then I should see only "Premium Leather Watch"

Scenario: Search for a non-existing product
  
  When I type "NonExistingProduct" in the search bar
  Then I should see a message "No products found matching your search."