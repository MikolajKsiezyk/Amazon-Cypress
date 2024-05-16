import {Navigate, searchProduct, selectProduct} from "../../fixtures/amazonUtils";

export function clearHistory() {
    Navigate.browsingHistory.here()
    cy.get('body').then((item) =>{
        if(item.find('#gridItemRoot').length) {
            cy.get('[data-event="DELETE_ITEM_FROM_VIEW"]').click({multiple:true})
            cy.reload()
            cy.get('.p13n-empty-ybh').should('contain.text','You have no recently viewed items.')
        }
    })
}

export function validateItemHistory(searchVal) {
    searchProduct(searchVal)
    selectProduct().then((productTitle) => {
        cy.wait(15000)
        cy.reload()
        cy.wait(15000)
        Navigate.homePage.here()
        Navigate.browsingHistory.here()
        cy.get('div.p13n-sc-truncate-fallback').eq(0).should('have.text',productTitle)
    })
}