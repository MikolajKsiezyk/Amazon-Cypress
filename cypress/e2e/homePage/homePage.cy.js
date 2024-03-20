import {restoreCookies} from "../../fixtures/amazonUtils";
import {changeLanguageAndValidate, validateName} from "./homePage";

describe('Home Page tests', () => {
    beforeEach(()=>{
        restoreCookies()
    })

    it('Should validate logged user, user info in Home Page', () => {
        validateName('Jan')
    })

    it('Should change language and validate it', () => {
        changeLanguageAndValidate('ES','Hola')
        changeLanguageAndValidate('AR','مرحباً')
        changeLanguageAndValidate('DE','Hallo')
        changeLanguageAndValidate('HE','שלום')
        changeLanguageAndValidate('KO','안녕하십니까')
        changeLanguageAndValidate('PT','Olá')
        changeLanguageAndValidate('ZH','您好')
        changeLanguageAndValidate('EN','Hello')
    })
})