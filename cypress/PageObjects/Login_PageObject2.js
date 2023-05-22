class Login {


    txtUserName = "input[placeholder='Username']";
    textPassword = "input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    lblMsg = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

    setUserName(username) {
        cy.get(this.txtUserName).type(username);
    }

    setPassword(password) {
        cy.get(this.textPassword).type(password);
    }

    clickSubmit() {
        cy.get(this.btnSubmit).click();
    }

    verifyLogin() {
        cy.get(this.lblMsg).should('have.text', 'Dashboard');
    }
}

//Once the class is created, export it:

export default Login;