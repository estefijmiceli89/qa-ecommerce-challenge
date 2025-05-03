class CheckoutPage {

    elements = {
        addItem: () => cy.get('[data-testid="add-to-cart"]'),
        itemPrice: () => cy.get('[data-testid="item-price-2"]'),
        subtotalPrice: () => cy.get('[data-testid="subtotal"]'),
        itemQuantity: () => cy.get('[data-testid="quantity-2"]'),
        proceedToCheckout: () => cy.get('[data-testid="proceed-to-checkout"]'),

        firstName: () =>  cy.get('[data-testid="firstname-input"]'),
        email: () =>  cy.get('[data-testid="email-input"]'),
        phone: () =>  cy.get('[data-testid="phone-input"]'),
        streetAddress: () =>  cy.get('[data-testid="street-input"]'),
        city: () =>  cy.get('[data-testid="city-input"]'),
        state: () =>  cy.get('[data-testid="state-input"]'),
        zipCode: () =>  cy.get('[data-testid="zipcode-input"]'),
        country: () =>  cy.get('[data-testid="country-input"]'),
        continueToPayment: () =>  cy.get('[data-testid="continue-to-payment"]'),
        
        cardName: () => cy.get('[data-testid="cardholder-input"]'),
        cardNumber: () => cy.get('[data-testid="card-number-input"]'),
        expireDate: () => cy.get('[data-testid="expiry-input"]'),
        cvv: () => cy.get('[data-testid="cvv-input"]'),
        placeOrder: () => cy.get('[data-testid="complete-payment"]'),

        orderNumber: () => cy.get('[data-testid="order-number"]'),
        viewYourOrder: () => cy.get('[data-testid="view-orders"]'),

        orderlistNumber: () => cy.get('[class="order-number"]'),
        orderlistTotal: () => cy.get('[class="product-price"]'),
        orderlistTotalItens: () => cy.get('[class="order-items"]')

    }

    addToTheCart() {
        this.elements.addItem.should('be.visible').click();
    }

    verifyCartContent() {

    }

    proceedToCheckout() {
        this.elements.addItem.click();
    }

    fillsInPersonalInformations() {
        this.elements.firstName.clear().type('Test');
        this.elements.email.clear().type('test@test.com');
        this.elements.phone.clear().type('6507049405');
        this.elements.streetAddress.clear().type('Test Land 123');
        this.elements.city.clear().type('Test City');
        this.elements.state.clear().type('Test State');
        this.elements.zipCode.clear().type('94108');
        this.elements.country.clear().type('USA');
        this.elements.continueToPayment.click();
    }

    fillsInCreditCardInformations() {
        this.elements.cardName.clear().type('Test Card');
        this.elements.cardNumber.clear().type('5289 5525 9480 0279');
        this.elements.expireDate.clear().type('3/2026');
        this.elements.cvv.clear().type('624');
        this.elements.placeOrder.click();
    }

    orderVerification() {
        this.elements.orderNumber.invoke("text").then((orderNumber)=> {
          this.elements.viewYourOrder.click();
            this.elements.orderlistNumber.invoke("text").then((orderNumberFromTheList) => {
                expect(orderNumberFromTheList.trim()).to.eq(orderNumber.trim());
            });
       });
    }
}

export default new CheckoutPage();