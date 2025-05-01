class SuccessPage {
  elements = {
    successIcon: () => cy.get('.success-icon > svg'),
    title: () => cy.contains('h1', 'Thank You for Your Purchase!'),
    orderNumber: () => cy.get('[data-testid="order-number"]'),
    continueButton: () => cy.get('[data-testid="continue-shopping"]'),
    viewOrdersButton: () => cy.get('[data-testid="view-orders"]'),
    confirmationMessage: () => cy.get('.confirmation-message'),
  };

  clickContinueShopping() {
    this.elements.continueButton().click();
  }

  clickViewOrders() {
    this.elements.viewOrdersButton().click();
  }
}

export default new SuccessPage();
