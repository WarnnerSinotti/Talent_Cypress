//const example = require('../fixtures/example.json')

import { repeat } from "../../utils/dados";

var Repeat = repeat;

Cypress._.times( Repeat.api, () =>
describe('Typeform API tests', () => {
  it.only('retrieves my user information', () => {
    cy.getUserInfo().should(({status, body}) => {
      const { email, password, delayExpire } = body
      console.log(body)
      
      
      expect(email).to.eq(Cypress.env('userEmail'))
      expect(password).to.eq(Cypress.env('userPassword'))
      expect(delayExpire).to.eq(false)
      console.log(body)
      expect(status).to.eq(200)
    })
  })
  
/*   it('retrieves form responses', () => {
    const formId = Cypress.env('formId')
    cy.getFormResponses(formId).should(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.total_items).to.eq(body.items.length)
    })
  })
  
  context('Cleanup before start', () => {
    beforeEach(() => cy.formsCleanup())

    it('creates a sample form', () => {
      cy.createSampleForm().should(({ status, body }) => {
        const { fields, title, type } = body
        expect(status).to.eq(201)
        cy.fixture('example.json').as('example').then((example) =>{
          expect(fields.length).to.eq(example.fields.length)
          expect(title).to.eq(example.title)
          expect(type).to.eq(example.type)
        })
      })
    })
  }) */
})
)