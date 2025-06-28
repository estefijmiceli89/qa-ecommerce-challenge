class PaymentPage {
  elements = {
    cardHolderNameInput: () => cy.get('[data-testid="cardholder-input"]'),
    cardNumberInput: () => cy.get('[data-testid="card-number-input"]'),
    cardExpiryInput: () => cy.get('[data-testid="expiry-input"]'),
    cardCvvInput: () => cy.get('[data-testid="cvv-input"]'),
    errorMessage: () => cy.get(".error-message"),
  };

  filloutPaymentForm(cardHolderName, cardNumber, cardExpiry, cardCvv) {
    this.elements.cardHolderNameInput().type(cardHolderName).type("{enter}");
    this.elements.cardNumberInput().type(cardNumber).type("{enter}");
    this.elements.cardExpiryInput().type(cardExpiry).type("{enter}");
    this.elements.cardCvvInput().type(cardCvv).type("{enter}");
  }

  getFormGroupByLabel(fieldLabel) {
    return cy.contains("label", fieldLabel).parent();
  }

  verifyErrorMessage(fieldLabel, errorMessage) {
    this.getFormGroupByLabel(fieldLabel)
      .find(".error-message")
      .should("contain.text", errorMessage);
  }

  verifySuccessfulPayment() {
    cy.url().should("include", "/success");
  }
}

export default new PaymentPage();
