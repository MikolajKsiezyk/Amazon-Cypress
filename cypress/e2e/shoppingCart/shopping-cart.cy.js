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
        deleteAllItemsFromCart()
    })

    it('Should add to cart 2 products, add item prices and compare it with total price', () => {
        searchProduct('test automation fundamentals')
        selectProduct(0)
        addToCart()
        searchProduct('SAMSUNG Galaxy S23')
        selectProduct(0)
        addToCart()
        Navigate.shoppingCart.here()
        validateTotalPrice('2','totalPrice');
    })
})
