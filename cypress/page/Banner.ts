
//Inside your google-search.page.ts file. This is pageobject file.
/// <reference types="cypress-xpath" />

export class BannerPage {
    Banner_Home(){
        return cy.get('.sgpb-popup-close-button-2') //Banner Home Site
    }

}