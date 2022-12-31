import { defineConfig } from "cypress";
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    "video": false, //Habilitar e Desabilitar para Gravar Video
    defaultCommandTimeout: 12000, //Tempo para aguardar o comando
    
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});