class ProductPage {
  elements = {
    productName: () => cy.get('[data-testid="product-name"]'),
    productPrice: () => cy.get('[data-testid="product-price"]'),
    productDescription: () => cy.get('[data-testid="product-description"]'),
    productImage: () => cy.get('img[data-testid="product-image"]'),
    quantitySelector: () => cy.get('[data-testid="quantity-selector"]'),
    addToCartButton: () => cy.get('[data-testid="add-to-cart"]'),
    backToProductsButton: () => cy.get('[data-testid="back-to-products"]'),
    cartItemQuantity: () => cy.get('[data-testid="cart-item-quantity"]'),
  };

  verifyAllProductDetails() {
    this.elements.productName().should('exist');
    this.elements.productPrice().should('exist');
    this.elements.productDescription().should('exist');
    this.elements.productImage().should('be.visible');
  }

  verifyQuantitySelector() {
    this.elements.quantitySelector().should('exist');
  }

  selectQuantity(qty: string) {
    this.elements.quantitySelector().select(qty);
  }

  verifySelectedQuantity(qty: string) {
    this.elements.quantitySelector().should('have.value', qty);
  }

  clickAddToCart() {
    this.elements.addToCartButton().click();
  }

  verifyProductInCart(qty: string) {
		cy.get('[data-testid="quantity-2"]').should('have.value', '3');
  }

  clickBackToProducts() {
    this.elements.backToProductsButton().click();
  }
}

export default new ProductPage();
