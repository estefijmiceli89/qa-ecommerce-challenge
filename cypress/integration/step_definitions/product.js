import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user navigates to a specific product page', () => {
  cy.visit('/product/1');
});

Then('the product name, price, and description should be displayed', () => {
  cy.get('[data-testid="product-name"]').should('exist');
  cy.get('[data-testid="product-price"]').should('exist');
  cy.get('[data-testid="product-description"]').should('exist');
});

When('the user selects a quantity of 2', () => {
  cy.get('select').select('2');
});

When('clicks the "Add to Cart" button', () => {
  cy.get('[data-testid="add-to-cart"]').click();
});

Then('the product should be added to the cart', () => {
  cy.url().should('include', '/cart');
  cy.get('.cart-item', { timeout: 5000 }).should('be.visible');
  cy.get('.cart-item').should('have.length.at.least', 1);
});

When('the user proceeds to checkout', () => {
  cy.contains('Proceed to Checkout').click();
  cy.url().should('include', '/checkout/address');
});

Then('the user should be redirected to the address page', () => {
  cy.url().should('include', '/checkout/address');
});
