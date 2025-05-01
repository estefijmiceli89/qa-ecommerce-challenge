import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CartPage from '../../pages/CartPage';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';

Given('I have no products in the cart', () => {
  cy.clearLocalStorage();
  cy.visit('/cart');
});

Given('I have added a product to the cart', () => {
  HomePage.visit();
  HomePage.clickFirstViewDetails();
  ProductPage.selectQuantity('4');
  ProductPage.clickAddToCart();
});

Given('I have a product in the cart with quantity {string}', (qty: string) => {
  HomePage.visit();
  HomePage.clickFirstViewDetails();
  ProductPage.selectQuantity(qty);
  ProductPage.clickAddToCart();
});

Then('I should see the message {string}', (message: string) => {
  cy.contains(message).should('be.visible');
});

Then('I should see a {string} button', (label: string) => {
  cy.contains('button', label).should('exist');
});

Then('I should see the product image, name, price, and quantity selector', () => {
  CartPage.verifyProductDetails();
});

When('I change the quantity to {string}', (qty: string) => {
  CartPage.changeQuantity(qty);
});

Then('the quantity selector should show {string}', (qty: string) => {
  CartPage.verifyQuantity(qty);
});

Given('the product costs {string} and quantity is {string}', (price: string, qty: string) => {
  CartPage.storeSubtotalExpected(price, qty);
});

Then('the subtotal should be {string}', (total: string) => {
  CartPage.verifySubtotal(total);
});

When('I click the {string} button', (label: string) => {
  CartPage.clickButton(label);
});

Then('I should be redirected to the address page', () => {
  cy.url().should('include', '/checkout/address');
});

Then('the cart should be empty', () => {
  cy.contains('Your cart is empty').should('be.visible');
});