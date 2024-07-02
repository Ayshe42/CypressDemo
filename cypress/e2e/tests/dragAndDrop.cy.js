
/// <reference types="cypress" />

describe('Drag and drop feature', () => {

    it('Drag n drop using data transfer', () => {

        cy.visit('https://practice.cydeo.com/drag_and_drop')

        drag_and_drop()
    })
})

const dataTransfer = new DataTransfer();

function drag_and_drop() {
    cy.get('#column-a').should('be.visible').trigger('dragstart', { dataTransfer })
    cy.wait(500)

    cy.get('#column-b').should('be.visible').trigger('drop', { dataTransfer })
    cy.wait(500)

    cy.get('#column-a').trigger('dragend')
}
