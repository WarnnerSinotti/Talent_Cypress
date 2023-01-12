import { repeat } from '../utils/dados';

beforeEach(() => {
    cy.visit(Cypress.env('HOST'));
})

Cypress._.times(repeat.e2e, () => {

    describe('Login Test', () => {

        it.only('Login Correto', async () => {
            cy.allure().severity('blocker')
 
            cy.login(Cypress.env('userEmail'), Cypress.env('userPassword'));

            cy.on('window:alert',(t)=>{
                //assertions
                expect(t).to.contains('Usuário');
             })
        });
        
        it('Usuário Correto e Senha Incorreta', async () => {
            cy.allure().severity('blocker')
 
            cy.login(Cypress.env('userEmail'), "Senha123");

        });

        it('Usuário Incorreto e Senha Correta', async () => {
            cy.allure().severity('blocker')
 
            cy.login("Usuário", Cypress.env('userPassword'));

        });
    });

});
