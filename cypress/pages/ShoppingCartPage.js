class ShoppingCartPage {
  elements = {
    cartItem: () => cy.get(".item-name"),
    cartItemCount: () => cy.get(".quantity-select"),
    cartTotalPrice: () => cy.get('[data-testid="subtotal"]'),
    emptyCartMessage: () => cy.contains("p", "Your cart is empty"),
    continueShoppingButton: () => cy.get('[data-testid="continue-shopping"]'),
    proceedToCheckoutButton: () =>
      cy.get('[data-testid="proceed-to-checkout"]'),
  };

  visit() {
    cy.visit("/cart");
  }

  verifyEmptyCartMessage(message) {
    this.elements.emptyCartMessage().should("contain.text", message);
  }

  verifyNoProductsListed() {
    this.elements.continueShoppingButton().should("be.visible");
  }

  verifyCartItem(productName) {
    this.elements.cartItem().should("contain.text", productName);
  }

  verifyCartItemCount(itemCount) {
    this.elements.cartItemCount().should("contain.text", itemCount);
  }

  verifyCartTotalPrice(totalPrice) {
    this.elements.cartTotalPrice().should("contain.text", totalPrice);
  }

  verifyContinueShoppingButton(buttonName) {
    this.elements.continueShoppingButton().should("contain.text", buttonName);
  }

  verifyProceedToCheckoutButton(buttonName) {
    this.elements.proceedToCheckoutButton().should("contain.text", buttonName);
  }

  proceedToCheckout() {
    this.elements.proceedToCheckoutButton().click();
  }
}

export default new ShoppingCartPage();
