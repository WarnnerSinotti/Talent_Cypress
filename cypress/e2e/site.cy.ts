import { CookiesPage } from '../page/Cookies';
import { HomePage } from '../page/Home';

const homePage = new HomePage();
const cookiesPage = new CookiesPage();

beforeEach(() => {
    cy.visit(Cypress.env('host'));
})

describe('Site', () => {

    it('Verificando Header', async () => {
        cy.allure().severity('blocker')
        //cy.wait(3000);
        //adicionar frame
        if (cookiesPage.Privacidade_Aceitar().should('be.visible')) {
            cookiesPage.Privacidade_Aceitar().click();
        }
        homePage.Header_Planos().click();
    });
});