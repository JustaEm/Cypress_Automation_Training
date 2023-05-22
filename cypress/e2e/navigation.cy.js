// go()

describe('My suite', () => {
    it('Navigation test', () => {
        cy.visit('https://demo.opencart.com/');
        cy.title().should('eq', 'Your Store');
        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('have.text', 'Cameras');

        cy.go('back'); // will go back to `home` page
        cy.title().should('eq', 'Your Store');

        cy.go('forward');
        cy.get("div[id='content'] h2").should('have.text', 'Cameras');

        cy.go(-1); //will take you back to `home` page as well
        cy.title().should('eq', 'Your Store');

        cy.go(1); //`cameras` page
        cy.get("div[id='content'] h2").should('have.text', 'Cameras');

        cy.reload();

    })
})