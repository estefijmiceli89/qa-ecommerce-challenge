import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProfilePage from '../../pages/ProfilePage';

Given('I visit the profile page with a saved user', () => {
  localStorage.setItem('userProfile', JSON.stringify({
    name: 'John Doe',
    email: 'john.doe@example.com'
  }));
  ProfilePage.visit();
});

Given('I visit the profile page', () => {
  ProfilePage.visit();
});

Given('I have a saved order in local storage', () => {
  localStorage.setItem('orders', JSON.stringify([
    {
      orderNumber: 111222,
      date: new Date().toISOString(),
      total: 59.99,
      items: [
        { id: 1, name: 'Test Product', price: 59.99, quantity: 1, image: 'test.jpg' }
      ]
    }
  ]));
});

When('I click the Edit Profile button', () => {
  ProfilePage.elements.editButton().click();
});

When('I update my name to {string} and email to {string}', (name: string, email: string) => {
  ProfilePage.fillProfileForm(name, email);
});

When('I click Save Changes', () => {
  ProfilePage.saveChanges();
});

When('I click the Back to Home button', () => {
  ProfilePage.elements.backToHomeButton().click();
});

Then('I should see my name and email displayed', () => {
  ProfilePage.elements.nameText().should('contain', 'John Doe');
  ProfilePage.elements.emailText().should('contain', 'john.doe@example.com');
});

Then('I should see the Edit Profile button', () => {
  ProfilePage.elements.editButton().should('be.visible');
});

Then('I should see the updated profile information', () => {
  ProfilePage.elements.nameText().should('contain', 'Alice Smith');
  ProfilePage.elements.emailText().should('contain', 'alice@example.com');
});

Then('I should be redirected to the home page', () => {
  cy.location('pathname').should('eq', '/');
});

Then('I should see the order history', () => {
  ProfilePage.elements.ordersList().should('be.visible');
  ProfilePage.elements.firstOrder().should('exist');
});
