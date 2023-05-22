describe('Handle table', (() => {
    beforeEach('Login', () => {

        cy.visit('https://demo.opencart.com/admin/');
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get("button[type='submit']").click();
        cy.get('.btn-close').click();

        //Customers --> customers
        cy.get('#menu-customer>a').click(); //Customers (main menu)
        cy.get('#menu-customer>ul>li:first-child').click();

    })

    it.skip('Check number rows and colums', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', '7');
    })

    it.skip('Check cell data from specific row and column', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
            .contains('princytrainings4@gmail.com');

    })


    it.skip('Read all the rows and columns data in the 1st page of the table', () => {

        //cy.get(".table.table-bordered.table-hover>tbody>tr"); --> you can write both ways
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows) => { //you need to read each every row & column data (iterate)
                cy.wrap($row).within(() => {
                    cy.get('td').each(($col, index, $cols) => {//$col represents the current table cell element
                        cy.log($col.text());

                    })
                })
            })

    })


    it.only('Pagination', () => {

        //find total number of pages
        /*let totalPages;
        cy.get('.col-sm-6.text-end').then((element) => {
            const myText = element.text(); //should be this text: `Showing 1 to 10 of 12715 (1272 Pages)`
            totalPages = myText.substring(myText.indexOf("(") + 1, myText.indexOf("Pages") - 1);
            cy.log('Total number of pages in a table: ' + totalPages);

        })*/
        let totalPages = 5;
        for (let p = 1; p <= totalPages; p++)
            if (totalPages > 1) {
                cy.log('Active page is: ' + p);

                cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click();//+p+ syntax for parametrising dynamic values
                cy.wait(3000);

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each(($row, index, $rows) => {
                        cy.wrap($row).within(() => {
                            cy.get('td:nth-child(3)').then((element) => {
                                cy.log(element.text()); //will capture Email address
                            })

                        })

                    })
            }

    })

})
)
