export abstract class UIHelpers {
  public static async visitHomePage(): Promise<void> {
    cy.visit("/");
  }
}
