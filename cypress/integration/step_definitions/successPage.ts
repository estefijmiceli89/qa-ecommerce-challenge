import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../../pages/HomePage";
import { UIHelpers } from "../../helpers/ui/commonFunctions";
import { ProductPage } from "../../pages/ProductPage";
import { CartPage } from "../../pages/CartPage";
import { AddressPage } from "../../pages/AddressPage";
import { PaymentPage } from "../../pages/PaymentPage";
import { SuccessPage } from "../../pages/SuccessPage";
let homePage: HomePage;
homePage = new HomePage();
let productPage: ProductPage;
productPage = new ProductPage();
let cartPage: CartPage;
cartPage = new CartPage();
let addressPage: AddressPage;
addressPage = new AddressPage();
let paymentPage: PaymentPage;
paymentPage = new PaymentPage();
let successPage: SuccessPage;
successPage = new SuccessPage();
Given("I visit the home", () => {
  UIHelpers.visitHomePage();
});
Then("I should land in product page", () => {
  productPage.visitProductPage();
});
Then("I should be able to add a product to the cart", () => {
  productPage.addProductToCart();
});
Then("I should verify a product was added", () => {
  cartPage.verifyProductAdded();
});

Then("I should select a ramdon quantity", () => {
  cartPage.selectRamdonQuantity();
});

Then("I proceed to checkout", () => {
  cartPage.proceedToCheckOut();
});

Then("I fill out address information", () => {
  addressPage.fillAddressInformation();
});

Then("I should be able to continue to payment page", () => {
  addressPage.hitContinueToPayment();
});

Then("I fill out payment information", () => {
  paymentPage.fillPaymentInformation();
});

Then("I should be able to place an order", () => {
  paymentPage.hitPlaceOrder();
});
Then("I should verify success order placement", () => {
  successPage.verifySuccessMessage();
});
Then("I should be able to place an order", () => {
  successPage.viewOrdersBtn();
});
