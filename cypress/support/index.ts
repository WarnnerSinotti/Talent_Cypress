
declare namespace Cypress {


  interface Chainable {
    login(user:string, password: string): Chainable<Element>;
    getUserInfo();
  }
}



/* Cypress.Commands.add('getBySel', (selector: string, ...args: any[]): Cypress.CanReturnChainable => {
  return cy.get(`[data-test=${selector}]`, ...args)
}) */