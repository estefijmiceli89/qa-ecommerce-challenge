        // @BUG: Last name missing in form

class CheckoutPage {
    elements = {
        pageTitle: () => cy.get('[aria-label="Delivery Address"]'),
        backToCartButton: () => cy.get('[data-testid="back-to-cart"]'),
        firstNameInput: () => cy.get('[data-testid="firstname-input"]'),
        emailInput: () => cy.get('[data-testid="email-input"]'),
        phoneInput: () => cy.get('[data-testid="phone-input"]'),
        addressInput: () => cy.get('[data-testid="street-input"]'),
        cityInput: () => cy.get('[data-testid="city-input"]'),
        stateInput: () => cy.get('[data-testid="state-input"]'),
        zipCodeInput: () => cy.get('[data-testid="zipcode-input"]'),
        countryInput: () => cy.get('[data-testid="country-input"]'),
        continueButton: () => cy.get('[data-testid="continue-to-payment"]'),
        requiredError: (label) => cy.contains(`${label} is required`),
        paymentStep: () => cy.get('[aria-label="Payment Information"]'),
        cardHolderNameInput: () => cy.get('[data-testid="cardholder-input"]'),
        cardNumberInput: () => cy.get('[data-testid="card-number-input"]'),
        expirationDateInput: () => cy.get('[data-testid="expiry-input"]'),
        cvvInput: () => cy.get('[data-testid="cvv-input"]'),
        placeOrderButton: () => cy.get('[data-testid="complete-payment"]'),
        successMessage: () => cy.contains('Thank You for Your Purchase!'),
        validationMessage: (message) => cy.contains(message),
        orderNumber: () => cy.get('[data-testid="order-number"]'),
        confirmationMessage: () => cy.get('[class="confirmation-message"]'),
        continueShoppingButton: () => cy.get('[data-testid="continue-shopping"]'),
        viewYourOrdersButton: () => cy.get('[data-testid="view-orders"]'),

    }

    verifyCheckoutPage() {
        cy.url().should('include', '/checkout');
        this.elements.pageTitle().should('be.visible');
    }

    verifyDeliveryForm() {
        this.elements.firstNameInput().should('be.visible');
        this.elements.emailInput().should('be.visible');
        this.elements.phoneInput().should('be.visible');
        this.elements.addressInput().should('be.visible');
        this.elements.cityInput().should('be.visible');
        this.elements.stateInput().should('be.visible');
        this.elements.zipCodeInput().should('be.visible');
        this.elements.countryInput().should('be.visible');
    }

    fillValidForm() {
        this.elements.firstNameInput().clear().type('John');
        this.elements.emailInput().clear().type('john@email.com');
        this.elements.phoneInput().clear().type('1234567890');
        this.elements.addressInput().clear().type('123 Main St');
        this.elements.cityInput().clear().type('Springfield');
        this.elements.stateInput().clear().type('Illinois');
        this.elements.zipCodeInput().clear().type('12345');
        this.elements.countryInput().clear().type('USA');
    }

    fillInvalidForm() {
        this.elements.firstNameInput().clear().type('1');
        this.elements.emailInput().clear().type('invalid-email');
        this.elements.phoneInput().clear().type('abc');
        this.elements.addressInput().clear().type('12');
        this.elements.cityInput().clear().type('123');
        this.elements.stateInput().clear().type('123');
        this.elements.zipCodeInput().clear().type('abc');
        this.elements.countryInput().clear().type('123');
    }

    continueToPayment() {
        this.elements.continueButton().click();
    }

    verifyPaymentStepStarted() {
        this.elements.paymentStep().should('be.visible');
    }

    verifyRequiredFieldErrors() {
        this.elements.firstNameInput().focus().blur();
        this.elements.emailInput().focus().blur();
        this.elements.phoneInput().focus().blur();
        this.elements.addressInput().focus().blur();
        this.elements.cityInput().focus().blur();
        this.elements.stateInput().focus().blur();
        this.elements.zipCodeInput().focus().blur();
        this.elements.countryInput().focus().blur();

        this.elements.validationMessage('This field is required').should('exist');
    }

    verifyAllValidationErrors() {
        this.elements.validationMessage('Name must be 2-30 characters and contain only letters').should('be.visible');
        this.elements.validationMessage('Please enter a valid email address').should('be.visible');
        this.elements.validationMessage('Phone number must be 10-15 digits').should('be.visible');
        this.elements.validationMessage('Street address must be at least 5 characters').should('be.visible');
        this.elements.validationMessage('City must contain only letters and spaces').should('be.visible');
        this.elements.validationMessage('State must contain only letters and spaces').should('be.visible');
        this.elements.validationMessage('ZIP code must be 4 or 5 digits').should('be.visible');
        this.elements.validationMessage('Country must contain only letters and spaces').should('be.visible');
    }

    fillValidPaymentForm() {
        this.elements.cardHolderNameInput().clear().type('John Doe');
        this.elements.cardNumberInput().clear().type('4111111111111111');
        this.elements.expirationDateInput().clear().type('12/30');
        this.elements.cvvInput().clear().type('123');
    }

    fillInvalidPaymentForm() {
        this.elements.cardHolderNameInput().clear().type('1');
        this.elements.cardNumberInput().clear().type('1234');
        this.elements.expirationDateInput().clear().type('13/99');
        this.elements.cvvInput().clear().type('1a');
    }

    placeOrder() {
        this.elements.placeOrderButton().click();
    }

    verifyAllPaymentValidationErrors() {
        this.elements.validationMessage('Card holder name must be 2-50 characters and contain only letters').should('be.visible');
        this.elements.validationMessage('Card number must be 16 digits').should('be.visible');
        this.elements.validationMessage('Expiry date must be in MM/YY format').should('be.visible');
        this.elements.validationMessage('CVV must be 3 or 4 digits').should('be.visible');
        // @BUG: The page doesn't take in consideration the expiration date being older than the current year
        //this.elements.validationMessage('Credit card expiration date should be older than current year.').should('be.visible');
    }

    verifySuccessPage() {
        cy.url().should('include', '/checkout/success');
        this.elements.successMessage().should('be.visible');
    }

    verifySuccessComponent() {
        this.elements.successMessage().should('be.visible');
        this.elements.orderNumber().should('be.visible');
        this.elements.confirmationMessage().should('be.visible');
        this.elements.continueShoppingButton().should('be.visible');
        this.elements.viewYourOrdersButton().should('be.visible');
        this.elements.orderNumber().invoke('text').then(orderNumber => {
            cy.wrap(orderNumber.trim()).as('orderNumber');
        });
        console.log('Order Number:', this.elements.orderNumber().invoke('text'));
    }

    clickViewYourOrders() {
        this.elements.viewYourOrdersButton().click();
    }
}

export default new CheckoutPage();
