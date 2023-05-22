//If you want to open the link in the same window, not a new tab, you need to remove its attribute 
//by invoking function: .invoke('removeAttr', 'nameOftheAttribute').click();

describe('Handle tab - approach1', (() => {

    it('Approach1', () => {

        cy.visit('https://the-internet.herokuapp.com/windows') //parent tab
        //cy.get("a[href='/windows/new']").click() or you can use the child element:
        cy.get('.example>a').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows')

        cy.go('back'); //will go back to 'parent' tab


    })

    it.only('Approach2', () => {

        cy.visit('https://the-internet.herokuapp.com/windows') //parent tab
        //cy.get("a[href='/windows/new']").click() or you can use the child element:
        cy.get('.example>a').then((element) => {
            const elementUrl = element.prop('href');
            cy.visit(elementUrl);
        })
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows')

        cy.wait(5000);

        cy.go('back'); //will go back to 'parent' tab


    })





}))