export class ProductPage {
  private productNameLabel: string = ".product-name";
  private productPrice: string = ".product-price";
  private productDescription: string = ".product-description";
  private quantitySelection: string = '[data-testid="quantity-selector"]';
  private addProductToCartBtn: string = ".add-to-cart-button";
  private productIds: Array<string> = ["1", "2", "3"];

  public visitProductPage() {
    const randomIndex = Math.floor(Math.random() * this.productIds.length);
    cy.visit(`/${randomIndex}`).click();
  }

  public addProductToCart() {
    cy.get(this.addProductToCartBtn).click();
  }

  public verifyProductGeneralInformation() {
    cy.get(this.productNameLabel)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.not.be.empty;
      });
    cy.get(this.productPrice)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.not.be.empty;
      });
    cy.get(this.productDescription)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.not.be.empty;
      });
  }

  public verifyQuantitySelectionFunctionally() {
    cy.get(this.quantitySelection)
      .find("option")
      .then((options) => {
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomValue = options[randomIndex].value;
        cy.get(this.quantitySelection).select(randomValue);
        cy.log(`Selected quantity: ${randomValue}`);
      });
  }
}
