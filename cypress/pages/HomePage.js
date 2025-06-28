class HomePage {
  elements = {
    mainContent: () => cy.get('[data-testid="home-page"]'),
    productsGrid: () => cy.get(".products-grid"),
    productName: () => cy.get(".product-name"),
    productDescription: () => cy.get(".product-description"),
    containsProductCardByname: (productName) =>
      cy.contains(".product-card", productName),
    productPrice: () => cy.get(".product-price"),
    sortButton: () => cy.get(".sort-button"),
    productCards: () => cy.get(".products-grid .product-card"),
    searchInput: () => cy.get('[data-testid="product-search"]'),
    noProductsMessage: () => cy.get('[data-testid="no-results"]'),
  };

  visit() {
    cy.visit("/");
  }

  verifyMainContent() {
    this.elements.mainContent().should("be.visible");
  }

  verifyProductsGrid() {
    this.elements.productsGrid().should("be.visible");
  }

  verifyProductTitle(productTitle) {
    this.elements.productName().contains(productTitle).should("be.visible");
  }

  verifyProductDescription(productDescription) {
    this.elements
      .productDescription()
      .contains(productDescription)
      .should("be.visible");
  }

  verifyProductPrice(price, productName) {
    this.elements
      .containsProductCardByname(productName)
      .find(".product-price")
      .should("contain.text", price);
  }

  sortProductsByPrice() {
    this.elements.sortButton().click();
  }

  verifyFirstProduct(productName) {
    this.elements.productCards().first().should("contain.text", productName);
  }

  verifySecondProduct(productName) {
    this.elements.productCards().eq(1).should("contain.text", productName);
  }

  verifyLastProduct(productName) {
    this.elements.productCards().last().should("contain.text", productName);
  }

  searchForProduct(searchTerm) {
    this.elements.searchInput().type(searchTerm);
  }

  verifySearchResults(expectedProduct) {
    this.elements.productCards().should("have.length", 1);
    this.elements.productCards().should("contain.text", expectedProduct);
  }

  verifyNoProductsFoundMessage(message) {
    this.elements.searchInput().type(message);
    this.elements.noProductsMessage().should("contain.text", message);
  }

  clickViewDetailsButton(productTitle) {
    this.elements
      .containsProductCardByname(productTitle)
      .find(".view-details-button")
      .click();
  }
}

export default new HomePage();
