class HomePage {
  elements = {
    mainContent: () => cy.get('[data-testid="home-page"]'),
    productsGrid: () => cy.get('.products-grid'),
    productCards: () => cy.get('.product-card'),

    sortButton: () => cy.get('[data-test=sort-button]'),
    sortByPriceAsc: () => cy.contains('button', 'Sort by Price ↑'),
    sortByPriceDesc: () => cy.contains('button', 'Sort by Price ↓'),

    productNames: () => cy.get('.product-name'),
    productPrices: () => cy.get('[data-testid^="price-"]'),
    productDescriptions: () => cy.get('.product-description'),
    viewDetailsButton: () => cy.get('[data-testid^="view-product-"]'),

    searchInput: () => cy.get('[data-testid="product-search"]'),
    cartButton: () => cy.get('[data-testid="nav-to-cart"]'),
    profileButton: () => cy.get('[data-testid="nav-to-profile"]'),
  };

  visit() {
    cy.visit('/');
  }

  verifyMainContent() {
    this.elements.mainContent().should('be.visible');
  }

  verifyProductsGrid() {
    this.elements.productsGrid().should('be.visible');
  }

  verifyEachProductHasBasicData() {
    this.elements.productCards().each(($card) => {
      cy.wrap($card).find('img').should('be.visible');
      cy.wrap($card).find('.product-name').should('exist');
      cy.wrap($card).find('.product-price').should('exist');
      cy.wrap($card).find('.product-description').should('exist');
      cy.wrap($card)
        .find('.view-details-button')
        .contains('View Details')
        .should('be.visible');
    });
  }

  clickFirstViewDetails() {
    this.elements.viewDetailsButton().first().click();
  }

  sortByPriceAsc() {
    this.elements.sortButton().click();
  }

  sortByPriceDesc() {
    this.elements.sortButton().click();
  }

  verifyPriceOrderAscending() {
    const prices: number[] = [];
    this.elements
      .productPrices()
      .each(($el) => {
        const priceText = $el.text().replace(/[^\d.]/g, '');
        prices.push(parseFloat(priceText));
      })
      .then(() => {
        const sorted = [...prices].sort((a, b) => a - b);
        expect(prices).to.deep.equal(sorted);
      });
  }

  verifyPriceOrderDescending() {
    const prices: number[] = [];
    this.elements
      .productPrices()
      .each(($el) => {
        const priceText = $el.text().replace(/[^\d.]/g, '');
        prices.push(parseFloat(priceText));
      })
      .then(() => {
        const sorted = [...prices].sort((a, b) => b - a);
        expect(prices).to.deep.equal(sorted);
      });
  }

  search(term: string) {
    this.elements.searchInput().type(term);
  }

  verifySearchResults(term: string) {
    this.elements.productNames().each(($el) => {
      expect($el.text().toLowerCase()).to.include(term.toLowerCase());
    });
  }

  clickCart() {
    this.elements.cartButton().click();
  }

  clickProfile() {
    this.elements.profileButton().click();
  }
}

export default new HomePage();
