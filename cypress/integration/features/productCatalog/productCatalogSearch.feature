Feature: Product Catalog Search

  Scenario Outline: User searches for a product in the catalog
    Given I visit the product catalog main page
    When I search for "<searchTerm>"
    Then only the product card with title "<expectedTitle>" should be visible

    Examples:
      | searchTerm            | expectedTitle           |
      | Wireless Headphones   | Wireless Headphones     |

  Scenario: User searches for a product that does not exist
    Given I visit the product catalog main page
    When I search for "Nonexistent Product"
    Then a message "No products found matching your search." should be visible
