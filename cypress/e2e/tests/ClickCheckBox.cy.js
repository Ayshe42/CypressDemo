
   /// <reference types="cypress" />
   context('Click checkbox', ()=>{

        it('Click enabled checkbox on the page and verify if it is enabled', ()=>{
            cy.visit('https://example.cypress.io/');
            cy.wait(2000)
            
           // const check = cy.get(':nth-child(3) > ul > :nth-child(9) > a')
           const check = cy.get('.home-list > li> a[href="/commands/actions"]')
           check.click();
           cy.wait(1000)
           cy.get('input[type="checkbox"][value="checkbox1"]').check('checkbox1')//check accepts values 
           cy.get('input[type="checkbox"][value="checkbox1"]').should('be.checked')
           cy.get('input[type="checkbox"][value="checkbox3"]').check('checkbox3')//check accepts values 
           cy.get('input[type="checkbox"][value="checkbox3"]').should('be.checked')
           cy.get('div[class="checkbox disabled"]>label>input[type="checkbox"][value="checkbox2"]').should('be.disabled')
           
        });
    });
    


