export class CartPage {
  private cartItem: string = ".cart-item";
  private quantitySelection: string = ".quantity-select";
  private proceedToCheckout: string = '[data-testid="proceed-to-checkout"]';

  public verifyProductAdded() {
    cy.get(this.cartItem).should("be.visible");
  }

  public selectRamdonQuantity() {
    cy.get(this.quantitySelection)
      .find("option")
      .then((options) => {
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomValue = options[randomIndex].value;
        cy.get(this.quantitySelection).select(randomValue);
        cy.log(`Selected quantity: ${randomValue}`);
        return randomValue;
      });
  }

  public proceedToCheckOut() {
    cy.get(this.proceedToCheckout).click();
  }
}
