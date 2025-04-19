import { addressData, invalidAddressData } from '../../../src/data/address';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user is on the address page', () => {
  cy.visit('/checkout/address');
});

When('the user fills out the address form with valid data', () => {
  cy.get('input[name="firstName"]').type(addressData.firstName);
  cy.get('input[name="email"]').type(addressData.email);
  cy.get('input[name="phone"]').type(addressData.phone);
  cy.get('input[name="street"]').type(addressData.address);
  cy.get('input[name="city"]').type(addressData.city);
  cy.get('input[name="state"]').type(addressData.state);
  cy.get('input[name="zipCode"]').type(addressData.zip);
  cy.get('input[name="country"]').type(addressData.country);
});

When('submits the address form', () => {
  cy.contains('Continue').click();
});

Then('the user should be redirected to the payment page', () => {
  cy.url().should('include', '/checkout/payment');
});

When('the user submits the address form without filling it', () => {
  cy.contains('Continue').click();
});

Then('the form should display validation errors', () => {
  cy.url().should('include', '/checkout/address');
  cy.contains('Continue').should('be.visible');
});

When('the user clicks into the {string} field and clicks out without typing', (fieldName) => {
  cy.get(`input[name="${fieldName}"]`).focus().blur();
});

Then('the form should show a validation message for the {string} field', (fieldName) => {
  cy.get(`input[name="${fieldName}"]`)
    .parents('.form-group')
    .find('.error-message')
    .should('contain', 'This field is required');
});

When('the user enters invalid address data', () => {
  cy.get('input[name="firstName"]').type(invalidAddressData.firstName);
  cy.get('input[name="email"]').type(invalidAddressData.email);
  cy.get('input[name="phone"]').type(invalidAddressData.phone);
  cy.get('input[name="street"]').type(invalidAddressData.address);
  cy.get('input[name="city"]').type(invalidAddressData.city);
  cy.get('input[name="state"]').type(invalidAddressData.state);
  cy.get('input[name="zipCode"]').type(invalidAddressData.zip);
  cy.get('input[name="country"]').type(invalidAddressData.country);
});

Then('the form should show a validation message for the "firstName" field', () => {
  cy.get('input[name="firstName"]').parents('.form-group').find('.error-message').should('contain', 'Name must be 2-30 characters and contain only letters');
});

Then('the form should show a validation message for the "email" field', () => {
  cy.get('input[name="email"]').parents('.form-group').find('.error-message').should('contain', 'Please enter a valid email address');
});

Then('the form should show a validation message for the "phone" field', () => {
  cy.get('input[name="phone"]').parents('.form-group').find('.error-message').should('contain', 'Phone number must be 10-15 digits');
});

Then('the form should show a validation message for the "street" field', () => {
  cy.get('input[name="street"]').parents('.form-group').find('.error-message').should('contain', 'Street address must be at least 5 characters');
});

Then('the form should show a validation message for the "city" field', () => {
  cy.get('input[name="city"]').parents('.form-group').find('.error-message').should('contain', 'City must contain only letters and spaces');
});

Then('the form should show a validation message for the "state" field', () => {
  cy.get('input[name="state"]').parents('.form-group').find('.error-message').should('contain', 'State must contain only letters and spaces');
});

Then('the form should show a validation message for the "zip" field', () => {
  cy.get('input[name="zipCode"]').parents('.form-group').find('.error-message').should('contain', 'ZIP code must be 4 or 5 digits');
});

Then('the form should show a validation message for the "country" field', () => {
  cy.get('input[name="country"]').parents('.form-group').find('.error-message').should('contain', 'Country must contain only letters and spaces');
});

Then('the form should show validation messages for all invalid fields', () => {
  cy.get('input[name="firstName"]').parents('.form-group').find('.error-message')
    .should('contain', 'Name must be 2-30 characters and contain only letters');
  cy.get('input[name="email"]').parents('.form-group').find('.error-message')
    .should('contain', 'Please enter a valid email address');
  cy.get('input[name="phone"]').parents('.form-group').find('.error-message')
    .should('contain', 'Phone number must be 10-15 digits');
  cy.get('input[name="street"]').parents('.form-group').find('.error-message')
    .should('contain', 'Street address must be at least 5 characters');
  cy.get('input[name="city"]').parents('.form-group').find('.error-message')
    .should('contain', 'City must contain only letters and spaces');
  cy.get('input[name="state"]').parents('.form-group').find('.error-message')
    .should('contain', 'State must contain only letters and spaces');
  cy.get('input[name="zipCode"]').parents('.form-group').find('.error-message')
    .should('contain', 'ZIP code must be 4 or 5 digits');
  cy.get('input[name="country"]').blur().parents('.form-group').find('.error-message')
    .should('contain', 'Country must contain only letters and spaces');
});
