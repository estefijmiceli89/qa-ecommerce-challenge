import { should } from "chai"

class ProductPage {
    elements = {
        viewDetailsButton: () => cy.findByTestId("view-product-2"),
        productName: () => cy.findByTestId('product-name'),
        productPrice: () => cy.findByTestId('product-price'),
        productDescription: () => cy.findByTestId('product-description'),
        quantityPicker: () => cy.get('.quantity-selector'),
        addToCartButton: () => cy.findByTestId('add-to-cart'),
        backToProductsButton: () => cy.findByTestId('back-to-products'),
        quantityDropdown: () => cy.findByTestId('quantity-selector'),
        addToCartButton: () => cy.findByTestId('add-to-cart')
    }

    goToDetailsProduct() {
        this.elements.viewDetailsButton().click();
        cy.url().should('include', '/product/');
        }

    verifyproductDetails(product, price) {
        this.elements.productName()
                .should('be.visible')
                .and('have.text', product);
        this.elements.productPrice()
            .should('be.visible')
            .contains(price);
        this.elements.productDescription()
            .should('be.visible');

    }

    verifyQuantityPicker() {
        this.elements.quantityPicker().should('be.visible');
    }

    verifyAddToCartButton() {
        this.elements.addToCartButton().should('be.visible');
    }

    goBackToHomePage() {
        this.elements.backToProductsButton().should('be.visible');
        cy.url().should('include', '/');
    }

    selectQuantity(qt) {
        this.elements.quantityDropdown()
            .should('be.visible')
            .select(qt);
    }

    addToCart() {
        this.elements.addToCartButton()
            .should('be.visible')
            .click();
    }

    }
export default new ProductPage();