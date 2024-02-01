class system_specification {
    get sys_spec_btn () {
        return cy.get("[class='ant-card-body']").then((main_slider) => {
            cy.wrap(main_slider).contains('System Specifications')
        })
    }
    
    get equip_class_btn () {
        return cy.get('[data-testid="Radio-Group-equipmentClassification"] > :nth-child(1)')
    }

    get location () {
        return cy.get('[data-testid="Input-Field-location"]')
    }

    get room () {
        return cy.get('[data-testid="Input-Field-room"]')
    }

 get pass () {
        return cy.get('[placeholder="Enter Password"]')
    }
    get otp_btn () {
        return  cy.get('.ant-form-item-control-input-content > .ant-btn > span')
       
    }
    get otp () {
        return  cy.get('[data-testid="Input-Field-pinCodeEntered"]')
       
    }
    get reason () {
        return   cy.get('[data-testid="Input-Field-signingReason"]')
       
    }
    get confirm () {
        return  cy.get('.ant-form-item-control-input-content > .ant-space > [style=""] > .ant-btn > span')
       
    }
    get greentick () {
        return   cy.get(':nth-child(1) > .gutter-row > :nth-child(1) > :nth-child(3) > .ant-col > .ant-space-align-end > :nth-child(1) > .ant-space > [style=""] > .anticon > svg > [d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z"]')
   
    }
   
}
export default system_specification