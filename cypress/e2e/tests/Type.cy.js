/// <reference types="cypress" />
context('Type your email', ()=>{

    it('Type your email in input field and veryfy unenabled type field', ()=>{
        cy.visit('https://example.cypress.io/');
        cy.wait(2000)
       cy.contains('a', 'type').should('have.attr', 'href', '/commands/actions').click()
       const emailField = cy.get('input[type="email"]')
       emailField.type('some@email.com')
       emailField.should('have.value', 'some@email.com')
       const textArea = cy.get('textarea[class="form-control action-disabled"]')
       textArea.should('be.disabled')

           })
})