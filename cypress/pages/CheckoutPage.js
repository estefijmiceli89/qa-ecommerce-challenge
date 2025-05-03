class CheckoutPage {

    addToTheCart() {
        cy.get('[data-testid="add-to-cart"]').click();
    }

    proceedToCheckout() {
        cy.get('[data-testid="proceed-to-checkout"]').click();
    }

    fillsInPersonalInformations() {
        cy.get('[data-testid="firstname-input"]').clear().type('Test');
        cy.get('[data-testid="email-input"]').clear().type('test@test.com');
        cy.get('[data-testid="phone-input"]').clear().type('6507049405');
        cy.get('[data-testid="street-input"]').clear().type('Test Land 123');
        cy.get('[data-testid="city-input"]').clear().type('Test City');
        cy.get('[data-testid="state-input"]').clear().type('Test State');
        cy.get('[data-testid="zipcode-input"]').clear().type('94108');
        cy.get('[data-testid="country-input"]').clear().type('USA');
        cy.get('[data-testid="continue-to-payment"]').click();
    }

    fillsInCreditCardInformations() {
        cy.get('[data-testid="cardholder-input"]').clear().type('Test Card');
        cy.get('[data-testid="card-number-input"]').clear().type('5289 5525 9480 0279');
        cy.get('[data-testid="expiry-input"]').clear().type('3/2026');
        cy.get('[data-testid="cvv-input"]').clear().type('624');
        cy.get('[data-testid="complete-payment"]').click();
    }

    orderVerification() {
        cy.get('[data-testid="order-number"]')
          .invoke('text')
          .then((orderNumber) => {
            cy.get('[data-testid="view-orders"]').click();
      
            cy.get('[class="order-number"]')
              .invoke('text')
              .then((orderNumberFromTheList) => {
                expect(orderNumberFromTheList.trim()).to.eq(orderNumber.trim());
              });
          });
      }
      
}

export default new CheckoutPage();