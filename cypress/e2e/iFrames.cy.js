import 'cypress-iframe' //needed to use cypress iframe plugin

describe('Handling Frames', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/iframe');
    })

    it('approach1', () => {

        //cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        iframe.clear().type('Welcome {ctrl+a}');
        cy.get("[aria-label='Bold']").click()

    })


    it('approach2 - using custom command', () => {

        //cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getIframe('#mce_0_ifr').clear().type('Welcome {ctrl+a}');
        cy.get("[aria-label='Bold']").click()

    })

    it('approach3 - using iframe plugin', () => {

        //cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr'); // this will load the frame
        cy.iframe('#mce_0_ifr').clear().type('Welcome {ctrl+a}');//iframe plugin
        cy.get("[aria-label='Bold']").click()


    })

})