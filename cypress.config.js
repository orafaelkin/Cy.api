const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'op5rbr',
  e2e: {
    baseUrl: "https://fakerestapi.azurewebsites.net/api/v1/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


