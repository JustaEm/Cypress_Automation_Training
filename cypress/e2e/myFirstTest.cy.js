describe('My First Test', () => {
    it('test1 - verify title: positive', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq', 'OrangeHRM')
    })
    it('test2 - verify title: negative', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq', 'OrangeHRM123')

    })

})