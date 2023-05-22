import 'cypress-file-upload';
describe('File upload', () => {

    it.skip('Single file upload', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('Test1.pdf');
        cy.get('#file-submit').click();
        cy.wait(4000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');

    })

    it.skip('File upload - Rename', () => { //Renaming a file at the time of uploading

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({ filePath: 'Test1.pdf', fileName: 'NewTest1.pdf' });
        cy.get('#file-submit').click();
        cy.wait(4000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');

    })

    it.skip('File upload - Drag & Drop', () => { //Renaming a file at the time of uploading

        cy.visit('https://the-internet.herokuapp.com/upload');

        cy.get('#drag-drop-upload').attachFile('Test1.pdf', { subjectType: 'drag-n-drop' });
        //from Css Selector:
        //div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span
        //or use Cypress inspector tool for shorter name:
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('Test1.pdf');

    })

    it.skip('Multiple files upload', () => { //Renaming a file at the time of uploading

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

        cy.get('#filesToUpload').attachFile(['Test1.pdf', 'Test2.pdf']);
        cy.wait(5000);
        cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:');
        cy.get('#fileList > :nth-child(1)').should('contain.text', 'Test1.pdf');
        cy.get('#fileList > :nth-child(2)').should('contain.text', 'Test2.pdf');

    })

    it.only('Shadow Dom - File upload', () => {

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
        cy.get('.smart-browse-input', { includeShadowDom: true }).attachFile('Test1.pdf');
        cy.wait(5000);

        cy.get('.smart-item-name', { includeShadowDom: true }).contains('Test1.pdf');


    })



})