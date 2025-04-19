import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../../pages/HomePage";
import { UIHelpers } from "../../helpers/ui/commonFunctions";
import { ProductPage } from "../../pages/ProductPage";
let homePage: HomePage;
homePage = new HomePage();
let productPage: ProductPage;
productPage = new ProductPage();
Given("I visit the home", () => {
  UIHelpers.visitHomePage();
});
Then("I should land in product page", () => {
  productPage.visitProductPage();
});
Then(
  "I should be able to verify the existence of product general information",
  () => {
    productPage.verifyProductGeneralInformation();
  }
);
Then("I should be able to select a quantity", () => {
  productPage.verifyQuantitySelectionFunctionally();
});
