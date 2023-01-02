import { CookiesPage } from '../page/Cookies';
import { HomePage } from '../page/Home';
import { BannerPage } from '../page/Banner';
import { repeat } from '../utils/dados';

const homePage = new HomePage();
const cookiesPage = new CookiesPage();
const bannerPage = new BannerPage();

beforeEach(() => {
    cy.visit(Cypress.env('host'));
})

Cypress._.times(repeat, () => {

    describe('Login Correto', () => {

        it('Verificando Header', async () => {
            cy.allure().severity('blocker')
            cy.wait(3000);

            //cy.xpath('//*[@id="mat-input-0"]').type(Cypress.env('userName'))
            //cy.xpath('//*[@id="mat-input-1"]').type(Cypress.env('passwordName'))
            cy.login(Cypress.env('userName'), Cypress.env('passwordName'));

            

        });
    });
});
