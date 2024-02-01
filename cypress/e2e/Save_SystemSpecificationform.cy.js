import login_page from "../PageObjectModle/login_page.js"
import home_page from "../PageObjectModle/home_page.js"
import new_validation_data from "../fixtures/new_validation_data.json"
import login_data from "../fixtures/login_data.json"
import system_specification from "../PageObjectModle/system_specification.js"
import common_forms_loc from "../PageObjectModle/common_forms_loc.js"
import Creat_Val from "../PageObjectModle/Creat_Val.js"
import { fi } from "faker/lib/locales.js"
const faker = require("faker");
const login_page_obj = new login_page()
const home_page_obj = new home_page()
const sys_spec_obj = new system_specification()
const com_loc_obj = new common_forms_loc()
describe('Initiate the validation', () => {
  beforeEach(() => {
    // Load environment variables before each test
    cy.loadEnvVariables();
  });

  it('save the System specification form', () => {
    const apiUrl = Cypress.env('API_URL');
    cy.visit(apiUrl)
    cy.login_app();
    //open the side bar
    home_page_obj.arrow();
    home_page_obj.validation();
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
    // fiil the systene spec form
    cy.fixture('./sys_spec_data.json').then((sys_spec_data) => {
      sys_spec_obj.sys_spec_btn.click()
      sys_spec_obj.equip_class_btn.click()
      sys_spec_obj.location.type(sys_spec_data.location)
      sys_spec_obj.room.type(sys_spec_data.room)
      // click on select file 
      // Use cy.fixture() to load the PDF file
      cy.fixture('one.pdf').then((fileContent) => {
        // Use cy.get().attachFile() to upload the file
        com_loc_obj.select_file.attachFile({
          fileContent: fileContent,
          fileName: 'one.pdf',
          mimeType: 'application/pdf',
        });

        // Add assertions or perform further actions after uploading
      });
      // Add file comment 
      cy.fixture('sys_spec_data.json').then(fileData6 => {
        com_loc_obj.file_coment.type(fileData6.file_comment);
      })
      com_loc_obj.criteria_met_yes_btn.click()
      com_loc_obj.comments.type(sys_spec_data.comments)
      com_loc_obj.save_btn.click()
      com_loc_obj.success_msg.should('be.visible')
      cy.wait(5000);
      // after hitting on save button enter password
      cy.fixture('login_data.json').then(fileData4 => {
        sys_spec_obj.pass.type(fileData4.user_pass);
      })
      // gen the otp 
      sys_spec_obj.otp_btn.click();
      cy.wait(5000)
      cy.fixture('./sys_spec_data.json').then((sys_spec_data1) => {
        function sendJSONRequest(url) {
          return cy.request("GET", url);
        }
        // Initial request
        sendJSONRequest(sys_spec_data1.req_url).then((initialResponse) => {
          cy.log(initialResponse);

          // Perform additional actions or assertions based on the initial response

          // Refresh the JSON request page by sending another request
          sendJSONRequest(sys_spec_data1.req_url).then((refreshedResponse) => {
            cy.log(refreshedResponse);

            // Ensure there is at least one email in the response
            if (refreshedResponse.body.emails.length !== 0) {
              // Get the HTML content from the second JSON mail
              const htmlContent = refreshedResponse.body.emails[0].html;

              // Use Cypress commands to interact with the HTML
              cy.document().then((doc) => {
                // Create a temporary div element to parse the HTML
                const tempDiv = doc.createElement('div');
                tempDiv.innerHTML = htmlContent;

                // Use jQuery (Cypress includes jQuery) or native JavaScript to extract OTP
                const otpElement = tempDiv.querySelector('h2 span');
                const otp = otpElement ? otpElement.innerText : null;

                // Log the extracted OTP
                cy.log('Extracted OTP:', otp);

                // enter otp
                sys_spec_obj.otp.type(otp);
              });
            } else {
              // Handle the case when there are no emails in the response
              cy.log('No emails found in the response.');
            }
          });
          // enter the reason
          cy.fixture('./sys_spec_data.json').then((sys_spec_data2) => {
            sys_spec_obj.reason.type(sys_spec_data2.reason);
            // click on confirm button 
          })
          sys_spec_obj.confirm.click();
          // verify the green tick 
          sys_spec_obj.greentick.should('be.visible')
        });
      });
    })
  })
})