import { CookiesPage } from '../page/Cookies';
import { HomePage } from '../page/Home';
import { BannerPage } from '../page/Banner';
import { repeat } from '../utils/dados';

const homePage = new HomePage();
const cookiesPage = new CookiesPage();
const bannerPage = new BannerPage();

beforeEach(() => {
    cy.visit(Cypress.env('homePage'));
})

Cypress._.times(repeat, () => {

    describe('Site', () => {

        it('Verificando Header', async () => {
            cy.allure().severity('blocker')
            cy.wait(3000);

            if (cookiesPage.Privacidade_Aceitar().should('be.visible')) {
                cookiesPage.Privacidade_Aceitar().click();
            }

            if (bannerPage.Banner_Home().should('be.visible')) {
                bannerPage.Banner_Home().click() // Close button
            }

            homePage.Header_Planos().click();

        });
    });
});
