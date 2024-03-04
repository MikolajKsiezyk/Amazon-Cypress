import {
    addToCart, deleteAllItemsFromCart,
    Navigate,
    searchProduct,
    selectProduct
} from "../../fixtures/amazonUtils";
import {login} from "../../fixtures/amazonUtils";
import {validateTotalPrice} from "../../fixtures/amazonUtils";

describe('Shopping cart tests', () => {
    beforeEach(()=>{
        login()
        deleteAllItemsFromCart()
    })

    it('Should add to cart 2 products, add item prices and compare it with total price', () => {
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
