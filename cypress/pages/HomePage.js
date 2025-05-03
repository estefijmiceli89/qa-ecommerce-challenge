class HomePage {

    elements = {
        mainContent: () => cy.get('[data-testid="home-page"]'),
        productsGrid: () => cy.get('.products-grid'),

        productWatch: ()=> cy.get('[data-testid="view-product-2"]'),
        productHeadphones: ()=> cy.get('[data-testid="view-product-3"]'),
        productSneakers: ()=> cy.get('[data-testid="view-product-1"]'),
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

    selectWatch() {
        this.elements.productWatch.click();
    }

    selectHeadphones() {
        
    }

    selectSneakers() {

    }
}

export default new HomePage();