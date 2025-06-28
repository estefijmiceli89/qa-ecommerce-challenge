import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pages/HomePage";
import ShoppingCartPage from "../../pages/ShoppingCartPage";
import ProductDetailsPage from "../../pages/ProductDetailsPage";

Given("I am on the shopping cart page", () => {
  ShoppingCartPage.visit();
});

Then("I should see a specific message {string}", (message) => {
  ShoppingCartPage.verifyEmptyCartMessage(message);
});

And("I should not see any products listed", () => {
  ShoppingCartPage.verifyNoProductsListed();
});

Given("I am on the home page", () => {
  HomePage.visit();
});

When(
  "I click on {string} for the product {string}",
  (buttonName, productTitle) => {
    if (buttonName.trim() === "View Details".trim()) {
      HomePage.clickViewDetailsButton(productTitle);
    }
  }
);

And("I click on the {string} button", (buttonName) => {
  if (buttonName.trim() === "Add to Cart".trim()) {
    ProductDetailsPage.addProductToCart();
  }
});

Then("I should see the product {string} in my cart", (productName) => {
  ShoppingCartPage.verifyCartItem(productName);
});

And(
  "I should see the total price {string} for {string} item",
  (totalPrice, itemCount) => {
    ShoppingCartPage.verifyCartTotalPrice(totalPrice);
    ShoppingCartPage.verifyCartItemCount(itemCount);
  }
);

And("I can see the button {string} displayed", (buttonName) => {
  ShoppingCartPage.verifyProceedToCheckoutButton(buttonName);
});
