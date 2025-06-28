import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pages/HomePage";

Given("I am on the homepage", () => {
  HomePage.visit();
});

Then("I should see the main content", () => {
  HomePage.verifyMainContent();
});

Then("I should see the full list of products", () => {
  HomePage.verifyProductsGrid();
});

Then("I should see the product titled {string}", (productTitle) => {
  HomePage.verifyProductTitle(productTitle);
});

And("I should see the product {string}", (productDescription) => {
  HomePage.verifyProductDescription(productDescription);
});

Then(
  "I should see the price {string} for the product {string}",
  (price, productName) => {
    HomePage.verifyProductPrice(price, productName);
  }
);

When("I sort products by price in ascending order", () => {
  HomePage.sortProductsByPrice();
});

Then("I should see the product {string} first", (firstProduct) => {
  HomePage.verifyFirstProduct(firstProduct);
});

Then("I should see the product {string} second", (secondProduct) => {
  HomePage.verifySecondProduct(secondProduct);
});

Then("I should see the product {string} last", (lastProduct) => {
  HomePage.verifyLastProduct(lastProduct);
});

When("I type {string} in the search bar", (searchTerm) => {
  HomePage.searchForProduct(searchTerm);
});

Then("I should see only {string}", (expectedProduct) => {
  HomePage.verifySearchResults(expectedProduct);
});

Then("I should see a message {string}", (message) => {
  HomePage.verifyNoProductsFoundMessage(message);
});
