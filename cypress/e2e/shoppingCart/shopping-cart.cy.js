import {
    addToCart, deleteAllItemsFromCart,
    Navigate, restoreCookies,
    searchProduct,
    selectProduct
} from "../../fixtures/amazonUtils";
import {validateTotalPrice} from "../../fixtures/amazonUtils";

describe('Shopping cart tests', () => {
    beforeEach(()=>{
        restoreCookies()
        // deleteAllItemsFromCart()
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
