
//Inside your google-search.page.ts file. This is pageobject file.
/// <reference types="cypress-xpath" />

export class CookiesPage {
    Privacidade_Aceitar(){
        return cy.get('.cky-notice-btn-wrapper > .cky-btn-accept')
    }

}