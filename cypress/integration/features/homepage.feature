Feature: Homepage Navigation

Scenario: User can navigate to the homepage
  Given the user navigates to the home page
  Then the page should display at least one product
  And each product should show a name, price, and description

Scenario: User sees a list of products
  Given the user navigates to the home page
  Then the page should display at least one product
  And each product should show a name, price, and description

Scenario: User searches for a product
  Given the user is on the home page
  When the user types "Watch" in the search bar
  Then only products with "Watch" in the name or description should be visible

Scenario: User sorts products by price ascending
  Given the user is on the home page
  When the user clicks the "Sort by Price ↑" button
  Then products should be ordered from lowest to highest price

Scenario: User clicks on product "View Details" button
  Given the user is on the home page
  When the user clicks "View Details" on a product
  Then the user should be redirected to that product’s detail page