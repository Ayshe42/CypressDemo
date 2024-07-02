/// <reference types="cypress" />

describe('element get consept ', () => {
   

    it('element get testing', () => {

     cy.visit('https://www.freshworks.com')
      cy.contains('platform').click()

      cy.get('div.align-center.mb-lg h1:nth-of-type(2)')
      .should('be.visible')
      .and('contain','Our platform')
      .and('have.length',1)
    })
})