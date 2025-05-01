import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PaymentPage from '../../pages/PaymentPage';
import AddressPage from '../../pages/AddressPage';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';

Given(
  'I am on the payment page with a product in the cart and address filled',
  () => {
    HomePage.visit();
    HomePage.clickFirstViewDetails();
    ProductPage.selectQuantity('4');
    ProductPage.clickAddToCart();
    cy.visit('/checkout/address');
    AddressPage.fillValidData();
    AddressPage.submit();
  }
);

Given('I visit the payment page directly', () => {
  cy.visit('/checkout/payment');
});

Then(
  'I should see fields for Card Holder Name, Card Number, Expiry Date, and CVV',
  () => {
    PaymentPage.verifyFormFieldsExist();
  }
);

Then('I should see the Place Order button on the payment form', () => {
  PaymentPage.verifyPlaceOrderButton();
});

When('I blur all required fields on the payment form', () => {
  PaymentPage.blurAllFields();
});

Then(
  'I should see the message {string} for each payment field',
  (msg: string) => {
    PaymentPage.verifyRequiredFieldMessages(msg);
  }
);

When('I fill all payment fields correctly', () => {
  PaymentPage.fillValidData();
});

When('I click the Place Order button on the payment form', () => {
  PaymentPage.clickPlaceOrder();
});

Then('I should be redirected to the success page', () => {
  cy.url().should('include', '/checkout/success');
});

When('I click the Back to Address button on the payment form', () => {
  PaymentPage.clickBackToAddress();
});

When(
  'I type {string} in the cardholder name field and blur',
  (value: string) => {
    PaymentPage.typeAndBlurField('cardName', value);
  }
);

When('I type {string} in the card number field and blur', (value: string) => {
  PaymentPage.typeAndBlurField('cardNumber', value);
});

When('I type {string} in the expiry date field and blur', (value: string) => {
  PaymentPage.typeAndBlurField('expiryDate', value);
});

When('I type {string} in the CVV field and blur', (value: string) => {
  PaymentPage.typeAndBlurField('cvv', value);
});
