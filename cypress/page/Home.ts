
//Inside your google-search.page.ts file. This is pageobject file.
/// <reference types="cypress-xpath" />

export class HomePage {
    Header_Planos(){
        return cy.get('#menu-item-19880')
    }
    /* Header_Planos(){
        return cy.xpath('//*[@id="menu-item-19880"]')
    } */
}