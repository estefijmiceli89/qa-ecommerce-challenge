Feature: Product Page

Background:
  Given I am on the homepage
  When I click on the "View Details" button for a product
  Then I should be redirected to the product page

Scenario: Product details are displayed
  Then I should see the product name
  And I should see the product price
  And I should see the product description
  And I should see the product image

Scenario: Quantity selector is present and functional
  Then I should see the quantity selector
  When I select quantity "3"
  Then the selected quantity should be "3"

Scenario: User can add the product to the cart
  When I select quantity "2"
  And I click the "Add to Cart" button
  Then the product should be added to the cart with quantity "2"

Scenario: User can navigate back to the homepage
  When I click the "Back to Products" button
  Then I should be redirected to the homepage
