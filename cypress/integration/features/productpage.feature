Feature: Product Page

  Scenario: User views a product detail page
    Given the user navigates to a specific product page
    Then the product name, price, and description should be displayed

  Scenario: User selects a quantity and adds product to cart
    Given the user navigates to a specific product page
    When the user selects a quantity of 2
    And clicks the "Add to Cart" button
    Then the product should be added to the cart

  Scenario: User proceeds to checkout from the cart
    Given the user navigates to a specific product page
    When the user selects a quantity of 2
    And clicks the "Add to Cart" button
    And the user proceeds to checkout
    Then the user should be redirected to the address page


  