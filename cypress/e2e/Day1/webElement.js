 //by ID
 cy.get('#inputField-123')
 cy.get('#yellow')

 //by className
 cy.get('.input-full-width')
 cy.get('.radio')

 //By attribute name
 cy.get('[placeholder]')
describe('Web Elements',()=>{

 //by tag name and attribute with value
 cy.get('input [placeholder=Email]')
 cy.get('input [type="radio"]')

 // by two different attributes
 cy.get('[placeholder=Email][type="email"]')
 //cy.get('input[type="checkbox"][value="checkbox1"]')
 // by two different attributes or more 
 cy.get('[placeholder=Email][type="email"]#inputField-123#yellow')

 cy.contains('Blue').click()

//https://qavbox.github.io/demo/signup/

})
