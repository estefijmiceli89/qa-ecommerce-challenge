import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductCatalogPage from '../../../pages/productCatalog/productCatalog';

Given('I visit the product catalog main page', () => {
  ProductCatalogPage.visit();
});

When('I search for {string}', (productName) => {
  ProductCatalogPage.searchProduct(productName);
});

Then('only the product card with title {string} should be visible', (title) => {
  ProductCatalogPage.verifyOnlyProductVisibleByTitle(title);
});

Then('a message {string} should be visible', (message) => {
  ProductCatalogPage.verifyNoProductsFoundMessage(message);
});
