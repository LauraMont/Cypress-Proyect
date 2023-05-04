import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import {login} from '@pages/login.Page';
let baseUrl  = Cypress.env('baseUrl'); 
let endpoints = Cypress.env('endpoints'); 

context('Feature: login',()=>{
    Given('usuario visita la pagina de Contract',()=>{
        cy.visit(baseUrl)
        cy.url().should('include',endpoints.login)
        cy.wait(2000)
    })
    describe('TC1 Verificar Login con usuario registrado',()=>{
        When('Se ingresa username como {string} y password como {string} y se hacer click en Iniciar sesion',(username, password)=>{
            login.enterUsername(username)
            login.enterPassword(password)
			login.submitLogin()
        })
        Then('Se visualizara la pagina de proyectos',()=>{
            cy.url().should('include',endpoints.proyectos)
        })
    })
    describe('TC2 Verificar no poder iniciar sesion con usuario invalido',()=>{
        When('Ingresar username como {string} y password como {string} y se hacer click en Iniciar sesion',(username, password)=>{
            login.enterUsername(username)
            login.enterPassword(password)
			login.submitLogin()
        })
        Then('Se visualizá el mensaje de error : {string}',(errorMsj)=>{
            cy.contains(errorMsj).should('be.visible')
        })
    })
})


// Este código abajo es para que NO APAREZCA los XHR o Fetch en el Test Runner de Cypress, para que se vea limpio.
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}