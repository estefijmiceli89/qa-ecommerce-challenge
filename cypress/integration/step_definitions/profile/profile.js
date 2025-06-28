import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductCatalogPage from '../../../pages/productCatalog/productCatalog';
import ProfilePage from '../../../pages/profile/profile';

Given('I visit the product catalog main page', () => {
  ProductCatalogPage.visit();
});

When('I click the profile button', () => {
  ProductCatalogPage.clickProfileButton();
});

Then('the profile page should be displayed', () => {
  ProfilePage.verifyProfilePage();
});

Then('the personal information section should show the correct name and email', () => {
  ProfilePage.verifyPersonalInformation();
});

Then('the edit profile button should be visible', () => {
  ProfilePage.verifyEditProfileButton();
});

Then('the order history section should be visible', () => {
  ProfilePage.verifyOrderHistorySection();
});

Then('the empty orders message should be visible', () => {
  ProfilePage.verifyNoOrdersMessage();
});

Then('the start shopping button should be visible', () => {
  ProfilePage.verifyStartShoppingButton();
});

When('I click the start shopping button', () => {
  ProfilePage.clickStartShoppingButton();
});

Then('I should be redirected to the product catalog main page', () => {
  ProductCatalogPage.verifyMainContent();
});

When('I click the edit profile button', () => {
  ProfilePage.clickEditProfileButton();
});

When('I update the profile name to {string} and email to {string}', (name, email) => {
  ProfilePage.updateProfileNameAndEmail(name, email);
});

When('I save the profile changes', () => {
  ProfilePage.saveProfileChanges();
});

Then('the profile name should be {string}', (name) => {
  ProfilePage.verifyProfileName(name);
});

Then('the profile email should be {string}', (email) => {
  ProfilePage.verifyProfileEmail(email);
});

Then('the name validation message should be {string}', (msg) => {
  ProfilePage.verifyNameValidationMessage(msg);
});

Then('the email validation message should be {string}', (msg) => {
  ProfilePage.verifyEmailValidationMessage(msg);
});

When('I click the back to home button', () => {
  ProfilePage.clickBackToHomeButton();
});
