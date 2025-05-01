class CartPage {
  elements = {
    productImage: () => cy.get('img'),
    productName: () => cy.contains('Premium Leather Watch'),
		productPrice: () => cy.get('[data-testid="item-price-2"]'),
    quantitySelect: () => cy.get('select'),
    subtotal: () => cy.get('[data-testid="subtotal"]'),
    removeButton: () => cy.get('[data-testid="remove-button"]'),
    proceedButton: () => cy.get('[data-testid="proceed-to-checkout"]'),
    continueButton: () => cy.get('[data-testid="continue-shopping"]'),
  };

  verifyProductDetails() {
    this.elements.productImage().should('be.visible');
    this.elements.productName().should('exist');
    this.elements.productPrice().should('exist');
    this.elements.quantitySelect().should('exist');
  }

  changeQuantity(qty: string) {
    this.elements.quantitySelect().select(qty);
  }

  verifyQuantity(qty: string) {
    this.elements.quantitySelect().should('have.value', qty);
  }

  storeSubtotalExpected(price: string, qty: string) {
    const numeric = parseFloat(price.replace('$', '')) * parseInt(qty);
    Cypress.env('expectedSubtotal', `$${numeric.toFixed(2)}`);
    console.log(Cypress.env('expectedSubtotal'));
  }

  verifySubtotal(expected: string) {
    this.elements.subtotal().should('have.text', expected);
  }

  clickButton(label: string) {
    cy.contains('button', label).click();
  }

  clickProceedToCheckout() {
    this.elements.proceedButton().click();
  }
}

export default new CartPage();
