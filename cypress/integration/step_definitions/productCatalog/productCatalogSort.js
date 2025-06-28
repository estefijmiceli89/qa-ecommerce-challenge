import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductCatalogPage from '../../../pages/productCatalog/productCatalog';

Given('I visit the product catalog main page', () => {
  ProductCatalogPage.visit();
});

When('I click the sort button', () => {
  ProductCatalogPage.clickSortButton();
});

Then('the products should be sorted by price ascending', () => {
  ProductCatalogPage.getProductPrices().then(prices => {
    // @BUG: The page is not sorting the prices correctly.
    expect(prices).to.deep.equal([...prices].sort((a, b) => a - b)); 
  });
});
