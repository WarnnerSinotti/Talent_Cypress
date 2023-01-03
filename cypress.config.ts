import { defineConfig } from "cypress";
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({

  e2e: {
    //CONFIG - ALLURE
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },

    projectId: "6aa5kq", //Id https://cloud.cypress.io/

    //Configuration - Screen
    //viewportWidth: 500,
    //viewportHeight: 500,

    //Configuration - Cypress
    defaultCommandTimeout: 12000, //Tempo para aguardar o comando

    //Video
    video: false, //Habilitar e Desabilitar para Gravar Video
    videosFolder: 'cypress/videos',
    videoUploadOnPasses: false, //Upload dos videos após testes em cloud.cypress

    //Screenshot
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',

    trashAssetsBeforeRuns: false, //Descarta os screenshoots e Videos existentes antes dos novos testes

    //Downloads
    downloadsFolder: 'cypress/downloads', //Local salva os arquivos baixados pelos testes

  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});