/// <reference types="cypress-xpath" />

const API_URL = Cypress.env('API_SERVER') //Url de Acesso
const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}` //Adicionar Token de Acesso

Cypress.Commands.add('login', (user, password) => { 
  cy.wait(500)
  cy.get('#mat-input-0').type(user)
  cy.wait(500)
  cy.get('#mat-input-1').type(password)
  cy.get('#delayExpire').click()
  cy.contains('button', 'Entrar').click()
 })

//Comando de Pegar informação do request
Cypress.Commands.add('getUserInfo', () => {
  cy.request({
    method: 'GET', //Metodo
    url: `${API_URL}me`, //Adicionar a URL
    headers: { authorization } //Autorização de acesso
  })
})
// ***********************************************
// This example commands.ts shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --Access: 
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

