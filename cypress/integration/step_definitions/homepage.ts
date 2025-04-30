import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
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

Then('each product should have an image, name, price, description, and "View Details" button', () => {
    HomePage.verifyEachProductCard();
});

When('I click on the "View Details" button for a product', () => {
    HomePage.clickFirstProductDetails();
  });
  
  Then('I should be redirected to the product page', () => {
    cy.url().should('include', '/product/');
  });
  
  When('I click the "Sort by Price" button', () => {
    HomePage.clickSortByPrice();
  });
  
  Then('the products should be sorted in ascending price order', () => {
    HomePage.verifyProductsSortedByPrice();
  });
  
  When('I search for {string} into the search bar', (searchTerm: string) => {
    HomePage.searchForProduct(searchTerm);
  });
  
  Then('I should only see products that match {string}', (searchTerm: string) => {
    HomePage.verifySearchResults(searchTerm);
  });