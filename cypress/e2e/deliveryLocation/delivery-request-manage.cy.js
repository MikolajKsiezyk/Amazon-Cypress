import {restoreCookies} from "../../fixtures/amazonUtils";
import {addNewAddress, checkAddress, deleteAllAddresses} from "./delivery-address-manage";

describe('Home Page test', () => {
    beforeEach(()=>{
        restoreCookies()
        deleteAllAddresses()
    })

    it('Should add new address and then validate it', () => {
        addNewAddress('Poland','Jan Kowalski','111111111','2 ulica Anieli Krzywoń','test')
        checkAddress('Poland','Jan Kowalski','111111111','2 ulica Anieli Krzywoń','test','01-391','Hrubieszów')

    })
})