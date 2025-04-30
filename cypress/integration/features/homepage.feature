Feature: Homepage Navigation

Scenario: User can navigate to the homepage
  Given I am on the homepage
  Then I should see the main content
  And I should see the full list of products

Scenario: User sees product catalog with images, titles, prices, and descriptions
  Given I am on the homepage
  Then I should see the full list of products
  And each product should have an image, name, price, description, and "View Details" button

Scenario: Clicking on "View Details" redirects to the Product Page
  Given I am on the homepage
  When I click on the "View Details" button for a product
  Then I should be redirected to the product page

Scenario: Sorting products by price
  Given I am on the homepage
  When I click the "Sort by Price" button
  Then the products should be sorted in ascending price order

Scenario: Searching for a product
  Given I am on the homepage
  When I search for "Sneakers" into the search bar
  Then I should only see products that match "Sneakers"