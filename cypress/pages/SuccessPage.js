class SuccessPage {
  elements = {
    successMessage: () => cy.get(".success-content h1"),
    orderNumber: () => cy.get(".order-number"),
    orderConfirmationMessage: () => cy.get(".confirmation-message"),
    viewOrdersButton: () => cy.get('[data-testid="view-orders"]'),
  };

  verifySuccessMessage(expectedMessage) {
    this.elements.successMessage().should("contain.text", expectedMessage);
  }

  verifyOrderNumber() {
    this.elements.orderNumber().should("exist");
  }

  verifyOrderConfirmationMessage() {
    this.elements.orderConfirmationMessage().should("exist");
  }

  clickViewOrdersButton(buttonName) {
    this.elements.viewOrdersButton().should("contain.text", buttonName).click();
  }
}

export default new SuccessPage();
