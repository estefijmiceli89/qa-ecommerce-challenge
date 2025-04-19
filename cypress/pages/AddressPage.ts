import { faker } from '@faker-js/faker';

export class AddressPage {
  private firstName: string = "#firstName";
  private email: string = "#email";
  private phone: string = '#phone';
  private street: string = '#street';
  private city: string = '#city';
  private state: string = '#state';
  private zipCode: string = '#zipCode';
  private country: string = '#country';
  private continueToPaymentBtn: string = '.add-to-cart-button';


  public fillAddressInformation() {
    cy.get(this.firstName).type(faker.name.firstName());
    cy.get(this.email).type(faker.internet.email());
    const phone = `${faker.string.numeric(3)}-${faker.string.numeric(3)}-${faker.string.numeric(4)}`;
    cy.get(this.phone).type(phone);
    cy.get(this.street).type(faker.location.streetAddress());
    cy.get(this.city).type(faker.location.city());
    cy.get(this.state).type(faker.location.state());
    cy.get(this.zipCode).type(faker.location.zipCode());
    cy.get(this.country).type(faker.location.country());
  }

  public hitContinueToPayment() {

    cy.get(this.continueToPaymentBtn).click();
  }
}