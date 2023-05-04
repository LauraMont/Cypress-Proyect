class Login{

    // Agarrable de Cypress
    // Propiedades / Elementos:
    get = {
        usernameInput: ()=> cy.get('input[formcontrolname="usuario"]'),
        passwordInput: ()=> cy.get('[formcontrolname="password"]'),
        submitButton: ()=> cy.get('[type="submit"]'),
        forgotLink: ()=> cy.get('.forgot-password'),
    }

    // Accionable de Cypress
    // Functions / Methods:
    enterUsername(type){
        type && this.get.usernameInput().type(type)
    }
    enterPassword(type){
        type && this.get.passwordInput().type(type)
    }
    submitLogin(){
        this.get.submitButton().click()
    }
}

export const login = new Login; 