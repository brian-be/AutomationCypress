// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (options = {}) => {
    cy.visit('https://betestautomation.azurewebsites.net/login')
    // Fill out the login form
    const today = new Date();
    const time = today.getHours() + "_" + today.getMinutes();
    const email = time + 'brian@test.com'
    const password = 'Password'

    cy.get('#Email').type(email)
    cy.get('#Password').type(password)
    cy.get('.offset-md-4 > .btn').click()
})
