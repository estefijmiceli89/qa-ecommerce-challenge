class ProfilePage {
    elements = {
      profilePage: () => cy.get('[data-testid="profile-page"]'),
      nameText: () => cy.get('[data-testid="profile-name"]'),
      emailText: () => cy.get('[data-testid="profile-email"]'),
      editButton: () => cy.get('[data-testid="edit-profile"]'),
      nameInput: () => cy.get('[data-testid="profile-name-input"]'),
      emailInput: () => cy.get('[data-testid="profile-email-input"]'),
      saveButton: () => cy.get('[data-testid="save-profile"]'),
      cancelButton: () => cy.get('[data-testid="cancel-edit"]'),
      backToHomeButton: () => cy.get('[data-testid="back-to-home"]'),
      ordersList: () => cy.get('[data-testid="orders-list"]'),
      noOrdersMessage: () => cy.get('[data-testid="no-orders"]'),
      startShoppingButton: () => cy.get('[data-testid="start-shopping"]'),
      firstOrder: () => cy.get('[data-testid^="order-"]').first()
    };
  
    visit() {
      cy.visit('/profile');
      this.elements.profilePage().should('be.visible');
    }
  
    fillProfileForm(name: string, email: string) {
      this.elements.nameInput().clear().type(name);
      this.elements.emailInput().clear().type(email);
    }
  
    saveChanges() {
      this.elements.saveButton().click();
    }
  
    cancelEdit() {
      this.elements.cancelButton().click();
    }
  }
  
  export default new ProfilePage();
  