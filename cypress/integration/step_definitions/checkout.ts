import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import CheckoutPage from "../../pages/CheckoutPage";

Given("I add a product to the cart", () => {
    HomePage.visit();
    HomePage.clickFirstProductDetails();
    ProductPage.selectQuantity(2);
    ProductPage.addToCart();
});

Then("I should be on the address page", () => {
    cy.url().should("include", "/checkout/address");
    CheckoutPage.verifyOnAddressPage();
});

Then("I should see the address form", () => {
    CheckoutPage.verifyFormVisible();
});

Then("I should see the continue payment button", () => {
    CheckoutPage.elements.continueToPaymentButton().should('be.visible').and('contain', 'Continue to Payment');
});

When("I fill in the address form with valid details", () => {
    CheckoutPage.fillForm({
        firstName: "Jane",
        email: "jane@example.com",
        phone: "1234567890",
        street: "123 Main St",
        city: "Metropolis",
        state: "NY",
        zipCode: "12345",
        country: "USA"
    });
});

When("I submit the address form", () => {
    CheckoutPage.submitForm();
});

Then("I should be redirected to the payment page", () => {
    cy.url().should("include", "/checkout/payment");
});

When('I submit the address form with empty fields', () => {
    CheckoutPage.submitForm();
});

Then('I should see a validation message for the first required field', () => {
    CheckoutPage.elements.firstNameInput()
        .should('have.focus')
});

When('the user enters {string} into the First Name field', (value: string) => {
    CheckoutPage.elements.firstNameInput().type(value);
});

When('the user blurs out of the First Name field', () => {
    CheckoutPage.elements.firstNameInput().blur();
});

Then('an error message should be displayed for the First Name field', () => {
    CheckoutPage.elements.firstNameInput()
        .parent()
        .find('.error-message')
        .should('contain', 'Name must be 2-30 characters and contain only letters');
});

When('the user taps through all address fields without entering data', () => {
    // Simulate clicking into each field then blurring without typing
    CheckoutPage.elements.firstNameInput().focus().blur();
    CheckoutPage.elements.emailInput().focus().blur();
    CheckoutPage.elements.phoneInput().focus().blur();
    CheckoutPage.elements.streetInput().focus().blur();
    CheckoutPage.elements.cityInput().focus().blur();
    CheckoutPage.elements.stateInput().focus().blur();
    CheckoutPage.elements.zipCodeInput().focus().blur();
    CheckoutPage.elements.countryInput().focus().blur();
});

Then('all required field error messages should be displayed', () => {
    CheckoutPage.elements.firstNameInput().parent().find('.error-message')
        .should('contain', 'This field is required');

    CheckoutPage.elements.emailInput().parent().find('.error-message')
        .should('contain', 'This field is required');

    CheckoutPage.elements.phoneInput().parent().find('.error-message')
        .should('contain', 'This field is required');

    CheckoutPage.elements.streetInput().parent().find('.error-message')
        .should('contain', 'This field is required');

    CheckoutPage.elements.cityInput().parent().find('.error-message')
        .should('contain', 'This field is required');

    CheckoutPage.elements.stateInput().parent().find('.error-message')
        .should('contain', 'This field is required');

    CheckoutPage.elements.zipCodeInput().parent().find('.error-message')
        .should('contain', 'This field is required');

    CheckoutPage.elements.countryInput().parent().find('.error-message')
        .should('contain', 'This field is required');
});