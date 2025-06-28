class ProductCatalogPage {
    elements = {
        pageTitle: () => cy.get('[aria-label="Product Catalog"]'),
        mainContent: () => cy.get('[data-testid="home-page"]'),
        productsGrid: () => cy.get('.products-grid'),
        profileButton: () => cy.get('[data-testid="nav-to-profile"]'),
        cartButton: () => cy.get('[data-testid="nav-to-cart"]'),
        sortButton: () => cy.get('[data-testid="sort-price"]'),
        searchProductsInput: () => cy.get('[data-testid="product-search"]'),
        productCardImage: (card) => cy.get(`[data-testid="product-${card}"]`).find('[class="product-image"]'),
        productCardTitle: (card) => cy.get(`[data-testid="product-${card}"]`).find('[class="product-name"]'),
        productCardDescription: (card) => cy.get(`[data-testid="product-${card}"]`).find('[class="product-description"]'),
        productCardPrice: (card) => cy.get(`[data-testid="price-${card}"]`),
        viewDetailsButton: (card) => cy.get(`[data-testid="view-product-${card}"]`),
        productPrices: () => cy.get('[class="product-price"]'),
        productTitles: () => this.elements.productsGrid().find('[data-testid^="product-"]'),
        noProductsFoundMessage: () => cy.contains("No products found matching your search."),
        productTitle: (title) => cy.get('.product-name').contains(title)
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

    verifyTitle() {
        this.elements.pageTitle().should('be.visible');
    }

    verifyProfileButtton() {
        this.elements.profileButton().should('be.visible');
    }

    verifyCartButton() {
        this.elements.cartButton().should('be.visible');
    }

    verifySearchInput() {
        this.elements.searchProductsInput().should('be.visible');
    }

    verifySortButton() {
        this.elements.sortButton().should('be.visible');
    }

    verifyCardCount(count) {
        this.elements.productsGrid().find('[data-testid^="product-"]').should('have.length', count);
    }

    verifyProductCard(card, { title, price, description }) {
        this.elements.productCardTitle(card).should('have.text', title);
        this.elements.productCardPrice(card).should('have.text', price);
        this.elements.productCardDescription(card).should('have.text', description);
        this.elements.productCardImage(card).should('be.visible');
        this.elements.viewDetailsButton(card).should('be.visible');
    }

    verifyAllProductCards(cards) {
        cards.forEach((cardData, idx) => {
            this.verifyProductCard(idx + 1, cardData);
        });
    }

    clickSortButton() {
        this.elements.sortButton().click();
    }

    clickProfileButton(){
        this.elements.profileButton().click()
    }

    clickDetailsButton(card) {
        this.elements.viewDetailsButton(card).click();
    }

    getProductPrices() {
        return this.elements.productPrices()
            .then($prices => {
                return Cypress._.map($prices, el => 
                    Number(el.innerText.replace(/[^0-9.]/g, ''))
                );
            });
    }

    searchProduct(productName) {
        this.elements.searchProductsInput().clear().type(productName);
    }

    verifyOnlyProductVisibleByTitle(title) {
        this.elements.productTitle(title).should('be.visible');
    }

    verifyNoProductsFoundMessage() {
        this.elements.noProductsFoundMessage().should('be.visible');
    }
}

export default new ProductCatalogPage();
