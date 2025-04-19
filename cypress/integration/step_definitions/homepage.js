import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user navigates to the home page', () => {
  cy.visit('/');
});

Then('the page should display at least one product', () => {
  cy.get('.product-card').should('have.length.at.least', 1);
});

Then('each product should show a name, price, and description', () => {
  cy.get('.product-card').each(($el) => {
    cy.wrap($el).find('.product-info *').should('have.length.at.least', 2);
  });
});

Given('the user is on the home page', () => {
  cy.visit('/');
});

When('the user types {string} in the search bar', (query) => {
  cy.get('input[type="text"]').type(query);
});

Then('only products with {string} in the name or description should be visible', (query) => {
  cy.get('.product-card').each(($el) => {
    cy.wrap($el)
      .invoke('text')
      .then((text) => {
        expect(text.toLowerCase()).to.include(query.toLowerCase());
      });
  });
});

When('the user clicks the "Sort by Price ↑" button', () => {
  cy.contains('Sort by Price ↑').click();
});

Then('products should be ordered from lowest to highest price', () => {
  const getPrice = (text) => parseFloat(text.replace('$', ''));

  cy.wait(1000); 

  cy.get('.product-card').then(($cards) => {
    const prices = Array.from($cards).map(card => {
      const text = card.innerText;
      const match = text.match(/\$\d+\.\d{2}/);
      return match ? getPrice(match[0]) : null;
    }).filter(Boolean);

    const sorted = [...prices].sort((a, b) => a - b);
    console.log('✅ Orden esperado:', sorted);
    console.log('📦 Orden actual:', prices);

    expect(prices).to.deep.equal(sorted);
  });
});

When('the user clicks "View Details" on a product', () => {
  cy.get('.product-card').first().contains('View Details').click();
});

Then('the user should be redirected to that product’s detail page', () => {
  cy.url().should('include', '/product/');
});
