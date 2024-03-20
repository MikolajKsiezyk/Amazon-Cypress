import {restoreCookies} from "../../fixtures/amazonUtils";
import {addNewAddressAndValidate, deleteAllAddresses} from "./delivery-address-manage";

describe('Delivery location tests', () => {
    beforeEach(()=>{
        restoreCookies()
        deleteAllAddresses()
    })

    it('Should add new address and then validate it', () => {
        addNewAddressAndValidate('Poland','Jan Kowalski','111111111','testowa 1','1','01-391','Warsaw')
    })
})