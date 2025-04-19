export class HomePage {
  private articleList: string = ".products-grid article";
  private sortByPriceBtn: string = '[data-testid="sort-price"]';
  private viewProductBtn: string = ".product-card .view-details-button";
  private backButton: string = ".back-button";

  public verifyProductGridIsAList() {
    cy.get(this.articleList).children().should("have.length.greaterThan", 0);
  }

  public verifyProductSortingByPrice() {
    const sortDefaultText: string = "Sort by price";
    cy.get(this.sortByPriceBtn).should("be.visible");
    cy.get(this.sortByPriceBtn).should(
      "have.attr",
      "aria-label",
      `${sortDefaultText} descending`
    );
    cy.get(this.articleList[0]).should("have.attr", "data-product-id", `2`);
    cy.get(this.sortByPriceBtn).click();
    cy.get(this.sortByPriceBtn).should(
      "have.attr",
      "aria-label",
      `${sortDefaultText} ascending`
    );
    cy.get(this.articleList[0]).should("have.attr", "data-product-id", `1`);
  }

  public verifyProductRedirection() {
    const productNumber: Array<string> = ["2", "3", "1"];
    for (let i = 0; i < this.viewProductBtn.length; i++) {
      cy.get(this.viewProductBtn[i]).click();
      cy.url().should("contain", `/product/${productNumber[i]}`);
      cy.get(this.backButton).click();
    }
  }
}
