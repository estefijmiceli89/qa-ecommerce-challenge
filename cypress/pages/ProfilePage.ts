export class ProfilePage {
  private name: string = '[data-testid="profile-name"]';
  private email: string = '[data-testid="profile-email"]';
  private orderList: string = '[data-testid="orders-list"]';
  private orderNumber: string = '[data-testid="orders-list"] .order-number';
  private orderDate: string = '[data-testid="orders-list"] .order-date';
  private orderTotal: string = '[data-testid="orders-list"] .order-total';

  public verifyProfileInformation() {
    cy.get(this.name)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.not.be.empty;
      });
    cy.get(this.email)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.not.be.empty;
      });
  }

  public verifyProductHistoryDetailsAndGeneralInformation() {
    for (let i = 0; i < this.orderList.length; i++) {
      cy.get(this.orderNumber[i])
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.not.be.empty;
        });
      cy.get(this.orderDate[i])
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.not.be.empty;
        });
      cy.get(this.orderTotal[i])
        .invoke("text")
        .then((text) => {
          const trimmedText = text.trim();
          expect(trimmedText).to.not.be.empty;
          expect(trimmedText).to.not.equal("$0.00");
        });
    }
  }
}
