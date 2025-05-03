import { should } from "chai"

class HomePage {
    elements = {
        mainContent: () => cy.findByTestId('home-page'),
        homePageTitle: () => 
            cy.findByTestId('home-page').within(() => {
                cy.get('h1') 
              }),
        profileButton: () => 
            cy.findByTestId('home-page').within(() => {
                cy.get('.nav-buttons').within(() => {
                    cy.findByTestId('nav-to-profile')
                })
              }),
        cartButton: () => 
            cy.findByTestId('home-page').within(() => {
                cy.get('.nav-buttons').within(() => {
                    cy.findByTestId('nav-to-cart')
                })
                }),
        
        productsGrid: () => cy.get('.products-grid'),
        productCards: () => cy.get('.product-card'),
        productElements: {
            name: () => cy.get('.product-name'),
            price: () => cy.get('.product-price'),
            description: () => cy.get('.product-description'),
            viewDetailsButton: () => cy.get('.view-details-button')
        },
        searchBar: () => cy.findByTestId('product-search'),
        NoFoundMessage: () => cy.findByTestId('no-results'),
        SortButton: () => cy.findByTestId("sort-price"),
        FirstProductPrice: () => cy.findByTestId('product-1').within(() => {
            cy.findByTestId('price-1')
          }),
    }

    visit() {
        cy.visit('/');
    }

    verifyMainContent() {
        this.elements.mainContent().should('be.visible');
        this.elements.homePageTitle().contains('Product Catalog');
        this.elements.profileButton().should('be.visible');
        this.elements.cartButton().should('be.visible');
    }

    verifyProductsGrid() {
        this.elements.productsGrid().should('be.visible');
    }

    verifyProductCount(minCount) {
        this.elements.productCards().should('have.length.at.least', minCount);
    }

    verifyCardsContent() {
        this.elements.productCards().each(($card) => {
            cy.wrap($card).within(() => {
                this.elements.productElements.name()
                    .should('exist')
                    .and('be.visible');
                
                this.elements.productElements.price()
                    .should('exist')
                    .and('be.visible');
                
                this.elements.productElements.description()
                    .should('exist')
                    .and('be.visible');
                
                this.elements.productElements.viewDetailsButton()
                    .should('exist')
                    .and('be.visible')
                    .and('contain', 'View Details');
            });
        });
}
    verifySearchBarAndTypeIn(name) {
        this.elements.searchBar()
            .should('be.visible')
            .type(name);
    }

    verifyProductName(name) {
        this.elements.productCards().each(($card) => {
            cy.wrap($card).within(() => {
                this.elements.productElements.name()
                    .should('exist')
                    .and('be.visible')
                    .contains(name);
            });
        });
    }

    verifyNoFoundsMessage() {
        this.elements.NoFoundMessage()
            .should('be.visible')
            .contains('No products found matching your search.');
    }

    verifyNoProductExist() {
        this.elements.productsGrid().should('not.be.visible');
    }

    verifySortingButton() {
        this.elements.SortButton()
            .should('be.visible')
            .and('have.attr', 'aria-label', 'Sort by price descending');
    }

    sortByLowPrice() {
        this.elements.SortButton()
            .click()
            .and('have.attr', 'aria-label', 'Sort by price ascending'); 
    }

    verifyFirstProductPrice(price) {
        this.elements.FirstProductPrice()
        .should('be.visible')
        .contains(price);
    }
}
export default new HomePage();