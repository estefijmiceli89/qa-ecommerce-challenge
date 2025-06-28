import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pages/ProfilePage";

Given("I visit the user profile page", () => {
  HomePage.visit();
});

Then("I should see my profile picture", () => {
  HomePage.verifyProfilePicture();
});

Then("I should see my username {string}", (name) => {
  HomePage.verifyUserName(name);
});

Then("I should see my email {string}", (email) => {
  HomePage.verifyUserEmail(email);
});

When("I click on the {string} button", (buttonName) => {
  if (buttonName.trim() === "Edit Profile".trim()) {
    HomePage.clickEditProfileButton();
  } else if (buttonName.trim() === "Back to Homepage".trim()) {
    HomePage.clickBackToHomeButton();
  }
});

And("I change my username to {string}", (newName) => {
  HomePage.changeUserName(newName);
});

And("I change my email to {string}", (newEmail) => {
  HomePage.changeUserEmail(newEmail);
});

Then("I should be redirected to the homepage", () => {
  HomePage.redirectToHomePage();
});

When("I see the title {string} as a section", (title) => {
  HomePage.seeSectionTitle(title);
});

Then("I should see a panel with no orders", () => {
  HomePage.seeEmptyOrderList();
});
