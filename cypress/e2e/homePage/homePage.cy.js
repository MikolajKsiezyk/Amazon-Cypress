import {restoreCookies} from "../../fixtures/amazonUtils";
import {validateName} from "./homePage";

describe('Home Page tests', () => {
    beforeEach(()=>{
        restoreCookies()
    })

    it('Should validate user logged user info in Home Page', () => {
        validateName('Jan')
    })
})