describe('Custom commands', () => {

    //Click on a link using label from a href:
    it('Handling link', () => {

        cy.visit('https://demo.nopcommerce.com/');

        //Direct command:
        /*cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();
        cy.get("div[class='product-name']>h1").should('have.text', 'Apple MacBook Pro 13-inch');*/

        //Custom command:
        cy.clickLink('Apple MacBook Pro 13-inch');
        cy.get("div[class='product-name']>h1").should('have.text', 'Apple MacBook Pro 13-inch');

    })

    it('Overwriting existing command {`contains`}', () => {
        cy.visit('https://demo.nopcommerce.com/');

        // Define and use the `clickLink` custom command correctly
        cy.clickLink('a', 'APPLE MACBOOK PRO 13-inch').click();

        // Assert the presence of the text using `contains`
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');
    });


    it.only('Login command', () => {
        cy.visit('https://demo.nopcommerce.com/');

        cy.clickLink('Log in'); //custom command 
        cy.wait(3000);
        cy.loginApp('testing@gmail.com', 'test123'); //custom command 
        cy.get('.ico-account').should('have.text', 'My account');

    })


})