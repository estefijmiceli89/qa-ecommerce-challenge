import { faker } from "@faker-js/faker";

export class SuccessPage {
  private successIcon: string = ".success-icon";
  private successMessageText: string = ".success-content h1";
  private viewOrders: string = ".view-orders-button";

  public verifySuccessMessage() {
    cy.get(this.successIcon).should("be.visible");
    cy.get(this.successMessageText).should(
      "contain.text",
      "Order placed successfully"
    );
  }

  public viewOrdersBtn() {
    cy.get(this.viewOrders).click();
  }
}