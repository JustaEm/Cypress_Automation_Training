describe('My suite', () => {

    it('Capture screenshots and videos', () => {

        cy.visit('https://demo.opencart.com/');
        /*cy.screenshot('homepage');
        cy.wait(5000);
        cy.get("img[title='Your Store']").screenshot('logo'); //to screenshot an element on a page, like logo etc.
        */
        //Automatically capture screenshot & video on failure (only when you execute via CLI/terminal: `npx cypress run --spec cypress/e2e/screenshotsAndVideos.cy.js` {in headless mode})
        cy.get("li:nth-child(7) a:nth-child(1)").click(); //cameras page
        cy.get("div[id='content'] h2").should('have.text', 'Tablets');


    })


})