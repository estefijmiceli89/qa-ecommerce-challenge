import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PaymentPage from '../../pages/PaymentPage';

Given('I fill the payment form with valid details', () => {
    PaymentPage.visit();
    PaymentPage.fillPaymentForm({
        cardHolder: 'John Doe',
        cardNumber: '4111111111111111',
        expiryDate: '12/30',
        cvv: '123'
    });
});

When('I submit the payment form', () => {
    PaymentPage.submitForm();
});

Then('I should be redirected to the success page', () => {
    cy.url().should('include', '/checkout/success');
});

When('I submit the payment form with empty fields', () => {
    PaymentPage.visit();
    PaymentPage.submitForm();
});

Then('I should see a validation message for the first required payment field', () => {
    PaymentPage.elements.cardHolderInput().should('have.focus')
});

When('I enter {string} into the card holder name field and blur', (value: string) => {
    PaymentPage.visit();
    PaymentPage.enterAndBlur('cardHolderInput', value);
});

When('I enter {string} into the card number field and blur', (value: string) => {
    PaymentPage.visit();
    PaymentPage.enterAndBlur('cardNumberInput', value);
});

When('I enter {string} into the expiry date field and blur', (value: string) => {
    PaymentPage.visit();
    PaymentPage.enterAndBlur('expiryInput', value);
});

When('I enter {string} into the CVV field and blur', (value: string) => {
    PaymentPage.visit();
    PaymentPage.enterAndBlur('cvvInput', value);
});

Then('I should see a message {string}', (message: string) => {
    PaymentPage.verifyErrorMessage(message);
});
