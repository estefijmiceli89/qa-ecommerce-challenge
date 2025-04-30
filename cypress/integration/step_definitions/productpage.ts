import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';

Given('I have added {int} items of a product to the cart', (quantity: number) => {
  HomePage.visit();
  HomePage.clickFirstProductDetails();
  ProductPage.selectQuantity(quantity);
  ProductPage.addToCart();
});

Then('I should see the product name', () => {
  ProductPage.elements.productName().should('be.visible');
});

Then('I should see the product price', () => {
  ProductPage.elements.productPrice().should('be.visible');
});

Then('I should see the product description', () => {
  ProductPage.elements.productDescription().should('be.visible');
});

Then('I should see the product image', () => {
  ProductPage.elements.productImage().should('be.visible');
});

Then('I should see the quantity selector', () => {
  ProductPage.elements.quantitySelector().should('be.visible');
});

When('I select quantity {string}', (quantity: string) => {
  ProductPage.elements.quantitySelector().select(quantity);
});

Then('the selected quantity should be {string}', (quantity: string) => {
  ProductPage.elements.quantitySelector().should('have.value', quantity);
});

When('I click the "Add to Cart" button', () => {
  ProductPage.elements.addToCartButton().click();
});

Then('the product should be added to the cart with quantity {string}', (quantity: string) => {
  // You might validate this via toast, cart state, or network request — placeholder for now:
  cy.window().its('localStorage.cart').should((cart) => {
    const parsed = JSON.parse(cart);
    expect(parsed[0].quantity).to.equal(Number(quantity));
  });
});

When('I click the "Back to Products" button', () => {
  ProductPage.elements.backButton().click();
});

Then('I should be redirected to the homepage', () => {
  cy.url().should('eq', Cypress.config().baseUrl + '');
});


