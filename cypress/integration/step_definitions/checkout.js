import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';

Given('I have products in my cart', () => {
    HomePage.visit();
    ProductPage.goToDetailsProduct();
    ProductPage.selectQuantity('2');
    ProductPage.addToCart();

});

When('I proceed to checkout, I should be on the checkout information page', () => {
    ProductPage.clickOnCheckout();
    CheckoutPage.initiateCheckoutProcess();
});

Then('I fill in the shipping information with valid data', () => {
    CheckoutPage.fillShippingInfo();
});

And('I enter valid payment details to place my order', () => {
    CheckoutPage.fillPaymentInfo();
});

Then('I should see the order confirmation page', () => {

});