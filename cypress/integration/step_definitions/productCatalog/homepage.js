import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductCatalogPage from '../../../pages/productCatalog/productCatalog';

Given('I am on the homepage', () => {
    ProductCatalogPage.visit();
});

Then('I should see the main content', () => {
    ProductCatalogPage.verifyMainContent();
});

Then('I should see the full list of products', () => {
    ProductCatalogPage.verifyProductsGrid();
});
