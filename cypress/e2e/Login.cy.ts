import { repeat } from '../utils/dados';

beforeEach(() => {
    cy.visit(Cypress.env('host'));
})

Cypress._.times(repeat, () => {

    describe('Login Test', () => {

        it.only('Login Correto', async () => {
            cy.allure().severity('blocker')
 
            cy.login(Cypress.env('userName'), Cypress.env('passwordName'));

            cy.on('window:alert',(t)=>{
                //assertions
                expect(t).to.contains('Usuário');
             })
        });
        
        it('Usuário Correto e Senha Incorreta', async () => {
            cy.allure().severity('blocker')
 
            cy.login(Cypress.env('userName'), "Senha123");

        });

        it('Usuário Incorreto e Senha Correta', async () => {
            cy.allure().severity('blocker')
 
            cy.login("Usuário", Cypress.env('passwordName'));

        });
    });

});
