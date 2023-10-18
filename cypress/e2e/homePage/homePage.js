export function validateName(name){
    cy.get('[id="nav-link-accountList-nav-line-1"]').should('contain',`Hello, ${name}`)
}