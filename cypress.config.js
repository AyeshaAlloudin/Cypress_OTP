const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa-qualityagents.azureedge.net/',
    video: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 20000,
    retries: 0,
    reporter: 'cypress-mochawesome-reporter',// for html reports
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
