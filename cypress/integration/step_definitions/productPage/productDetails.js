import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductCatalogPage from '../../../pages/productCatalog/productCatalog';
import ProductPage from '../../../pages/productPage/productPage';

Given('I visit the product catalog main page', () => {
  ProductCatalogPage.visit();
});

When('I click the view details button for product card {int}', (cardNumber) => {
  ProductCatalogPage.clickDetailsButton(cardNumber);
});

Then('the product page should display:', (dataTable) => {
  const data = dataTable.rowsHash();
  ProductPage.verifyProductDetails({
    title: data.title,
    price: data.price,
    // @BUG: The element returns "Description" in the description, this is due to a bad data-id reference (not in the right element).
    description: data.description
  });
});

Then('the quantity dropdown should be visible', () => {
  ProductPage.verifyQuantityDropdownVisible();
});

Then('the add to cart button should be visible', () => {
  ProductPage.verifyAddToCartButtonVisible();
});

Then('the back to products button should be visible', () => {
  ProductPage.verifyBackToProductsButtonVisible();
});

Then('clicking the quantity dropdown should show 1 to 5 options', () => {
  ProductPage.verifyQuantityDropdownOptions([1, 2, 3, 4, 5]);
});

Then('clicking the back to products button should return to the catalog', () => {
  ProductPage.elements.backToProductsButton().click();
  ProductCatalogPage.verifyMainContent();
});
