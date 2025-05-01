import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProfilePage from '../../pages/ProfilePage';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';
import AddressPage from '../../pages/AddressPage';
import PaymentPage from '../../pages/PaymentPage';

Given('I complete a successful purchase', () => {
  HomePage.visit();
  HomePage.clickFirstViewDetails();
  ProductPage.selectQuantity('4');
  ProductPage.clickAddToCart();

  CartPage.clickProceedToCheckout();

  AddressPage.fillValidData();
  AddressPage.submit();

  PaymentPage.fillValidData();
  PaymentPage.clickPlaceOrder();
});

Given('I navigate to the profile page', () => {
  cy.visit('/profile');
});

Given('I am on the profile page', () => {
  cy.visit('/profile');
});

Then('I should see my personal information', () => {
  ProfilePage.elements.nameText().should('exist');
  ProfilePage.elements.emailText().should('exist');
});

Then('I should see at least one past order', () => {
  ProfilePage.verifyOrderHistoryExists();
});

When('I save the profile changes', () => {
  ProfilePage.clickSave();
});

Then('I should see editable inputs for name and email', () => {
  ProfilePage.verifyInputsAreEditable();
});

Given('I am editing my profile', () => {
  cy.visit('/profile');
  ProfilePage.storeOriginalInfo();
  ProfilePage.clickEdit();
});

When('I update the name to {string}', (name: string) => {
  ProfilePage.updateName(name);
});

When('I update the email to {string}', (email: string) => {
  ProfilePage.updateEmail(email);
});

Then(
  'I should see {string} and {string} displayed',
  (name: string, email: string) => {
    ProfilePage.verifyDisplayedNameAndEmail(name, email);
  }
);

Then('I should see my original name and email as text', () => {
  ProfilePage.verifyOriginalInfoRestored();
});

When('I leave the name and email fields empty and blur', () => {
  ProfilePage.blurNameAndEmailFields();
});

Then('I should see the name error message', () => {
  ProfilePage.verifyNameErrorMessage();
});

Then('I should see the email error message', () => {
  ProfilePage.verifyEmailErrorMessage();
});

Then('I should see the empty order history message', () => {
  ProfilePage.elements.noOrderHistory().should('be.visible');
});
