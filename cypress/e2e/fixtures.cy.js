describe('My TestSuite', () => {

    //Direct access:
    /*it.skip('Fixtures demo test', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.fixture('orangehrm.json').then((dataFromFixtureFile) => {

            cy.get("input[placeholder='Username']").type(dataFromFixtureFile.username);
            cy.get("input[placeholder='Password']").type(dataFromFixtureFile.password);
            cy.get("button[type='submit']").click();
            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
                .should('have.text', dataFromFixtureFile.expected);

        })*/

    //Access through Hook - for multiple `it` blocks:
    let userData;
    before(() => {
        cy.fixture('orangehrm.json').then((dataFromFixtureFile) => {
            userData = dataFromFixtureFile;
        })

    })

    it.only('FixturesDemoTest2', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get("input[placeholder='Username']").type(userData.username);
        cy.get("input[placeholder='Password']").type(userData.password);
        cy.get("button[type='submit']").click();
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
            .should('have.text', userData.expected);
    })

})


