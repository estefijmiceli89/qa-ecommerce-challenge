class CheckoutPage {
  elements = {
    addressPage: () => cy.get('[data-testid="address-page"]'),
    addressForm: () => cy.get('[data-testid="address-form"]'),
    firstNameInput: () => cy.get('[data-testid="firstname-input"]'),
    emailInput: () => cy.get('[data-testid="email-input"]'),
    phoneInput: () => cy.get('[data-testid="phone-input"]'),
    streetInput: () => cy.get('[data-testid="street-input"]'),
    cityInput: () => cy.get('[data-testid="city-input"]'),
    stateInput: () => cy.get('[data-testid="state-input"]'),
    zipCodeInput: () => cy.get('[data-testid="zipcode-input"]'),
    countryInput: () => cy.get('[data-testid="country-input"]'),
    continueToPaymentButton: () => cy.get('[data-testid="continue-to-payment"]'),
    validationErrors: () => cy.get('.error-message'),
  };

  verifyOnAddressPage() {
    this.elements.addressPage().should('be.visible');
  }

  verifyFormVisible() {
    this.elements.addressForm().should('be.visible');
  }

  fillForm(data: {
    firstName: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  }) {
    this.elements.firstNameInput().type(data.firstName);
    this.elements.emailInput().type(data.email);
    this.elements.phoneInput().type(data.phone);
    this.elements.streetInput().type(data.street);
    this.elements.cityInput().type(data.city);
    this.elements.stateInput().type(data.state);
    this.elements.zipCodeInput().type(data.zipCode);
    this.elements.countryInput().type(data.country);
  }

  submitForm() {
    this.elements.continueToPaymentButton().click();
  }

  verifyValidationErrors() {
    this.elements.validationErrors().should('have.length.at.least', 1);
  }

  verifyFirstNameValidation() {
    this.elements.firstNameInput().type('s').blur();
    this.elements.firstNameInput()
      .parent()
      .find('.error-message')
      .should('contain', 'Name must be 2-30 characters and contain only letters');
  }
}

export default new CheckoutPage();
