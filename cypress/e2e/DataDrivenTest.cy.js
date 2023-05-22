describe('My testsuite', () => {

    it('DataDrivenTest', () => {

        cy.fixture('orangehrm2.json').then((dataFromFixtureFile) => {

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

            dataFromFixtureFile.forEach((userData) => {
                cy.get("input[placeholder='Username']").type(userData.username);
                cy.get("input[placeholder='Password']").type(userData.password);
                cy.get("button[type='submit']").click();

                if (userData.username == 'Admin' && userData.password == 'admin123') {
                    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
                        .should('have.text', userData.expected);

                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();


                } else {
                    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text')
                        .should('have.text', userData.expected);
                }
            });
        });
    });
});
