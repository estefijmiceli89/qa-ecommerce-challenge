class PaymentPage {
    elements = {
      cardHolderInput: () => cy.get('[data-testid="cardholder-input"]'),
      cardNumberInput: () => cy.get('[data-testid="card-number-input"]'),
      expiryInput: () => cy.get('[data-testid="expiry-input"]'),
      cvvInput: () => cy.get('[data-testid="cvv-input"]'),
      submitButton: () => cy.get('[data-testid="complete-payment"]'),
      errorMessages: () => cy.get('.error-message'),
    };
  
    visit() {
      cy.visit('/checkout/payment');
    }
  
    fillPaymentForm(data: {
      cardHolder: string;
      cardNumber: string;
      expiryDate: string;
      cvv: string;
    }) {
      this.elements.cardHolderInput().type(data.cardHolder);
      this.elements.cardNumberInput().type(data.cardNumber);
      this.elements.expiryInput().type(data.expiryDate);
      this.elements.cvvInput().type(data.cvv);
    }
  
    submitForm() {
      this.elements.submitButton().click();
    }
  
    blurField(field: keyof typeof this.elements) {
      this.elements[field]().blur();
    }
  
    enterAndBlur(field: keyof typeof this.elements, value: string) {
      this.elements[field]().clear().type(value).blur();
    }
  
    verifyErrorMessage(message: string) {
      this.elements.errorMessages().contains(message).should('be.visible');
    }
  }
  
  export default new PaymentPage();
  