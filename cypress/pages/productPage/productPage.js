class ProductPage {
    elements = {
        backToProductsButton: () => cy.get('[data-testid="back-to-products"]'),
        productTitle: () => cy.get('[data-testid="product-name"]'),
        productImage: () => cy.get('[data-testid="product-image"]'),
        productPrice: () => cy.get('[data-testid="product-price"]'),
        productDescription: () => cy.get('[data-testid="product-description"]'),
        quantityLabel: () => cy.get('[for="quantity"]'),
        quantityInput: () => cy.get('[data-testid="quantity-selector"]'),
        addToCartButton: () => cy.get('[data-testid="add-to-cart"]'),
    }

    verifyProductDetails({ title, price, description }) {
        this.elements.productTitle().should('have.text', title);
        this.elements.productPrice().should('have.text', price);
        this.elements.productDescription().should('have.text', description);
    }

    verifyQuantityDropdownVisible() {
        this.elements.quantityInput().should('be.visible');
    }

    verifyAddToCartButtonVisible() {
        this.elements.addToCartButton().should('be.visible');
    }

    verifyBackToProductsButtonVisible() {
        this.elements.backToProductsButton().should('be.visible');
    }

    verifyQuantityDropdownOptions(expectedOptions) {
        expectedOptions.forEach((option, idx) => {
            this.elements.quantityInput().select(option.toString());
        this.elements.quantityInput().find('option').should('have.length', expectedOptions.length);
            this.elements.quantityInput().find('option').eq(idx).should('have.text', option.toString());
        });
    }

    clickAddToCartButton() {
        this.elements.addToCartButton().click();
    }
}

export default new ProductPage();
