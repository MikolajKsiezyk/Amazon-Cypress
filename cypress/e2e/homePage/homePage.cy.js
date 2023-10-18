import {login} from "../../fixtures/amazonUtils";
import {validateName} from "./homePage";

describe('Home Page test', () => {
    beforeEach(()=>{
        login()
    })

    it('Should validate user logged user info in Home Page', () => {
        validateName('test')
    })
})