class ProductPage {
    elements = {
      productName: () => cy.get('[data-testid="product-name"]'),
      productPrice: () => cy.get('[data-testid="product-price"]'),
      productDescription: () => cy.get('[data-testid="product-description"]'),
      productImage: () => cy.get('[data-testid="product-image"]'),
      quantitySelector: () => cy.get('[data-testid="quantity-selector"]'),
      addToCartButton: () => cy.get('[data-testid="add-to-cart"]'),
      backButton: () => cy.get('[data-testid="back-to-products"]')
    };


  selectQuantity(quantity: number) {
    this.elements.quantitySelector().select(quantity.toString());
  }

  addToCart() {
    this.elements.addToCartButton().click();
  }
  }
  
  export default new ProductPage();
  