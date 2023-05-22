describe('CssLocators', () => {
    it('csslocators', () => {

        cy.visit('http://automationpractice.com/cgi-sys/suspendedpage.cgi/')

        //cy.get('#search_query_top').type('T-Shirts') --> ID tag
        //cy.get('.search_query_top').type('T-Shirts') --> class tag

        //cy.get("[name='search_query']").type('T-Shirts') // --> attribute tag

        cy.get("input.search_query[name ='search_query']").type("T-Shirts") //--> tag class and tag attribute

        cy.get("[name='submit_search']").click() //--> tag attribute

        cy.get(".lighter").contains("T-Shirts") // Assertion


    })

})