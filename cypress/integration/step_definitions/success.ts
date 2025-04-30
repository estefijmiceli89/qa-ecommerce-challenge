import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SuccessPage from '../../pages/SuccessPage';

Given('I have successfully placed an order', () => {
  const orderNumber = 123456;
  localStorage.setItem('paymentStatus', 'success');
  localStorage.setItem('shopping-cart', JSON.stringify([
    { name: 'Test Product', price: 100, quantity: 1 }
  ]));

  cy.visit('/checkout/success');
});

When('I am redirected to the success page', () => {
  SuccessPage.verifyOnSuccessPage();
});

Then('I should see the message {string}', (message: string) => {
  SuccessPage.getTitle().should('contain.text', message);
});

Then('I should see an order number', () => {
  SuccessPage.getOrderNumber().should('be.visible');
});

Then('I should see a confirmation message', () => {
  SuccessPage.getConfirmationMessage().should('contain.text', 'We\'ve received your order');
});

Then('I should see options to continue shopping and view orders', () => {
  SuccessPage.getContinueShoppingButton().should('be.visible');
  SuccessPage.getViewOrdersButton().should('be.visible');
});

When('I click on the {string} button', (buttonText: string) => {
    if (buttonText === 'Continue Shopping') {
      SuccessPage.getContinueShoppingButton().click();
    } else if (buttonText === 'View Your Orders') {
      SuccessPage.getViewOrdersButton().click();
    } else {
      throw new Error(`Unknown button: ${buttonText}`);
    }
  });
  
  Then('I should be redirected to the orders page', () => {
    cy.location('pathname').should('eq', '/profile');
  });
  