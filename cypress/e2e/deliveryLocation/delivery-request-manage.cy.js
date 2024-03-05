import {restoreCookies} from "../../fixtures/amazonUtils";
import {addNewAddress, checkAddress, deleteAllAddresses} from "./delivery-address-manage";

describe('Home Page test', () => {
    beforeEach(()=>{
        restoreCookies()
        // deleteAllAddresses()
    })

    it('Should add new address and then validate it', () => {
        restoreCookies()
        addNewAddress('Poland','Jan Kowalski','111111111','testowa 1','1','01-391','Warsaw')
        checkAddress('Poland','Jan Kowalski','111111111','testowa 1','1','01-391','Warsaw')
    })
})