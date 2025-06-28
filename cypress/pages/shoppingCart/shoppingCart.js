class ShoppingCartPage {
    elements = {
        shoppingCartTitle: () => cy.get('[aria-label="Shopping Cart"]'),
        continueShoppingButton: () => cy.get('[data-testid="continue-shopping"]'),
        productNameCart: (product_number) => cy.get(`[data-testid="cart-item-${product_number}"]`).find('[class="item-name"]'),
        productPriceCart: (product_number) => cy.get(`[data-testid="item-price-${product_number}"]`),
        productCart: (product_number) => cy.get(`[data-testid="cart-item-${product_number}"]`),
        productImageCart: (product_number) => cy.get(`[data-testid="cart-item-${product_number}"]`).find('img'),
        quantityInput: (product_number) => cy.get(`[data-testid="quantity-${product_number}"]`),
        removeCartItemButton: (product_number) => cy.get(`[data-testid="remove-${product_number}"]`),
        subtotalLabel: () => cy.get('[data-testid="subtotal"]'),
        proceedToCheckoutButton: () => cy.get('[data-testid="proceed-to-checkout"]'),
        emptyCartMessage: () => cy.contains('Your cart is empty'),
        deleteWarning: () => cy.contains('Are you sure you want to remove this product?'),
        cartItem: () => cy.get('[data-testid^="cart-item-"]')
    }

    verifyShoppingCartPage() {
        cy.url().should('include', '/cart');
        this.elements.shoppingCartTitle().should('be.visible');
    }

    verifyContinueShoppingButton() {
        this.elements.continueShoppingButton().should('be.visible');
    }

    verifyProductInCart(product_number, { title, price }) {
        this.elements.productNameCart(product_number).should('have.text', title);
        this.elements.productPriceCart(product_number).should('have.text', price);
        this.elements.productImageCart(product_number).should('be.visible');
    }

    verifyQuantityInput(product_number, expectedQty) {
        this.elements.quantityInput(product_number).should('be.visible').and('have.value', expectedQty.toString());
    }

    changeQuantity(product_number, qty) {
        this.elements.quantityInput(product_number).select(qty);
    }

    verifySubtotalMatches() {
        this.elements.productPriceCart(1).invoke('text').then(priceText => {
            const price = Number(priceText.replace(/[^0-9.]/g, ''));
            this.elements.quantityInput(1).invoke('val').then(qty => {
                const expectedSubtotal = (price * Number(qty)).toFixed(2);
                this.elements.subtotalLabel().should('contain', expectedSubtotal);
            });
        });
    }

    verifySubtotalForAllProducts() {
        this.elements.cartItem().each(($el, idx) => {
            const product_number = idx + 1;
            this.elements.productPriceCart(product_number).invoke('text').then(priceText => {
                const price = Number(priceText.replace(/[^0-9.]/g, ''));
                this.elements.quantityInput(product_number).invoke('val').then(qty => {
                    if (idx === 0) {
                        cy.wrap({ sum: 0 }).as('subtotalSum');
                    }
                    cy.get('@subtotalSum').then(obj => {
                        obj.sum += price * Number(qty);
                        cy.wrap(obj).as('subtotalSum');
                    });
                });
            });
        }).then(() => {
            cy.get('@subtotalSum').then(obj => {
                const expectedSubtotal = obj.sum.toFixed(2);
                this.elements.subtotalLabel().should('contain', expectedSubtotal);
            });
        });
    }

    verifyProductRemoved(product_number) {
        this.elements.productCart(product_number).should('not.exist');
    }

    verifyEmptyCartMessage() {
        this.elements.emptyCartMessage().should('be.visible');
    }

    removeProduct(product_number) {
        this.elements.removeCartItemButton(product_number).click();
    }

    clickContinueShoppingButton() {
        this.elements.continueShoppingButton().click();
    }

    clickProceedToCheckoutButton() {
        this.elements.quantityInput(1).invoke('val').then(qty => {
            cy.wrap(Number(qty)).as('orderQuantity');
            this.elements.productPriceCart(1).invoke('text').then(priceText => {
                const price = Number(priceText.replace(/[^0-9.]/g, ''));
                cy.wrap(price).as('orderPrice');
                cy.wrap(Number(qty) * price).as('orderTotal');
                this.elements.productNameCart(1).invoke('text').then(name => {
                    cy.wrap(name.trim()).as('orderProductName');
                    this.elements.proceedToCheckoutButton().click();
                });
            });
        });
    }
}

export default new ShoppingCartPage();
