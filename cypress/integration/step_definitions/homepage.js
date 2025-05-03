import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';

Given('I am on the homepage', () => {
    HomePage.visit();
});

//Scenario: Homepage renderization

Then('I should see the main content', () => {
    HomePage.verifyMainContent();
});

And('I should see the full list of products', () => {
    HomePage.verifyProductsGrid();
});

//Scenario View all available products
Then('I should see at least {int} products displayed', (count) => {
    HomePage.verifyProductCount(count);
});

And('each product should contain:', () => {
    HomePage.verifyCardsContent();
});

//Scenario: Sort products by price (low to high)
When('I select "Price: Low to High" from the sort dropdown', () => {
    HomePage.verifySortingButton();
});
Then('products should be sorted by price in ascending order', () => {
    HomePage.sortByLowPrice();
});
And('the first product should be the cheapest', () => {
    HomePage.verifyFirstProductPrice('$79.99');

});

//Scenario: Search for an existing product
When('I type "Wireless" into the search bar', () => {
    HomePage.verifySearchBarAndTypeIn('Wireless');
});
Then('only products containing "Wireless" in their name should be displayed', () => {
    HomePage.verifyProductsGrid();
    HomePage.verifyProductName('Wireless');
});

//Scenario: Search for a non-existent product
When('I type "Car" into the search bar', () => {
    HomePage.verifySearchBarAndTypeIn('Car');
});
Then('I should see a "No products found matching your search" message', () => {
    HomePage.verifyNoFoundsMessage();
});
And('no product cards should be displayed', () => {
    HomePage.verifyNoProductExist();
});


