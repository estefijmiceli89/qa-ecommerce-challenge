class ProductDetailsPage {
  elements = {
    productImage: () => cy.get('[data-testid="product-image"]'),
    productName: () => cy.get('[data-testid="product-name"]'),
    productDescription: () => cy.get('[data-testid="product-description"]'),
    productPrice: () => cy.get('[data-testid="product-price"]'),
    quantitySelector: () => cy.get('[data-testid="quantity-selector"]'),
    addToCartButton: () => cy.get('[data-testid="add-to-cart"]'),
    cartItemCount: () => cy.get('[data-testid="quantity-2"]'),
    cartTotalPrice: () => cy.get('[data-testid="subtotal"]'),
  };

  verifyProductImage() {
    this.elements.productImage().should("be.visible");
  }

  verifyProductName(name) {
    this.elements.productName().should("contain.text", name);
  }

  verifyProductDescription(description) {
    this.elements.productDescription().should("contain.text", description);
  }

  verifyProductPrice(price) {
    this.elements.productPrice().should("contain.text", price);
  }

  selectProductQuantity(quantity) {
    this.elements.quantitySelector().select(quantity);
  }

  clickAddToCartButton() {
    this.elements.addToCartButton().click();
  }

  verifyCartItemCount(itemCount) {
    this.elements.cartItemCount().should("contain.text", itemCount);
  }

  verifyCartTotalPrice(totalPrice) {
    this.elements.cartTotalPrice().should("contain.text", totalPrice);
  }
}
export default new ProductDetailsPage();
