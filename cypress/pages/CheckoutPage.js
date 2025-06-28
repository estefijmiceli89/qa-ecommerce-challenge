class CheckoutPage {
  elements = {
    firstNameInput: () => cy.get('[data-testid="firstname-input"]'),
    emailInput: () => cy.get('[data-testid="email-input"]'),
    phoneInput: () => cy.get('[data-testid="phone-input"]'),
    streetInput: () => cy.get('[data-testid="street-input"]'),
    cityInput: () => cy.get('[data-testid="city-input"]'),
    stateInput: () => cy.get('[data-testid="state-input"]'),
    postalCodeInput: () => cy.get('[data-testid="zipcode-input"]'),
    countryInput: () => cy.get('[data-testid="country-input"]'),
    continuePaymentButton: () => cy.get('[data-testid="continue-to-payment"]'),
    errorMessage: () => cy.get(".error-message"),
    checkoutButton: () => cy.get('[data-testid="checkout-button"]'),
    orderSummary: () => cy.get('[data-testid="order-summary"]'),
    backToCartButton: () => cy.get('[data-testid="back-to-cart"]'),
  };

  filloutCheckoutForm(
    firstName,
    email,
    phone,
    street,
    city,
    state,
    postalCode,
    country
  ) {
    this.elements.firstNameInput().type(firstName);
    this.elements.emailInput().type(email);
    this.elements.phoneInput().type(phone);
    this.elements.streetInput().type(street);
    this.elements.cityInput().type(city);
    this.elements.stateInput().type(state);
    this.elements.postalCodeInput().type(postalCode);
    this.elements.countryInput().type(country);
  }

  clickContinueToPaymentButton(buttonName) {
    this.elements
      .continuePaymentButton()
      .should("contain.text", buttonName)
      .click();
  }

  filloutFirstName(firstName) {
    this.elements.firstNameInput().type(firstName).type("{enter}");
  }

  filloutEmail(email) {
    this.elements.emailInput().type(email).type("{enter}");
  }

  filloutPhone(phone) {
    this.elements.phoneInput().type(phone).type("{enter}");
  }

  filloutStreet(street) {
    this.elements.streetInput().type(street).type("{enter}");
  }

  filloutCity(city) {
    this.elements.cityInput().type(city).type("{enter}");
  }

  filloutState(state) {
    this.elements.stateInput().type(state).type("{enter}");
  }

  filloutPostalCode(postalCode) {
    this.elements.postalCodeInput().type(postalCode).type("{enter}");
  }

  filloutCountry(country) {
    this.elements.countryInput().type(country).type("{enter}");
  }

  getFormGroupByLabel(fieldLabel) {
    return cy.contains("label", fieldLabel).parent();
  }

  verifyErrorMessage(fieldLabel, errorMessage) {
    this.getFormGroupByLabel(fieldLabel)
      .find(".error-message")
      .should("contain.text", errorMessage);
  }

  clickOnBackToCartButton() {
    this.elements.backToCartButton().click();
  }

  verifyCheckoutButton(buttonName) {
    this.elements.checkoutButton().should("contain.text", buttonName);
  }
  verifyOrderSummary(summaryText) {
    this.elements.orderSummary().should("contain.text", summaryText);
  }
}

export default new CheckoutPage();
