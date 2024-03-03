import {Navigate} from "../../fixtures/amazonUtils";

export function addNewAddress(country, name, phone, street, apartment) {
    Navigate.deliveryLocation.here()
    cy.wait(3000)
    cy.get('[role="navigation"]').contains('Manage address book').click()
    cy.get('[id="ya-myab-address-add-link"]').click()
    cy.get('[name="address-ui-widgets-DetectLocationButton"]').click().wait(6000)
    cy.get('#address-ui-widgets-enterAddressFullName').type(name).wait(1000)
    cy.get('[id="address-ui-widgets-enterAddressPhoneNumber"]').type(phone).wait(1000)
    cy.get('[id="address-ui-widgets-enterAddressLine2"]').type(apartment)
    cy.get('[id="address-ui-widgets-form-submit-button"]').click()
}

export function checkAddress(country, name, phone, street, apartment, postcode, city){
    cy.get('#address-ui-widgets-FullName').eq(0).should('contain.text',name)
    cy.get('[id="address-ui-widgets-AddressLineTwo"]').eq(0).should('contain.text',apartment)
    cy.get('[id="address-ui-widgets-PostalCodeCity"]').eq(0).should('contain.text',city)
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