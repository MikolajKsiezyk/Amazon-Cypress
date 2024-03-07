import {clearHistory, validateItemHistory} from "./browsing-history";
import {restoreCookies} from "../../fixtures/amazonUtils";


describe('Browsing History tests', () => {
    beforeEach(()=>{
        restoreCookies()
        clearHistory()
    })

    it('Should find product, open it and then check if it is showed in browsing history tab', () => {
        validateItemHistory('Umbrella')
    })
})