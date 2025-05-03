import { should } from "chai"

class CheckoutPage {
    elements = {
        firstNameInput: () => cy.findByTestId('firstname-input'),
        emailInput: () => cy.findByTestId('email-input'),
        phoneInput: () => cy.findByTestId('phone-input'),
        streetAddressInput: () => cy.findByTestId('street-input'),
        cityInput: () => cy.findByTestId('city-input'),
        stateInput: () => cy.findByTestId('state-input'),
        zipCodeInput: () => cy.findByTestId('zipcode-input'),
        countryInput: () => cy.findByTestId('country-input'),
        continueToPaymentButton: () => cy.findByTestId('continue-to-payment'),
        cardHolderNameInput: () => cy.findByTestId('cardholder-input'),
        cardNumberInput: () => cy.findByTestId('card-number-input'),
        expiryDateInput: () => cy.findByTestId('expiry-input'),
        cvvInput: () => cy.findByTestId('cvv-input'),
        placeOrderButton: () => cy.findByTestId('complete-payment'),
        confirmationOrder: () => cy.get('.success-content'),
        orderNumber: () => cy.get('.order-number'),
        confirmationMessage: () => cy.get('.confirmation-message')
    }

    initiateCheckoutProcess() {
        cy.url().should('include', '/checkout/address');
    }

    fillShippingInfo() {
        cy.fixture('shipping_info').then((data) => {
            this.elements.firstNameInput().should('be.visible').type(data.firstName);
            this.elements.emailInput().should('be.visible').type(data.email);
            this.elements.phoneInput().should('be.visible').type(data.phone);
            this.elements.streetAddressInput().should('be.visible').type(data.streetAddress);
            this.elements.cityInput().should('be.visible').type(data.city);
            this.elements.stateInput().should('be.visible').type(data.state);
            this.elements.zipCodeInput().should('be.visible').type(data.zipCode);
            this.elements.countryInput().should('be.visible').type(data.country);
            this.elements.continueToPaymentButton().should('be.visible').click();
        
        });
    }

    fillPaymentInfo() {
        cy.fixture('payment_info').then((data) => {
            this.elements.cardHolderNameInput().should('be.visible').type(data.cardHolderName);
            this.elements.cardNumberInput().should('be.visible').type(data.cardNumber);
            this.elements.expiryDateInput().should('be.visible').type(data.expiryDate);
            this.elements.cvvInput().should('be.visible').type(data.cvv);
            this.elements.placeOrderButton().should('be.visible').click();
        });
    }

    getSuccesfullProcess() {
        cy.url().should('include', '/checkout/success');
        this.elements.confirmationOrder().should('be.visible');
        this.elements.confirmationMessage().should('be.visible');
        this.elements.orderNumber().should('be.visible');
    }
}

export default new CheckoutPage();