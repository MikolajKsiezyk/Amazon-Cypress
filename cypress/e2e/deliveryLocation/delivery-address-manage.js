import {Navigate, pswd} from "../../fixtures/amazonUtils";

export function addNewAddressAndValidate(country, name, phone, street, apartment, postcode, city) {
    Navigate.deliveryLocation.here()
    cy.wait(3000)
    cy.get('[role="navigation"]').contains('Manage address book').click()
        .then((loginRequest)=> {
            if(loginRequest.find('#authportal-center-section').length) {
                cy.get('input#ap_password').type(pswd)
                cy.get('#signInSubmit').click()
            }
        })
    cy.get('[id="ya-myab-address-add-link"]').click()
    cy.get('#address-ui-widgets-countryCode').click()
    cy.get('body').wait(1000).type('Poland{enter}').wait(2000)
    cy.get('#address-ui-widgets-enterAddressFullName').type(name)
    cy.get('[id="address-ui-widgets-enterAddressPhoneNumber"]').type(phone)
    cy.get('#address-ui-widgets-enterAddressLine1').type(street)
    cy.get('[id="address-ui-widgets-enterAddressLine2"]').type(apartment)
    cy.get('#address-ui-widgets-enterAddressPostalCode').type(postcode).wait(1000)
    cy.get('.a-dropdown-prompt:contains("Choose city or suburb")').click()
    cy.get('.a-popover-inner').find(`.a-dropdown-link:contains("${city}")`).click()
    cy.get('[id="address-ui-widgets-form-submit-button"]').click()

    cy.get('#address-ui-widgets-FullName').eq(0).should('contain.text',name)
    cy.get('[id="address-ui-widgets-AddressLineTwo"]').eq(0).should('contain.text',apartment)
    cy.get('[id="address-ui-widgets-PostalCodeCity"]').eq(0).should('contain.text',`${postcode} ${city}`)
    cy.get('[id="address-ui-widgets-Country"]').eq(0).should('contain.text',country)
    cy.get('[id="address-ui-widgets-PhoneNumber"]').eq(0).should('contain.text',phone)
}

export function deleteAllAddresses(){
    Navigate.deliveryLocation.here()
    cy.wait(3000)
    cy.get('[role="navigation"]').contains('Manage address book').click()
    cy.get('body').then((addressBox =>{
        if(addressBox.find('.normal-desktop-address-tile').length){
            cy.get('.delete-link').eq(0).click()
            cy.get('[aria-labelledby="deleteAddressModal-0-submit-btn-announce"]').type('{enter}')
        }
    }))
}