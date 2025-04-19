import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { addressData } from '../../../src/data/address';
import { validPaymentData } from '../../../src/data/payment';

Given('the user is on the homepage', () => {
  cy.visit('/');
});

When('the user selects a product and views its details', () => {
  cy.get('[data-testid="view-product-1"]').click();
});

When('the user adds the product to the cart', () => {
  cy.get('[data-testid="add-to-cart"]').click();
});

When('the user proceeds to checkout', () => {
  cy.get('[data-testid="proceed-to-checkout"]').click();
});

When('the user fills in the address form with valid information', () => {
  cy.get('input[name="firstName"]').type(addressData.firstName);
  cy.get('input[name="email"]').type(addressData.email);
  cy.get('input[name="phone"]').type(addressData.phone);
  cy.get('input[name="street"]').type(addressData.address);
  cy.get('input[name="city"]').type(addressData.city);
  cy.get('input[name="state"]').type(addressData.state);
  cy.get('input[name="zipCode"]').type(addressData.zip);
  cy.get('input[name="country"]').type(addressData.country);
});

When('the user continues to the payment page', () => {
  cy.get('[data-testid="continue-to-payment"]').click();
});

When('the user enters valid payment details', () => {
  cy.get('input[name="cardNumber"]').type(validPaymentData.cardNumber);
  cy.get('input[placeholder="MM/YY"]').type(validPaymentData.expirationDate);
  cy.get('input[name="cardHolder"]').type(validPaymentData.nameOnCard);
  cy.get('input[name="cvv"]').type(validPaymentData.cvv);
});

When('the user submits the payment', () => {
  cy.get('[data-testid="complete-payment"]').click();
});

Then('the user should be redirected to the success page', () => {
  cy.url().should('include', '/checkout/success');
});

Then('the order number should be displayed and valid', () => {
  cy.get('[data-testid="order-number"]')
    .should('be.visible')
    .invoke('text')
    .then((orderNumber) => {
      const trimmed = orderNumber.trim();
      expect(trimmed).to.match(/^#\d+$/, 'Order number should start with # and be numeric');
      cy.wrap(trimmed.replace('#', '')).as('savedOrderNumber');
      cy.log(`Order number generated: ${trimmed}`);
    });
});

When('the user navigates to their orders', () => {
  cy.get('[data-testid="view-orders"]').click();
});

Then('the user should see the order in their order history', () => {
  cy.get('@savedOrderNumber').then((savedOrderNumber) => {
    cy.get('[data-testid^="order-"]').should('have.attr', 'data-testid', `order-${savedOrderNumber}`);
  });
});
