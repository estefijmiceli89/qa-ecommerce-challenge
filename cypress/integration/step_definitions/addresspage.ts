import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import AddressPage from '../../pages/AddressPage';

Given('I am on the address page with a product in the cart', () => {
  HomePage.visit();
  HomePage.clickFirstViewDetails();
  ProductPage.selectQuantity('4');
  ProductPage.clickAddToCart();
  cy.visit('/checkout/address');
});

Then(
  'I should see fields for First Name, Email, Phone, Street Address, City, State, ZIP Code, and Country',
  () => {
    AddressPage.verifyFormFieldsExist();
  }
);

Then('I should see the {string} button', (label: string) => {
  cy.contains('button', label).should('exist');
});

When('I focus and unfocus each required field without entering a value', () => {
  AddressPage.blurAllFields();
});

Then('I should see the message {string} for each field', (msg: string) => {
  cy.contains(msg).should('exist');
});

When('I enter invalid values in all fields', () => {
  AddressPage.fillInvalidData();
});

Then(
  'I should see validation messages like {string}, {string}, or {string}',
  (v1: string, v2: string, v3: string) => {
    cy.contains(v1).should('exist');
    cy.contains(v2).should('exist');
    cy.contains(v3).should('exist');
  }
);

When('I fill in all address fields correctly', () => {
  AddressPage.fillValidData();
});

Then('I should be redirected to the payment page', () => {
  cy.url().should('include', '/checkout/payment');
});
