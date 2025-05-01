class AddressPage {
  elements = {
    firstName: () => cy.get('[data-testid="firstname-input"]'),
    email: () => cy.get('[data-testid="email-input"]'),
    phone: () => cy.get('[data-testid="phone-input"]'),
    street: () => cy.get('[data-testid="street-input"]'),
    city: () => cy.get('[data-testid="city-input"]'),
    state: () => cy.get('[data-testid="state-input"]'),
    zip: () => cy.get('[data-testid="zipcode-input"]'),
    country: () => cy.get('[data-testid="country-input"]'),
    continueButton: () => cy.get('[data-testid="continue-to-payment"]'),
    backButton: () => cy.get('[data-testid="back-to-cart"]'),
  };

  visit() {
    cy.visit('/checkout/address');
  }

  verifyFormFieldsExist() {
    this.elements.firstName().should('exist');
    this.elements.email().should('exist');
    this.elements.phone().should('exist');
    this.elements.street().should('exist');
    this.elements.city().should('exist');
    this.elements.state().should('exist');
    this.elements.zip().should('exist');
    this.elements.country().should('exist');
    this.elements.continueButton().should('exist');
  }

  fillForm(data: Record<string, string>) {
    const map = {
      firstName: this.elements.firstName,
      email: this.elements.email,
      phone: this.elements.phone,
      street: this.elements.street,
      city: this.elements.city,
      state: this.elements.state,
      zip: this.elements.zip,
      country: this.elements.country,
    };

    Object.entries(data).forEach(([field, value]) => {
      map[field as keyof typeof map]()
        .should('not.be.disabled')
        .clear()
        .type(value);
    });
  }
  blurFields(fields: string[]) {
    const map = {
      firstName: this.elements.firstName,
      email: this.elements.email,
      phone: this.elements.phone,
      street: this.elements.street,
      city: this.elements.city,
      state: this.elements.state,
      zip: this.elements.zip,
      country: this.elements.country,
    };

    fields.forEach((field) => {
      map[field as keyof typeof map]().focus().clear().blur();
    });
  }

  blurAllFields() {
    this.blurFields([
      'firstName',
      'email',
      'phone',
      'street',
      'city',
      'state',
      'zip',
      'country',
    ]);
  }

  fillValidData() {
    this.fillForm({
      firstName: 'Eduardo',
      email: 'eduardo@example.com',
      phone: '11999999999',
      street: 'Rua Exemplo 123',
      city: 'Sao Paulo',
      state: 'SP',
      zip: '12345',
      country: 'Brazil',
    });
  }

  fillInvalidData() {
    this.fillForm({
      firstName: '123',
      email: 'invalid',
      phone: 'abc',
      street: '!@#',
      city: '123',
      state: '$$$',
      zip: 'abcd',
      country: '456',
    });
  }

  submit() {
    this.elements.continueButton().click();
  }
}

export default new AddressPage();
