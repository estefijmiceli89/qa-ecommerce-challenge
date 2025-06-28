Feature: Product Page Details

  Scenario Outline: User views product details from the catalog
    Given I visit the product catalog main page
    When I click the view details button for product card <cardNumber>
    Then the product page should display:
      | title       | <title>       |
      | price       | <price>       |
      | description | <description> |
    And the quantity dropdown should be visible
    And clicking the quantity dropdown should show 1 to 5 options
    And the add to cart button should be visible
    And the back to products button should be visible
    And clicking the back to products button should return to the catalog

    Examples:
      | cardNumber | title                   | price    | description                                               |
      | 1          | Classic White Sneakers  | $79.99   | DescriptionComfortable and stylish white sneakers for everyday wear  |
      | 2          | Premium Leather Watch   | $149.99  | DescriptionElegant leather watch with premium craftsmanship          |
      | 3          | Wireless Headphones     | $199.99  | DescriptionHigh-quality wireless headphones with noise cancellation  |
