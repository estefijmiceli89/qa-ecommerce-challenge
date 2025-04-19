import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../../pages/HomePage";
import { UIHelpers } from "../../helpers/ui/commonFunctions";
let homePage: HomePage;
homePage = new HomePage();
Given("I visit the home", () => {
  UIHelpers.visitHomePage();
});
Then("I should be verify product redirection", () => {
  homePage.verifyProductRedirection();
});
