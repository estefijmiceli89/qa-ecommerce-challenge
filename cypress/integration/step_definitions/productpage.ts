import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import ProductPage from '../../pages/ProductPage';

Then('I should see all product details', () => {
  ProductPage.verifyAllProductDetails();
});

Then('I should be able to see the quantity dropdown', () => {
  ProductPage.verifyQuantitySelector();
});

When('I choose the quantity {string}', (qty: string) => {
  ProductPage.selectQuantity(qty);
});

Then(
  'the dropdown should reflect the selected quantity {string}',
  (qty: string) => {
    ProductPage.verifySelectedQuantity(qty);
  }
);

When('I click on the "Add to Cart" action', () => {
  ProductPage.clickAddToCart();
});

Then(
  'the cart should include the product with quantity {string}',
  (qty: string) => {
    ProductPage.verifyProductInCart(qty);
  }
);

When('I use the "Back to Products" navigation', () => {
  ProductPage.clickBackToProducts();
});

Then('I should be redirected to the homepage', () => {
  cy.url().should('eq', Cypress.config().baseUrl + '');
});
