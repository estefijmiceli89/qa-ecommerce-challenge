import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductCatalogPage from '../../../pages/productCatalog/productCatalog';
import ProductPage from '../../../pages/productPage/productPage';
import ShoppingCartPage from '../../../pages/shoppingCart/shoppingCart';
import CheckoutPage from '../../../pages/checkout/checkout';
import ProfilePage from '../../../pages/profile/profile';

Given('I visit the product catalog main page', () => {
  ProductCatalogPage.visit();
});

When('I click the view details button for product card {int}', (cardNumber) => {
  ProductCatalogPage.clickDetailsButton(cardNumber);
});

When('I add the product to the cart', () => {
  ProductPage.clickAddToCartButton();
});

When('I proceed to checkout', () => {
  ShoppingCartPage.clickProceedToCheckoutButton();
});

Then('the checkout page should be displayed', () => {
  CheckoutPage.verifyCheckoutPage();
});

Then('the delivery form should be visible', () => {
  CheckoutPage.verifyDeliveryForm();
});

When('I fill the checkout form with valid data', () => {
  CheckoutPage.fillValidForm();
});

When('I continue to payment', () => {
  CheckoutPage.continueToPayment();
});

Then('the payment step should be started', () => {
  CheckoutPage.verifyPaymentStepStarted();
});

When('I fill the payment form with valid data', () => {
  CheckoutPage.fillValidPaymentForm();
});

When('I place the order', () => {
  CheckoutPage.placeOrder();
});

Then('the checkout success page should be displayed', () => {
  CheckoutPage.verifySuccessPage();
});

Then('the success purchase component should show the correct title, order number, description, continue shopping button, and view your orders button', () => {
  CheckoutPage.verifySuccessComponent();
});

When('I click the view your orders button', () => {
  CheckoutPage.clickViewYourOrders();
});

Then('the order details page should be displayed', () => {
  ProfilePage.verifyOrderHistorySection();
});

Then('the order number should match the one from the success page', () => {
  ProfilePage.verifyOrderNumberMatchesSuccess();
});

Then('the order date should be correct', () => {
  ProfilePage.verifyOrderDate();
});

Then('the order total amount should be correct', () => {
  ProfilePage.verifyOrderTotalAmount();
});

Then('the order item quantity should be correct', () => {
  ProfilePage.verifyOrderItemQuantity();
});

Then('the order item price should be correct', () => {
  ProfilePage.verifyOrderItemPrice();
});

When('I try to continue to payment with empty fields', () => {
  CheckoutPage.continueToPayment();
});

Then('all required field errors should be shown', () => {
  CheckoutPage.verifyRequiredFieldErrors();
});

When('I fill the checkout form with invalid data', () => {
  CheckoutPage.fillInvalidForm();
});

Then('all validation errors should be shown', () => {
  CheckoutPage.verifyAllValidationErrors();
});

When('I fill the payment form with invalid data', () => {
  CheckoutPage.fillInvalidPaymentForm();
});

Then('all payment validation errors should be shown', () => {
  CheckoutPage.verifyAllPaymentValidationErrors();
});
