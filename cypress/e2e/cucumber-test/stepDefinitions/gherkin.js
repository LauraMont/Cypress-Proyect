import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

context('Feature: Acount Login SwagLabs for example',()=>{
    Given('User visit SwagLabs page',()=>{
        cy.visit('https://www.saucedemo.com/')
    })
    describe('Cucumber | TC1 Verify the Login Correctly',()=>{
        When('The user enters username as {string} and passsword as {string}',(username, password)=>{
            cy.get('[data-test="username"]').type(username)
			cy.get('[data-test="password"]').type(password)
			
        })
        When('clicks on login button',()=>{
            cy.get('[data-test="login-button"]').click()
        })
        Then('it will enter to the home page',()=>{
            cy.url().should('include',"inventory")
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