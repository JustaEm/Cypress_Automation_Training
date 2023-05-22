describe("Assertions demo", () => {

    it("Implicit assertions", () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //1 way of assertions:

        /*cy.url().should('include', 'orangehrmlive.com')
            .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .should('contain', 'orangehrm')*/

        //2nd way of assertions:

        cy.url().should('include', 'orangehrmlive.com')
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'orangehrm')
            .and('not.contain', 'orangehrm123')

        cy.title().should('include', 'Orange')
            .and('eq', 'OrangeHRM')
            .and('contain', 'HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
            .and('exist')

        //cy.xpath("//a").should('have.length', 5) //--> this will return all the links (5) available on the webpage

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should('have.value', 'Admin')

    })

    it("Explicit assertions", () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = 'Alex Popoescu';

        cy.get(".oxd-userdropdown-name").then((userPlaceholder) => {
            let actualUsername = userPlaceholder.text()

            //BDD style assertions
            expect(actualUsername).to.equal(expName)
            // expect(actualUsername).to.not.equal(expName)

            //TDD style assertions
            assert.equal(actualUsername, expName)
            //assert.notEqual(actualUsername, expName)



        })

    })
})