export function login(email = em,password = pswd){
    cy.visit("https://www.amazon.com")
    cy.get('[data-nav-ref="nav_ya_signin"]').click()
    cy.get('[id="ap_email"]').type(email)
    cy.get('.a-button-inner > [id="continue"]').click()
    cy.get('[id="ap_password"]').type(password)
    cy.get('[id="signInSubmit"]').click()
}

export const em = 'amazoncypress123@gmail.com';
export const pswd = 'ZAQ1@wsx';

export const Navigate = {
    homePage:{
        here(){
            cy.get('[id="nav-logo-sprites"]').click()
        }
    }
}

export function search(value){
    cy.get('[id="twotabsearchtextbox"]').type(`${value}{enter}`)
}