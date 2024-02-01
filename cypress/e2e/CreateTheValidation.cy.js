import login_page from "../PageObjectModle/login_page.js"
import home_page from "../PageObjectModle/home_page.js"
import common_forms_loc from "../PageObjectModle/common_forms_loc.js"
const faker = require("faker");
const login_page_obj = new login_page()
const home_page_obj = new home_page()
const com_loc_obj = new common_forms_loc()
describe('Initiate the validation', () => {
  before(() => {
        // Load environment variables before each test
        cy.loadEnvVariables();
    });
    it('Initiate the validation successfully', () => {
         // Load environment variables before each test
         //cy.loadEnvVariables();
        const apiUrl = Cypress.env('API_URL');
        cy.visit(apiUrl)
        cy.login_app();
        //open the side bar
        home_page_obj.arrow();
        home_page_obj.validation();
     cy.contains('Validations').click();
        home_page_obj.new_validation_btn.click();
        // Create the unique name every time 
        var firstName = faker.internet.userName(); // Variable declaration
        home_page_obj.validation_name.type(firstName);
        console.log(firstName);
        home_page_obj.testing_protocol_btn.click()
        cy.fixture('new_validation_data.json').then(fileData2 => {
            home_page_obj.equipment_type.type(fileData2.ref_equip_type + "{enter}")
        })
        cy.fixture('new_validation_data.json').then(fileData3 => {
            home_page_obj.equipment_id.type(fileData3.equipment_id + "{enter}")
        })
        home_page_obj.initiate_qual_btn.click()
        //Apply assertions to verify the validation completion
        cy.fixture('new_validation_data.json').then(txt => {
        home_page_obj.condition.should('have.text', txt.Text)
        })
        console.log("Validation created successfully");
    })
})
