import login_page from "../PageObjectModle/login_page"
import 'cypress-file-upload';
/*
import addContext from "mochawesome/addContext";
module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
};
Cypress.on("test:after:run", (test, runnable) => {  
	if (test.state === "failed") {    
		//const screenshot =`assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`.replace('  ', ' ');    
		const screenshot='assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png'.replace('  ', ' ');
    addContext({ test }, screenshot);  
	}
});*/
/*const mochawesome = require('mochawesome');
const { addContext } = require('mochawesome/addContext');
import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    // Capture a screenshot and get its data URL
    cy.screenshot().then((screenshotDataUrl) => {
      // Add the screenshot to the Mochawesome context
      addContext({ test }, screenshotDataUrl, 'image/png');
    });
  }
});

Cypress.on('task', {
  screenshot: (data) => {
    return Cypress.Screenshot.defaults()(data);
  },
});

after(() => {
  const screenshotsPath = `cypress/screenshots/${Cypress.spec.name}`;
  mochawesome.create().end();
});*/
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const login_page_obj = new login_page()
//const home_page_obj = new home_page()

Cypress.Commands.add('login_app', () => {
    cy.fixture('./login_data.json').then((login_data) => {
        login_page_obj.user_name.type(login_data.username)
        login_page_obj.user_password.type(login_data.user_pass)
        login_page_obj.login_btn.click()
    })
})
// for env variable
import 'cypress-dotenv';

Cypress.Commands.add('loadEnvVariables', () => {
  cy.log('Loading environment variables from .env file');
cy.exec('echo $CYPRESS_API_URL').then(({ stdout }) => {
    Cypress.env('API_URL', stdout);
  });
  // Add more variables as needed
});
/// <reference types=”@shelex/cypress-allure-plugin” />

/*Cypress.Commands.add('clear_session_storage', () => {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
  })*/