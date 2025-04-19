import { faker } from "@faker-js/faker";

export class PaymentPage {
  private cardHolder: string = "#cardHolder";
  private cardNumber: string = "#cardNumber";
  private expiryDate: string = "#expiryDate";
  private cvv: string = "#cvv";
  private placeOrderBtn: string = ".add-to-cart-button";

  public fillPaymentInformation() {
    const futureDate = faker.date.future();
    const expiryMonth = String(futureDate.getMonth() + 1).padStart(2, "0");
    const expiryYear = futureDate.getFullYear().toString().slice(-2);

    const paymentInfo = {
      cardHolder: faker.person.fullName(),
      cardNumber: faker.finance.creditCardNumber("####-####-####-####"),
      expiryDate: `${expiryMonth}/${expiryYear}`,
      cvv: faker.string.numeric(3),
    };

    cy.get(this.cardHolder).type(paymentInfo.cardHolder);
    cy.get(this.cardNumber).type(paymentInfo.cardNumber);
    cy.get(this.expiryDate).type(paymentInfo.expiryDate);
    cy.get(this.cvv).type(paymentInfo.cvv);
  }

  public hitPlaceOrder() {
    cy.get(this.placeOrderBtn).click();
  }
}
