import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import ProductCatalogPage from '../../../pages/productCatalog/productCatalog';

let cards = [];

Before(() => {
  cy.fixture('products').then((data) => {
    cards = data;
  });
});

Given('I visit the product catalog main page', () => {
  ProductCatalogPage.visit();
});

Then('the page title should be visible', () => {
  ProductCatalogPage.verifyTitle();
});

Then('the main content should be visible', () => {
  ProductCatalogPage.verifyMainContent();
});

Then('the products grid should be visible', () => {
  ProductCatalogPage.verifyProductsGrid();
});

Then('the profile button should be visible', () => {
  ProductCatalogPage.verifyProfileButtton();
});

Then('the cart button should be visible', () => {
  ProductCatalogPage.verifyCartButton();
});

Then('the search input should be visible', () => {
  ProductCatalogPage.verifySearchInput();
});

Then('the sort button should be visible', () => {
  ProductCatalogPage.verifySortButton();
});

Then('there should be {int} product cards displayed', (count) => {
  ProductCatalogPage.verifyCardCount(count);
});

Then('product card {int} should have correct information', (cardNumber) => {
  ProductCatalogPage.verifyProductCard(cardNumber, cards[cardNumber - 1]);
});
