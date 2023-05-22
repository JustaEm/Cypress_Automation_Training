describe('Alerts', () => {
    // beforeEach(() => {
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    // });
    //1. JavaScript alert: some text and OK button

    it('JS alert', () => {

        //cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsAlert()']").click();

        //to confirm window alert you need to fire event on window:
        cy.on('window:alert', (alertWindow) => {

            expect(alertWindow).to.contains('I am a JS Alert')

        })

        //alert window automatically closed by cypress
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    //2. JavaScript confirmation alert: It will have some text with OK and Cancel buttons

    it('JS confirmation alert - OK', () => {

        //cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click()

        //to confirm window alert you need to fire event on window:
        cy.on('window:confirm', (alertWindow) => {

            expect(alertWindow).to.contains('I am a JS Confirm');

        })

        //alert window automatically closed by cypress by clicking OK button
        cy.get('#result').should('have.text', 'You clicked: Ok')

    })


    //2. JavaScript confirmation alert: It will have some text with OK and Cancel buttons

    it('JS confirmation alert - Cancel', () => {

        //cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click()

        //to confirm window alert you need to fire event on window:
        cy.on('window:confirm', (alertWindow) => {

            expect(alertWindow).to.contains('I am a JS Confirm');

        })

        cy.on('window:confirm', () => false); // cypress closes the window by clicking Cancel button
        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })

    //3. JavaScript prompt alert: popup with text field to insert and click OK or Cancel

    it('JS prompt alert - OK', () => {

        //first fire an event to insertu text before popup shows up (the order a bit weird)
        cy.window().then((window) => {
            cy.stub(window, 'prompt').returns('Welcome, Justyna')
        })


        cy.get("button[onclick='jsPrompt()']").click()
        cy.on('window:prompt', () => false)

        cy.get('#result').should('have.text', 'You entered: Welcome, Justyna');

    })

    //4. Authenticated alert
    it.only('Authenticated', () => {

        //Approach1
        /* cy.visit('https://the-internet.herokuapp.com/basic_auth', {
             auth:
             {
                 username: "admin",
                 password: "admin"
             }
         });
         //When text for assertions is too long, then use .should('have.contain', 'short text), to validate it 
         cy.get("div[class='example'] p").should('have.contain', 'Congratulations!')*/

        //Approach2 : inject the credentials in the URL
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations!')

    })

})