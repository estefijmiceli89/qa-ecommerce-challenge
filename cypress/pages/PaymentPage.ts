class PaymentPage {
  elements = {
    cardName: () => cy.get('[data-testid="cardholder-input"]'),
    cardNumber: () => cy.get('[data-testid="card-number-input"]'),
    expiryDate: () => cy.get('[data-testid="expiry-input"]'),
    cvv: () => cy.get('[data-testid="cvv-input"]'),
    placeOrderButton: () => cy.get('[data-testid="complete-payment"]'),
    backButton: () => cy.get('[data-testid="back-to-address"]'),
    errorMessages: () => cy.get('.error-message'),
  };

  verifyFormFieldsExist() {
    this.elements.cardName().should('exist');
    this.elements.cardNumber().should('exist');
    this.elements.expiryDate().should('exist');
    this.elements.cvv().should('exist');
  }

  verifyPlaceOrderButton() {
    this.elements.placeOrderButton().should('exist');
  }

  blurAllFields() {
    this.elements.cardName().focus().blur();
    this.elements.cardNumber().focus().blur();
    this.elements.expiryDate().focus().blur();
    this.elements.cvv().focus().blur();
  }

  verifyRequiredFieldMessages(message: string) {
    this.elements.errorMessages().should('have.length', 4);
    this.elements.errorMessages().each(($el) => {
      cy.wrap($el).should('contain.text', message);
    });
  }

  fillValidData() {
    this.elements
      .cardName()
      .should('not.be.disabled')
      .clear()
      .type('Eduardo Afonso');
    this.elements
      .cardNumber()
      .should('not.be.disabled')
      .clear()
      .type('4111111111111111');
    this.elements.expiryDate().should('not.be.disabled').clear().type('12/30');
    this.elements.cvv().should('not.be.disabled').clear().type('123');
  }

  typeAndBlurField(
    fieldKey: 'cardName' | 'cardNumber' | 'expiryDate' | 'cvv',
    value: string
  ) {
    this.elements[fieldKey]().clear().type(value).blur();
  }

  clickPlaceOrder() {
    this.elements.placeOrderButton().click();
  }

  clickBackToAddress() {
    this.elements.backButton().click();
  }
}

export default new PaymentPage();
