Feature: Product Listing and Search
  Background:
    Given I am on the homepage  

  Scenario: View all available products
    Then I should see at least 3 products displayed
      And each product should contain:
        | Image          |
        | Name           |
        | Price          |
        | Description    |
        | "View Details" button |

  Scenario: Search for an existing product
    When I type "Wireless" into the search bar
    Then only products containing "Wireless" in their name should be displayed

  Scenario: Search for a non-existent product
    When I type "Car" into the search bar
    Then I should see a "No products found matching your search" message
      And no product cards should be displayed