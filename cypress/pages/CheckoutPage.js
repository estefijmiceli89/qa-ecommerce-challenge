import { should } from "chai"

class CheckoutPage {
    elements = {
        // Shipping Form
        firstNameInput: () => cy.get('[data-testid="first-name"]'),
        emailInput: () => cy.get('[data-testid="email"]'),
        phoneInput: () => cy.get('[data-testid="phone"]'),
        streetAddressInput: () => cy.get('[data-testid="street-address"]'),
        cityInput: () => cy.get('[data-testid="city"]'),
        stateSelect: () => cy.get('[data-testid="state"]'),
        zipCodeInput: () => cy.get('[data-testid="zip-code"]'),
        countrySelect: () => cy.get('[data-testid="country"]'),
        
        // Payment Form
        cardHolderNameInput: () => cy.get('[data-testid="card-holder-name"]'),
        cardNumberInput: () => cy.get('[data-testid="card-number"]'),
        expiryDateInput: () => cy.get('[data-testid="expiry-date"]'),
        cvvInput: () => cy.get('[data-testid="cvv"]')
    }

    fillShippingInfo() {
        cy.fixture('shipping_info').then((data) => {
            this.elements.firstNameInput().type(data.firstName);
            this.elements.emailInput().type(data.email);
            this.elements.phoneInput().type(data.phone);
            this.elements.streetAddressInput().type(data.streetAddress);
            this.elements.cityInput().type(data.city);
            this.elements.stateSelect().select(data.state);
            this.elements.zipCodeInput().type(data.zipCode);
            this.elements.countrySelect().select(data.country);
        });
    }

    fillPaymentInfo() {
        cy.fixture('payment_info').then((data) => {
            this.elements.cardHolderNameInput().type(data.cardHolderName);
            this.elements.cardNumberInput().type(data.cardNumber);
            this.elements.expiryDateInput().type(data.expiryDate);
            this.elements.cvvInput().type(data.cvv);
        });
    }
}

export default new CheckoutPage();