import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../../pages/CartPage";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";

Given('I navigate to the cart page directly', () => {
  cy.visit('/cart');
});

Given('I have added a product to the cart', () => {
    HomePage.visit();
    HomePage.clickFirstProductDetails();
    ProductPage.addToCart();
  });

Then('I should see an empty cart message', () => {
  CartPage.elements.emptyCart().should('be.visible');
});

Then('I should see a "Continue Shopping" button', () => {
  CartPage.elements.continueShopping().should('be.visible');
});

When('I am on the cart page', () => {
  cy.url().should('include', '/cart');
});

Then('I should see the product in the cart', () => {
  CartPage.elements.cartItem().should('exist');
});

Then('I should see its name, price, and quantity selector', () => {
  CartPage.elements.itemName().should('be.visible');
  CartPage.elements.itemPrice().should('be.visible');
  CartPage.elements.quantitySelector().should('be.visible');
});

When('I change the quantity to {string}', (qty: string) => {
  CartPage.elements.quantitySelector().select(qty);
});

Then('the subtotal should update accordingly', () => {
  CartPage.elements.subtotal().invoke('text').then((subtotalText) => {
    const subtotal = parseFloat(subtotalText.replace('$', ''));
    expect(subtotal).to.be.greaterThan(0);
  });
});

When('I remove the product from the cart', () => {
  CartPage.elements.removeItemButton().click();
});

Then('the cart should be empty', () => {
  CartPage.elements.emptyCart().should('be.visible');
});

When('I click "Proceed to Checkout"', () => {
  CartPage.elements.proceedToCheckout().click();
});

Then('I should be taken to the checkout page', () => {
  cy.url().should('include', '/checkout');
});
