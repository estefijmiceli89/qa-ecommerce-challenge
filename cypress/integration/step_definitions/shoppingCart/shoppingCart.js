import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import ProductCatalogPage from '../../../pages/productCatalog/productCatalog';
import ProductPage from '../../../pages/productPage/productPage';
import ShoppingCartPage from '../../../pages/shoppingCart/shoppingCart';

let products = [];

Before(() => {
  cy.fixture('products').then((data) => {
    products = data;
  });
});

Given('I visit the product catalog main page', () => {
  ProductCatalogPage.visit();
});

When('I click the view details button for product card {int}', (cardNumber) => {
  ProductCatalogPage.clickDetailsButton(cardNumber);
});

When('I add the product to the cart', () => {
  ProductPage.clickAddToCartButton();
});

When('I click the continue shopping button', () => {
  ShoppingCartPage.clickContinueShoppingButton();
});

Then('the shopping cart page should be displayed', () => {
  ShoppingCartPage.verifyShoppingCartPage();
});

Then('the continue shopping button should be visible', () => {
  ShoppingCartPage.verifyContinueShoppingButton();
});

Then('the cart should show the product with correct title and price', () => {
  ShoppingCartPage.verifyProductInCart(1, {
    title: products[0].title,
    price: products[0].price
  });
});

Then('the cart should show the product with correct title and price for product {int}', (productNumber) => {
  const productList = [
    { title: products[0].title, price: products[0].price },
    { title: products[1].title, price: products[1].price },
  ];
  ShoppingCartPage.verifyProductInCart(productNumber, productList[productNumber - 1]);
});

Then('the quantity input should be visible and set to 1', () => {
  ShoppingCartPage.verifyQuantityInput(1, 1);
});

When('I change the quantity to {int}', (qty) => {
  ShoppingCartPage.changeQuantity(1, qty);
});

When('I change the quantity of product {int} to {int}', (productNumber, qty) => {
  ShoppingCartPage.changeQuantity(productNumber, qty);
});

Then('the subtotal should match the product price times quantity', () => {
  ShoppingCartPage.verifySubtotalMatches();
});

Then('the subtotal should match the sum of all product prices', () => {
  ShoppingCartPage.verifySubtotalForAllProducts();
});

Then('the subtotal should update accordingly', () => {
  ShoppingCartPage.verifySubtotalForAllProducts();
});

Then('the product should be removed from the cart', () => {
  ShoppingCartPage.verifyProductRemoved(1);
});

Then('the product should be removed from the cart for product {int}', (productNumber) => {
  ShoppingCartPage.verifyProductRemoved(productNumber);
});

Then('the empty cart message should be visible', () => {
  ShoppingCartPage.verifyEmptyCartMessage();
});

When('I remove the product using the remove button', () => {
  ShoppingCartPage.removeProduct(1);
});

When('I remove the product using the remove button for product {int}', (productNumber) => {
  ShoppingCartPage.removeProduct(productNumber);
});
