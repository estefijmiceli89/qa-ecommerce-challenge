import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ProductDetailsPage from "../../pages/ProductDetailsPage";
import HomePage from "../../pages/HomePage";

Given("I am on the homepage", () => {
  HomePage.visit();
});

When(
  "I click on the {string} button for the product {string}",
  (buttonName, productTitle) => {
    if (buttonName.trim() === "View Details".trim()) {
      HomePage.clickViewDetailsButton(productTitle);
    }
  }
);

Then("I should see the product image", () => {
  ProductDetailsPage.verifyProductImage();
});

And("I should see the product title {string}", (name) => {
  ProductDetailsPage.verifyProductName(name);
});

And("I should see the product description {string}", (description) => {
  ProductDetailsPage.verifyProductDescription(description);
});

And("I should see the product price {string}", (price) => {
  ProductDetailsPage.verifyProductPrice(price);
});

When("I select the quantity {string}", (quantity) => {
  ProductDetailsPage.selectProductQuantity(quantity);
});

When("I click on the {string} button", (buttonName) => {
  if (buttonName.trim() === "Add to Cart".trim()) {
    ProductDetailsPage.clickAddToCartButton();
  }
});

And(
  "I should see the cart page with the number of items updated to {string}",
  (itemCount) => {
    ProductDetailsPage.verifyCartItemCount(itemCount);
  }
);

Then(
  "I should see the total price {string} for {string} items",
  (totalPrice, itemCount) => {
    ProductDetailsPage.verifyCartTotalPrice(totalPrice, itemCount);
  }
);
