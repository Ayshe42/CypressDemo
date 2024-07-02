/// <reference types="cypress" />
describe("Dynamic loading page", function () {
    before(function () {
        cy.visit("https://the-internet.herokuapp.com/")
    });

    it('should display Hello World', function () {
        cy.get("[href=\"/dynamic_loading/1\"]").click();
        cy.get("#start > button").click();
        cy.wait(5000)
        cy.get("#finish > h4")
            .should("be.visible")
            .should("have.text", "Hello World!");
    });
});