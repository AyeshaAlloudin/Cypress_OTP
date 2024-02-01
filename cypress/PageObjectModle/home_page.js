class home_page { 
    
    get new_validation_btn () {
        return cy.get('[data-testid="Page-Main-Header-Heading-Validation"] > .ant-btn > span')
    }

    get validation_name () {
        return cy.get('[data-testid="Input-Field-name"]')
    }

    get testing_protocol_btn () {
        return cy.get("[data-testid='Radio-Field-0']")
    }

    get equipment_type () {
        return cy.get('[data-testid="Select-Field-equipmentType"]')
    }

    get equipment_id () {
        return cy.get('[data-testid="Select-Field-equipmentId"]')
    }

    get initiate_qual_btn () {
        return cy.get('[name="validationFormSubmit"]')
    }

    forms_opening_btn (form_id) {
        cy.get('[data-row-key="'+form_id+'"]').click()
    }
    arrow () {
        cy.get('.ant-layout-sider-trigger').click()
    }
   validation () {
    cy.contains('Validations').click()
    }
        get condition (){
            return  cy.get('.ant-notification-notice-description')
          }
  
}
export default home_page