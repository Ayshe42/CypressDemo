
/// <reference types="cypress" />

class HomePage {

elements = {
   pagetitle : () => cy.get('[#content > h1]'),
   abTest : () => cy.get('[/abtest]'),
   addRemove : () => cy.get('[/add_remove_elements/]'),
   basicAuth : () => cy.get('[/basic_auth]')

}
clickAbTest(){
this.abTest.click();

}
clickaddRemove(){
    this.addRemove.click();
    
    }
clickbasicAuth(){
    this.basicAuth.click();
        
   } 
   
}


module.exports = new HomePage();