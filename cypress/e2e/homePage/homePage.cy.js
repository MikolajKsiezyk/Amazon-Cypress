import {restoreCookies} from "../../fixtures/amazonUtils";
import {validateName} from "./homePage";

describe('Home Page test', () => {
    beforeEach(()=>{
        restoreCookies()
    })

    it('Should validate user logged user info in Home Page', () => {
        restoreCookies()
        validateName('Jan')
    })
})