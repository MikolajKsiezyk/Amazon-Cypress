import {
    addToCart, deleteAllItemsFromCart, login,
    Navigate, restoreCookies,
    searchProduct,
    selectProduct
} from "../../fixtures/amazonUtils";
import {validateTotalPrice} from "../../fixtures/amazonUtils";

describe('Shopping cart tests', () => {
    before(() => {
        login()
    })
    beforeEach(()=>{
        cy.preserveCookieOnce()
        cy.wait(5000)
        cy.reload()
    })

    it('Should add to cart 2 products, add item prices and compare it with total price', () => {
        restoreCookies()
        searchProduct('test automation')
        selectProduct(0)
        addToCart()
        searchProduct('watch')
        selectProduct(0)
        addToCart()
        Navigate.shoppingCart.here()
        validateTotalPrice('2','totalPrice');
    })
})
