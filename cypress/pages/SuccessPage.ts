class SuccessPage {
    elements = {
      page: () => cy.get('[data-testid="success-page"]'),
      title: () => cy.get('h1'),
      orderNumber: () => cy.get('[data-testid="order-number"]'),
      confirmationMessage: () => cy.get('.confirmation-message'),
      continueShoppingButton: () => cy.get('[data-testid="continue-shopping"]'),
      viewOrdersButton: () => cy.get('[data-testid="view-orders"]')
    };
  
    verifyOnSuccessPage() {
      this.elements.page().should('be.visible');
    }
  
    getTitle() {
      return this.elements.title();
    }
  
    getOrderNumber() {
      return this.elements.orderNumber();
    }
  
    getConfirmationMessage() {
      return this.elements.confirmationMessage();
    }
  
    getContinueShoppingButton() {
      return this.elements.continueShoppingButton();
    }
  
    getViewOrdersButton() {
      return this.elements.viewOrdersButton();
    }
  }
  
  export default new SuccessPage();
  