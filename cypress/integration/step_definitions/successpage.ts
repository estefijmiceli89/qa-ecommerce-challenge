import { Given,Then, When } from '@badeball/cypress-cucumber-preprocessor';
import SuccessPage from '../../pages/SuccessPage';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';
import AddressPage from '../../pages/AddressPage';
import PaymentPage from '../../pages/PaymentPage';

Given('I have completed a purchase successfully', () => {
  HomePage.visit();
  HomePage.clickFirstViewDetails();
  ProductPage.selectQuantity('4');
  ProductPage.clickAddToCart();

  CartPage.clickProceedToCheckout();

  AddressPage.fillValidData();
  AddressPage.submit();

  PaymentPage.fillValidData();
  PaymentPage.clickPlaceOrder();
});

Then('I should see a success icon', () => {
  SuccessPage.elements.successIcon().should('be.visible');
});

Then('I should see a confirmation message', () => {
  SuccessPage.elements.title().should('be.visible');
});

Then('I should see the order number', () => {
  SuccessPage.elements.orderNumber().should('exist');
});

Then('I should see the order follow-up message', () => {
  SuccessPage.elements.confirmationMessage().should('contain.text', "We've received your order");
});

When('I click the Continue Shopping button on the success page', () => {
  SuccessPage.clickContinueShopping();
});


When('I click the View Your Orders button on the success page', () => {
  SuccessPage.clickViewOrders();
});