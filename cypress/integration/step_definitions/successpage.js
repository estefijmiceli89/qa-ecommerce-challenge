import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user is on the success page', () => {
  cy.visit('/checkout/success');
});

Then('the user should see a confirmation message', () => {
  cy.get('[data-testid="success-page"]').within(() => {
    cy.contains('Thank You for Your Purchase!').should('be.visible');
  });
});

Then('the user should see the order number', () => {
  cy.get('[data-testid="order-number"]')
    .should('be.visible')
    .invoke('text')
    .then((orderNumber) => {
      const trimmed = orderNumber.trim();
      expect(trimmed).to.match(/^#\d+$/, 'Order number should start with # and be numeric');
      expect(trimmed).to.not.be.empty;
      cy.wrap(trimmed).as('orderNumber');
    });
});

Then('the order number should be displayed and valid', () => {
  cy.get('[data-testid="order-number"]')
    .should('be.visible')
    .invoke('text')
    .then((orderNumber) => {
      const trimmed = orderNumber.trim();
      expect(trimmed).to.match(/^#\d+$/, 'Order number should start with # and be numeric');
      expect(trimmed).to.not.be.empty;
    });
});

Then('the user should be able to view their orders', () => {
  cy.contains('View Your Orders').should('be.visible').click();
  cy.url().should('include', '/profile');
});
