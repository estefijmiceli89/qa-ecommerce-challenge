import { should } from "chai"

class CartPage {
    elements = {
        viewCardProduct: () => cy.findByTestId("cart-item-2"),
        cartSummary: () => cy.findByTestId('quantity-2'),
        checkoutButton: () => cy.findByTestId('proceed-to-checkout')
        
    }

    seeDetailsProduct() {
        this.elements.viewCardProduct().should('be.visible');
        this.elements.cartSummary().should('be.visible');
        }

    goToCheckout() {
        this.elements.checkoutButton()
            .should('be.visible')
            .click();
    }

    }
    export default new CartPage();