import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';
import CheckoutPage from '../../pages/CheckoutPage';
import { beforeEach } from 'node:test';


beforeEach(() => {
    cy.visit('/');
});

Given("The customer add a product on the cart", () => {
    HomePage.selectHeadphones();
    CheckoutPage.addToTheCart();
    CheckoutPage.proceedToCheckout();
});

When("The customer do the checkout flow with valid informations", () => {
    CheckoutPage.fillsInPersonalInformations();
    CheckoutPage.fillsInCreditCardInformations();
});

Then("The order should be successfully placed", () => {
    CheckoutPage.orderVerification();
});