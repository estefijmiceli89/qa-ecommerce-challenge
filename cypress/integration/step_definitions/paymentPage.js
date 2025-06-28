import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pages/HomePage";
import ProductDetailsPage from "../../pages/ProductDetailsPage";
import ShoppingCartPage from "../../pages/ShoppingCartPage";
import PaymentPage from "../../pages/PaymentPage";
import CheckoutPage from "../../pages/CheckoutPage";
import userData from "../../fixtures/data.json";
import selectRandomProduct from "../../support/utils/selectRandomProduct";

Given("I am on the payment page after successful checkout", () => {
  HomePage.visit();
  HomePage.clickViewDetailsButton(selectRandomProduct());
  ProductDetailsPage.clickAddToCartButton();
  ShoppingCartPage.proceedToCheckout();
  CheckoutPage.filloutCheckoutForm(
    userData.firstName,
    userData.email,
    userData.phone,
    userData.address.street,
    userData.address.city,
    userData.address.state,
    userData.address.zipCode,
    userData.country
  );
  CheckoutPage.clickContinueToPaymentButton("Continue to Payment");
});

When("I enter an {string} in the {string} field", (invalidValue, field) => {
  switch (field) {
    case "Card Holder Name":
      PaymentPage.filloutPaymentForm(
        invalidValue,
        userData.paymentDetails.cardNumber,
        userData.paymentDetails.expirationDate,
        userData.paymentDetails.cvv
      );
    case "Card Number":
      PaymentPage.filloutPaymentForm(
        userData.paymentDetails.cardHolderName,
        invalidValue,
        userData.paymentDetails.expirationDate,
        userData.paymentDetails.cvv
      );
      break;
    case "Expiry Date":
      PaymentPage.filloutPaymentForm(
        userData.paymentDetails.cardHolderName,
        userData.paymentDetails.cardNumber,
        invalidValue,
        userData.paymentDetails.cvv
      );
      break;
    case "CVV":
      PaymentPage.filloutPaymentForm(
        userData.paymentDetails.cardHolderName,
        userData.paymentDetails.cardNumber,
        userData.paymentDetails.expirationDate,
        invalidValue
      );
      break;
    default:
      throw new Error(`Unknown field: ${field}`);
  }
});

Then(
  "I should see an error message {string} for the {string} field",
  (errorMessage, field) => {
    PaymentPage.verifyErrorMessage(field, errorMessage);
  }
);

When("I enter valid payment details", () => {
  PaymentPage.filloutPaymentForm(
    userData.paymentDetails.cardHolderName,
    userData.paymentDetails.cardNumber,
    userData.paymentDetails.expirationDate,
    userData.paymentDetails.cvv
  );
});

Then("I should be redirected to the successful page", () => {
  PaymentPage.verifySuccessfulPayment();
});
