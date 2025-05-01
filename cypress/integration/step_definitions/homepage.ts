import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/HomePage';

Given('I am on the homepage', () => {
  HomePage.visit();
});

Then('I should see the main content', () => {
  HomePage.verifyMainContent();
});

Then('I should see the full list of products', () => {
  HomePage.verifyProductsGrid();
});

Then('I should see products with complete information', () => {
  HomePage.verifyEachProductHasBasicData();
});

When('I click on the View Details button of a product', () => {
  HomePage.clickFirstViewDetails();
});

Then('I should be redirected to the product page for that item', () => {
  cy.url().should('include', '/product/');
});

When('I sort products by price ascending', () => {
  HomePage.sortByPriceAsc();
});

When('I sort products by price descending', () => {
  HomePage.sortByPriceDesc();
});

Then('the products should be displayed in ascending order of price', () => {
  HomePage.verifyPriceOrderAscending();
});

Then('the products should be displayed in descending order of price', () => {
  HomePage.verifyPriceOrderDescending();
});

When('I search for {string}', (term: string) => {
  HomePage.search(term);
});

Then(
  'only products containing {string} in the name should be shown',
  (term: string) => {
    HomePage.verifySearchResults(term);
  }
);

When('I click the Cart button', () => {
  HomePage.clickCart();
});

Then('I should be redirected to the cart page', () => {
  cy.url().should('include', '/cart');
});

When('I click the Profile button', () => {
  HomePage.clickProfile();
});

Then('I should be redirected to the profile page', () => {
  cy.url().should('include', '/profile');
});
