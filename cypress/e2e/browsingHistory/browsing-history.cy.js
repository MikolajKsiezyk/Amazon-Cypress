import {clearHistory, validateItemHistory} from "./browsing-history";
import {Navigate, restoreCookies} from "../../fixtures/amazonUtils";


describe('Home Page tests', () => {
    beforeEach(()=>{
        restoreCookies()
        clearHistory()
    })

    it('Should validate user logged user info in Home Page', () => {
        validateItemHistory('Umbrella')
    })
})