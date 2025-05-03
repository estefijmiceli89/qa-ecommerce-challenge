Feature Product Checkout
  As a customer
  I want to be able to complete a purchase
  So that I can receive the products I selected


Scenario: Sucessful checkout
  Given The customer add a product on the cart
  When The customer do the checkout flow with valid informations
  Then The order should be successfully placed