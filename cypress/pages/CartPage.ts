class CartPage {
    elements = {
      emptyCart: () => cy.get('[data-testid="empty-cart"]'),
      continueShopping: () => cy.get('[data-testid="continue-shopping"]'),
      cartItem: () => cy.get('[data-testid^="cart-item-"]'),
      itemName: () => cy.get('.item-name'),
      itemPrice: () => cy.get('[data-testid^="item-price-"]'),
      quantitySelector: () => cy.get('[data-testid^="quantity-"]'),
      removeItemButton: () => cy.get('[data-testid^="remove-"]'),
      subtotal: () => cy.get('[data-testid="subtotal"]'),
      proceedToCheckout: () => cy.get('[data-testid="proceed-to-checkout"]')
    };
    visit() {
      cy.visit('/cart');
      cy.get('[data-testid="cart-page"]').should('be.visible');
    }
  
    clickProceedToCheckout() {
      cy.get('[data-testid="proceed-to-checkout"]').click();
    }
  
    // You may already have these if you did earlier:
    verifyCartNotEmpty() {
      cy.get('[data-testid^="cart-item-"]').should('have.length.at.least', 1);
    }
  
    verifySubtotalDisplayed() {
      cy.get('[data-testid="subtotal"]').should('exist');
    }
  }
  
  export default new CartPage();
  