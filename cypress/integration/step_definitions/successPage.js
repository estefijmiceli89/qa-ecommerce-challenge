import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import SuccessPage from "../../pages/SuccessPage";
import HomePage from "../../pages/HomePage";
import ProductDetailsPage from "../../pages/ProductDetailsPage";
import ShoppingCartPage from "../../pages/ShoppingCartPage";
import CheckoutPage from "../../pages/CheckoutPage";
import PaymentPage from "../../pages/PaymentPage";
import userData from "../../fixtures/data.json";
import selectRandomProduct from "../../support/utils/selectRandomProduct";

Given("I am on the order success page", () => {
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
  PaymentPage.filloutPaymentForm(
    userData.paymentDetails.cardHolderName,
    userData.paymentDetails.cardNumber,
    userData.paymentDetails.expirationDate,
    userData.paymentDetails.cvv
  );

  //  CheckoutPage.clickOnCheckoutButton("Place Order");
  cy.url().should("include", "/success");
});

When("I see the success message", () => {
  SuccessPage.verifySuccessMessage("Thank You for Your Purchase!");
});

Then("I should see the order number", () => {
  SuccessPage.verifyOrderNumber();
});

Then(
  "I should see a message indicating the order has been placed successfully",
  () => {
    SuccessPage.verifyOrderConfirmationMessage();
  }
);

Then(
  "I can see my order details clicking on the {string} button",
  (buttonName) => {
    SuccessPage.clickViewOrdersButton(buttonName);
  }
);
Then("I should be redirected to the order details page", () => {
  cy.url().should("include", "/order-details");
});
