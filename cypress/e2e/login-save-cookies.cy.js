import {login, saveCookies} from "../fixtures/amazonUtils";

describe('Login & save cookies', () => {
  it('Should login to Amazon and save cookies to future use', () => {
    login()
    cy.preserveCookieOnce('my-session')
  })
})