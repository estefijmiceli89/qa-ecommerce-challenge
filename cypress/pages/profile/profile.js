class ProfilePage {
    elements = {
        backToHomeButton: () => cy.get('[data-testid="back-to-home"]'),
        profileHeader: () => cy.get('.profile-header'),
        personalInformationSection: () => cy.get('.profile-card'),
        personalInfoTitle: () => cy.get('.profile-card').contains('Personal Information'),
        profileNameLabel: () => cy.get('[data-testid="profile-name"]'),
        profileEmailLabel: () => cy.get('[data-testid="profile-email"]'),
        editProfileButton: () => cy.get('[data-testid="edit-profile"]'),
        profileNameInput: () => cy.get('[data-testid="profile-name-input"]'),
        profileEmailInput: () => cy.get('[data-testid="profile-email-input"]'),
        saveProfileButton: () => cy.get('[data-testid="save-profile"]'),
        orderHistorySection: () => cy.get('.orders-card'),
        orderHistoryTitle: () => cy.get('.orders-card').contains('Order History'),
        startShoppingButton: () => cy.get('[data-testid="start-shopping"]'),
        noOrdersMessage: () => cy.contains("You haven't placed any orders yet."),
        nameValidationMessage: () => cy.contains("Name must be at least 3 characters and contain only letters"),
        emailValidationMessage: () => cy.contains("Please enter a valid email address"),
        orderIdSpan: () => cy.get('[data-testid="orders-list"]').find('[class="value"]'),
        orderDateSpan: () => cy.get('[data-testid^="order-date-"]'),
        orderTotalSpan: () => cy.get('[class="order-total"]').find('[class="value"]'),
        orderProducts: (productId = 1) => cy.get(`[data-testid="order-${cy.get('@orderNumber')}-product-${productId}"]`),
    }

    getOrderProductElement(productId, callback) {
        cy.get('@orderNumber').then(orderNumber => {
            const normalized = orderNumber.replace(/^#/, '').trim();
            const selector = `[data-testid="order-${normalized}-product-${productId}"]`;
            if (callback) {
                callback(cy.get(selector));
            } else {
                return cy.get(selector);
            }
        });
    }

    orderProductName(productId) {
    return cy.get('@orderNumber').then(orderNumber => {
            const normalized = orderNumber.replace(/^#/, '').trim();
            return cy.get(`[data-testid="order-${normalized}-product-${productId}"]`).find('[class="product-name"]');
        });
    }
    orderProductPrice(productId) {
        return cy.get('@orderNumber').then(orderNumber => {
            const normalized = orderNumber.replace(/^#/, '').trim();
            return cy.get(`[data-testid="order-${normalized}-product-${productId}"]`).find('[class="product-price"]');
        });
    }
    orderProductQuantity(productId) {
        return cy.get('@orderNumber').then(orderNumber => {
            const normalized = orderNumber.replace(/^#/, '').trim();
            return cy.get(`[data-testid="order-${normalized}-product-${productId}"]`).find('[class="product-quantity"]');
        });
    }

    verifyProfilePage() {
        cy.url().should('include', '/profile');
        this.elements.profileHeader().should('be.visible');
    }

    verifyPersonalInformation() {
        this.elements.personalInformationSection().should('be.visible');
        this.elements.personalInfoTitle().should('be.visible');
        this.elements.profileNameLabel().should('be.visible').and('not.be.empty');
        this.elements.profileEmailLabel().should('be.visible').and('not.be.empty');
    }

    verifyEditProfileButton() {
        this.elements.editProfileButton().should('be.visible');
    }

    verifyOrderHistorySection() {
        this.elements.orderHistorySection().should('be.visible');
        this.elements.orderHistoryTitle().should('be.visible');
    }

    verifyNoOrdersMessage() {
        this.elements.noOrdersMessage().should('be.visible');
    }

    verifyStartShoppingButton() {
        this.elements.startShoppingButton().should('be.visible');
    }

    clickEditProfileButton() {
        this.elements.editProfileButton().click();
    }

    updateProfileNameAndEmail(name, email) {
        this.elements.profileNameInput().clear().type(name);
        this.elements.profileEmailInput().clear().type(email);
    }

    saveProfileChanges() {
        this.elements.saveProfileButton().click();
    }

    verifyProfileName(name) {
        this.elements.profileNameLabel().should('have.text', name);
    }

    verifyProfileEmail(email) {
        this.elements.profileEmailLabel().should('have.text', email);
    }

    verifyNameValidationMessage(msg) {
        this.elements.nameValidationMessage().should('be.visible').and('have.text', msg);
    }

    verifyEmailValidationMessage(msg) {
        this.elements.emailValidationMessage().should('be.visible').and('have.text', msg);
    }

    clickStartShoppingButton() {
        this.elements.startShoppingButton().click();
    }

    clickBackToHomeButton() {
        this.elements.backToHomeButton().click();
    }

    getOrderProductElement(productId, callback) {
    cy.get('@orderNumber').then(orderNumber => {
        const normalized = orderNumber.replace(/^#/, '').trim();
        const selector = `[data-testid="order-${normalized}-product-${productId}"]`;
        if (callback) {
            callback(cy.get(selector));
        } else {
            return cy.get(selector);
        }
    });
}

    verifyOrderNumberMatchesSuccess() {
        cy.get('@orderNumber').then(orderNumber => {
            const normalized = orderNumber.replace(/^#/, '').trim();
            this.elements.orderIdSpan().first().invoke('text').then(text => {
                expect(text.replace(/^#/, '').trim()).to.eq(normalized);
            });
        });
    }

    verifyOrderDate() {
        this.elements.orderDateSpan().first().invoke('text').then(dateText => {
            const today = new Date();
            const mmddyyyy = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
            const yyyymmdd = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
            const longForm = today.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
            expect(dateText).to.satisfy(txt =>
                txt.includes(mmddyyyy) ||
                txt.includes(yyyymmdd) ||
                txt.includes(longForm)
            );
        });
    }

    verifyOrderTotalAmount() {
        this.elements.orderTotalSpan().first().should('not.be.empty');
    }

    verifyOrderItemQuantity() {
        cy.get('@orderQuantity').then(expectedQty => {
            this.orderProductQuantity(1).invoke('text').then(actualQty => {
                const qty = Number(actualQty.replace(/[^0-9]/g, ''));
                expect(qty).to.eq(expectedQty);
            });
        });
    }

    verifyOrderItemPrice() {
        cy.get('@orderPrice').then(expectedPrice => {
            this.orderProductPrice(1).invoke('text').then(actualPriceText => {
                const actualPrice = Number(actualPriceText.replace(/[^0-9.]/g, ''));
                expect(actualPrice).to.eq(expectedPrice);
            });
        });
    }
}

export default new ProfilePage();
