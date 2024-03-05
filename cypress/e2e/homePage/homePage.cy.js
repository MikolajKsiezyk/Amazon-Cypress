import {login, restoreCookies} from "../../fixtures/amazonUtils";
import {validateName} from "./homePage";

describe('Home Page test', () => {
    before(() => {
        login()
    })
    beforeEach(()=>{
        cy.preserveCookieOnce()
        cy.wait(5000)
        cy.reload()
    })

    it('Should validate user logged user info in Home Page', () => {
        validateName('Jan')
    })
})