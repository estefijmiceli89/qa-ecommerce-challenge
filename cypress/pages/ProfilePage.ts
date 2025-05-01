class ProfilePage {
  elements = {
    nameText: () => cy.get('[data-testid="profile-name"]'),
    emailText: () => cy.get('[data-testid="profile-email"]'),
    nameInput: () => cy.get('[data-testid="profile-name-input"]'),
    emailInput: () => cy.get('[data-testid="profile-email-input"]'),
    orderHistory: () => cy.get('[data-testid="orders-list"]'),
    noOrderHistory: () => cy.get('[data-testid="no-orders"]'),
    editButton: () => cy.get('[data-testid="edit-profile"]'),
    saveButton: () => cy.get('[data-testid="save-profile"]'),
    cancelButton: () => cy.get('[data-testid="cancel-edit"]'),
  };

  clickEdit() {
    this.elements.editButton().click();
  }

  clickSave() {
    this.elements.saveButton().click();
  }

  clickCancel() {
    this.elements.cancelButton().click();
  }

  updateName(name: string) {
    this.elements.nameInput().clear().type(name);
  }

  updateEmail(email: string) {
    this.elements.emailInput().clear().type(email);
  }

  verifyInputsAreEditable() {
    this.elements.nameInput().should('exist').and('be.visible');
    this.elements.emailInput().should('exist').and('be.visible');
  }

  verifyDisplayedNameAndEmail(name: string, email: string) {
    this.elements.nameText().should('contain.text', name);
    this.elements.emailText().should('contain.text', email);
  }

  verifyOrderHistoryExists() {
    this.elements.orderHistory().should('exist');
  }

  storeOriginalInfo() {
    this.elements
      .nameText()
      .invoke('text')
      .then((name) => {
        Cypress.env('originalName', name.trim());
      });

    this.elements
      .emailText()
      .invoke('text')
      .then((email) => {
        Cypress.env('originalEmail', email.trim());
      });
  }

  verifyOriginalInfoRestored() {
    const originalName = Cypress.env('originalName');
    const originalEmail = Cypress.env('originalEmail');
    this.elements.nameText().should('contain.text', originalName);
    this.elements.emailText().should('contain.text', originalEmail);
  }
  blurNameAndEmailFields() {
    this.elements.nameInput().clear().should('have.value', '').blur();
    this.elements.emailInput().clear().should('have.value', '').blur();
  }
  verifyNameErrorMessage() {
    this.elements
      .nameInput()
      .parent()
      .find('.error-message')
      .should(
        'contain.text',
        'Name must be at least 3 characters and contain only letters'
      );
  }

  verifyEmailErrorMessage() {
    this.elements
      .emailInput()
      .parent()
      .find('.error-message')
      .should('contain.text', 'Please enter a valid email address');
  }
}

export default new ProfilePage();
