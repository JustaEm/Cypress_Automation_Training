import 'cypress-iframe'
require('@4tw/cypress-drag-drop') //plugin needed for Drag&Drop method

describe('Mouse operations', () => {

    it.skip('Mouseover', () => {
        cy.visit('https://demo.opencart.com/');
        //cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']")
        //or use cypress inspector tool to make it shorter:
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
            .should('be.not.visible');

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
            .should('be.visible');

    })


    it.skip('Right-click', () => {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');

        //Approach1
        /*cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu'); //this will trigger right-click
        cy.get('.context-menu-icon-copy > span').should('be.visible');//this element is taken from the Cypress inspector
        
        */
        //Approach2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');

    })

    it.skip('Double-click', () => {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');
        cy.frameLoaded('#iframeResult'); //loads the frame

        //Approach1 - trigger method
        /*cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
        cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!');
        cy.get('#accept-choices').click();*/

        //Approach2 - dblclick()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!');
        cy.get('#accept-choices').click();

    })

    it.skip('Drag and drop using plugin', () => {

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
        //cy.get('#box6').drag('#box106').should('be.visible') // if this method won't help use: {force: true}
        cy.get('#box6').drag('#box106', { force: true }); //use this {force:true} if cypress throws an error, the element is hidden
        //.drag --> is the plugin installed earlier

    })

    it.only('Scroll Down Page', () => {

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html');
        cy.get(':nth-child(2) > tbody > :nth-child(43) > :nth-child(1) > img')
            .scrollIntoView({ duration: 3000 });
        cy.get(':nth-child(2) > tbody > :nth-child(43) > :nth-child(1) > img').should('be.visible');
        cy.get(':nth-child(1) > tbody > :nth-child(10) > :nth-child(1) > img').scrollIntoView({ duration: 3000 });
        cy.get(':nth-child(1) > tbody > :nth-child(10) > :nth-child(1) > img').should('be.visible');
        cy.get('#footer').scrollIntoView({ duration: 3000 }).should('be.visible');

    })

    it.skip('Scroll My Books Page', () => {

        cy.visit('https://www.goodreads.com/review/list/165337788?ref=nav_mybooks');
        cy.get('#cover_review_5552334376').scrollIntoView({ duration: 3000 });
        cy.get('#cover_review_5552334376').should('be.visible');
        cy.get('.modal__content > .modal__close > .gr-iconButton > img').click();


    })

})