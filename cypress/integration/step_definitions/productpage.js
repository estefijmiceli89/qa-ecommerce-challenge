import { Given, Then, And, When } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';

Given('I am on the homepage', () => {
    HomePage.visit();
});
When('I click on "View Details" for a random product', () => {
    ProductPage.goToDetailsProduct();
});

//Scenario: View the selected product details and add multiples quantities to cart
Then('I should see the product specifications', () => {
    ProductPage.verifyproductDetails('Premium Leather Watch', '$149.99');
});
And('I should see a quantity picker', () => {
    ProductPage.verifyQuantityPicker();
});
And('I should see an "Add to Cart" button', () => {
    ProductPage.verifyAddToCartButton();
});

And('I select 5 units from it', () => {
    ProductPage.selectQuantity('5');
});
And('I click "Add to Cart"', () => {
    ProductPage.addToCart();
});

And('see my products in Cart', () => {
    CartPage.seeDetailsProduct();
});
