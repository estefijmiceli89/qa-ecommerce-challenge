class HomePage {
    elements = {
        mainContent: () => cy.get('[data-testid="home-page"]'),
        productsGrid: () => cy.get('.products-grid'),
        productCards: () => cy.get('.product-card'),
        productName: () => cy.get('.product-name'),
        productPrice: () => cy.get('.product-price'),
        productDescription: () => cy.get('.product-description'),
        viewDetailsButtons: () => cy.contains('button', 'View Details'),
        sortByPriceButton: () => cy.contains('button', 'Sort by Price'),
        searchBar: () => cy.get('input[type="text"]')
    }

    visit() {
        cy.visit('/');
    }

    verifyMainContent() {
        this.elements.mainContent().should('be.visible');
    }

    verifyProductsGrid() {
        this.elements.productsGrid().should('be.visible');
    }
    
    verifyEachProductCard() {
        this.elements.productCards().each(($card) => {
          cy.wrap($card).find('img').should('be.visible');
          cy.wrap($card).find('.product-name').should('exist');
          cy.wrap($card).find('.product-price').should('exist');
          cy.wrap($card).find('.product-description').should('exist');
          cy.wrap($card).find('.view-details-button').contains('View Details').should('be.visible');
        });
      }
      clickFirstProductDetails() {
        this.elements.productCards().first().contains('View Details').click();
      }
    
      clickSortByPrice() {
        this.elements.sortByPriceButton().click();
        cy.wait(2000)
      }
    
      verifyProductsSortedByPrice() {
        const prices: number[] = [];
        this.elements.productPrice().each(($el) => {
          const price = parseFloat($el.text().replace('$', ''));
          prices.push(price);
        }).then(() => {
          const sorted = [...prices].sort((a, b) => a - b);
          expect(prices).to.deep.equal(sorted);
        });
      }
    
      searchForProduct(term: string) {
        this.elements.searchBar().clear().type(term);
      }
    
      verifySearchResults(term: string) {
        this.elements.productName().each(($el) => {
          expect($el.text().toLowerCase()).to.include(term.toLowerCase());
        });
      }
}

export default new HomePage();