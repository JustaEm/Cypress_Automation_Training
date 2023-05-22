import Login from "../PageObjects/Login_PageObject2.js"

describe('pom', () => {
    // General approach
    it.skip('LoginTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');

    })

    //Using Page Object class
    it.skip('LoginTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        const ln = new Login(); //by creating a new object, you can call in those methods
        ln.setUserName('Admin');
        ln.setPassword('admin123');
        ln.clickSubmit();
        ln.verifyLogin();


    })

    //Using Page Object class with fixtures
    it.only('LoginTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.fixture('orangehrm.json').then((dataFromfixture) => {
            const ln = new Login(); //by creating a new object, you can call in those methods
            ln.setUserName(dataFromfixture.username);
            ln.setPassword(dataFromfixture.password);
            ln.clickSubmit();
            ln.verifyLogin();

        })

    })

})