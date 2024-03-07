export function validateName(name){
    cy.get('#nav-link-accountList-nav-line-1').should('contain',`Hello, ${name}`)
}

export function changeLanguageAndValidate(lng,welcomeText) {
    cy.get('#icp-nav-flyout').click()
    cy.get('span[dir="ltr"]').contains(lng).eq(0).click()
    cy.get('#icp-save-button').click()
    cy.get('#icp-nav-flyout').children().should('contain.text',lng)
    cy.get('#nav-link-accountList-nav-line-1').should('contain.text',welcomeText)
}
