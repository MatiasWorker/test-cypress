/// <reference types="cypress" />

describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:4173");
    cy.get("button").click();
  });
});
