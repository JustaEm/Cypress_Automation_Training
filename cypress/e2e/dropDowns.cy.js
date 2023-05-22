describe('Handle dropdowns', () => {

    // it.skip('Dropdown with select', () => {

    //     cy.visit('https://www.zoho.com/commerce/free-demo.html')
    //     cy.get('#zcf_address_country')
    //         .select('Italy')
    //         .should('have.value', 'Italy') //If you want to verify that "Italy" is selected, you would use .should('have.value', 'Italy') because you're checking the selected value.


    // it.skip('Dropdown without select', () => {

    //     cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

    //     cy.get('#select2-billing_country-container').click()
    //     cy.get('.select2-search__field').type('Italy').type('{enter}')

    //     cy.get('#select2-billing_country-container')
    //         .should('have.text', 'Italy') //If you want to verify that "Italy" is displayed as the visible option in the dropdown, you would use .should('have.text', 'Italy') because you're checking the visible text of the selected option.

    // })

    // it('Auto suggest dropdown', () => {

    //     cy.visit('https://www.wikipedia.org/')

    //     cy.get('#searchInput').type('Poland')
    //     cy.get('.suggestion-title').contains('–United States relations').click()



    it('Dynamic dropdown', () => {

        cy.visit('https://www.google.com/')
        cy.get('#L2AGLb > .QS5gu').click()

        cy.wait(3000)

        cy.get('textarea.gLFyf').type('cypress automation tool', { force: true });

        cy.get('div.wM6W7d>span').should('have.length', 12)

        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if ($el.text() == 'cypress automation tool') {
                cy.wrap($el).click()
            }
        })
        cy.get('.gLFyf').should('have.value', 'cypress automation tool')

    })

})
