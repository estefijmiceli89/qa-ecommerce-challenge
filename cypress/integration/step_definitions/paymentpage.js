import { validPaymentData, invalidPaymentData } from '../../../src/data/payment';

Given('the user is on the payment page', () => {
  cy.visit('/checkout/payment');
});

When('the user enters valid card information', () => {
  cy.get('input[name="cardHolder"]').type(validPaymentData.nameOnCard);
  cy.get('input[name="cardNumber"]').type(validPaymentData.cardNumber);
  cy.get('input[placeholder="MM/YY"]').type(validPaymentData.expirationDate);
  cy.get('input[name="cvv"]').type(validPaymentData.cvv);
});

When('the user enters invalid card information', () => {
  cy.get('input[name="cardHolder"]').type(invalidPaymentData.nameOnCard);
  cy.get('input[name="cardNumber"]').type(invalidPaymentData.cardNumber);
  cy.get('input[placeholder="MM/YY"]').type(invalidPaymentData.expirationDate);
  cy.get('input[name="cvv"]').type(invalidPaymentData.cvv);
});

When('submits the payment form', () => {
  cy.get('[data-testid="complete-payment"]').click();
});

Then('the user should be redirected to the success page', () => {
  cy.url().should('include', '/checkout/success');
});

Then('the payment form should display validation errors', () => {
  cy.url().should('include', '/checkout/payment');
  cy.get('input[name="cardHolder"]').parents('.form-group').find('.error-message').should('contain', 'This field is required');
  cy.get('input[placeholder="MM/YY"]').parents('.form-group').find('.error-message').should('contain', 'Expiry date must be in MM/YY format');
  cy.get('input[name="cvv"]').parents('.form-group').find('.error-message').should('contain', 'CVV must be 3 or 4 digits');
});
