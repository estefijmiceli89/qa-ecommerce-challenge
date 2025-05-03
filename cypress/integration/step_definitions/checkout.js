import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

Given('I have products in my cart', () => {
    HomePage.visit();
    ProductPage.goToDetailsProduct();
    ProductPage.selectQuantity('2');
    ProductPage.addToCart();

});

// When('I fill in the shipping information with valid data', () => {
//     CheckoutPage.fillShippingInfo();
// });

// When('I enter valid payment details', () => {
//     CheckoutPage.fillPaymentInfo();
// });