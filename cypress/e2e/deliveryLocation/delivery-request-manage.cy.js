import {login} from "../../fixtures/amazonUtils";
import {addNewAddress, checkAddress, deleteAllAddresses} from "./delivery-address-manage";

describe('Home Page test', () => {
    beforeEach(()=>{
        login()
    })

    it('Should add new address and then validate it', () => {
        deleteAllAddresses()
        addNewAddress('Poland','Jan Kowalski','111111111','2 ulica Anieli Krzywoń','test','01-391','Warszawa')
        checkAddress('Poland','Jan Kowalski','111111111','2 ulica Anieli Krzywoń','test','01-391','Warszawa')
        deleteAllAddresses()
    })
})