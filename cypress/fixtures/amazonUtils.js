export function login(email = em,password = pswd){
    cy.visit("https://www.amazon.com")
    cy.get('[data-nav-ref="nav_ya_signin"]').click()
    cy.get('[id="ap_email"]').type(email)
    cy.get('.a-button-inner > [id="continue"]').click()
    cy.get('[id="ap_password"]').type(password)
    cy.get('[id="signInSubmit"]').click()
    cy.url().should('include','https://www.amazon.com/?ref_=nav_ya_signin')
}

export const em = 'amazoncypress123@gmail.com';
export const pswd = 'ZAQ1@wsx';

export const Navigate = {
    homePage: {
        here() {
            cy.get('[id="nav-logo-sprites"]').click()
            }
        },
    categoryMenu: {
        here: () => {
            cy.get('[data-csa-c-slot-id="HamburgerMenuDesktop"]').click()
        },
        category: (name) => {
            Navigate.categoryMenu.here()
            cy.get('.hmenu-item').contains(name).click()
        },
    },
    shoppingCart: {
        here(){
            cy.get('[id="nav-cart"]').click()
        }
    },
    deliveryLocation: {
        here(){
            cy.get('#nav-global-location-popover-link').click()
        }
    },
    languageOptions: {
        here() {
            cy.get('#icp-nav-flyout').click()
        }
    },
    browsingHistory: {
        here() {
            cy.get('#nav-recently-viewed').click()
        }
    }
}

export function saveCookies() {
    cy.getCookies().then((cookies)=>{
        cy.writeFile('cypress/fixtures/cookies.json', JSON.stringify(cookies));
    })
}

export function restoreCookies(){
    cy.visit("https://www.amazon.com")
    cy.readFile('cypress/fixtures/cookies.json').then((cookies) => {
        cy.clearCookies();
        cookies.forEach((cookie) => {
            const { name, value, path, secure, httpOnly, expiry, domain, sameSite } = cookie;
            cy.setCookie(name, value, {
                path,
                secure,
                httpOnly,
                expiry,
                domain,
                sameSite,
            });
        });
    });
    cy.reload()
}

export function searchProduct(value){
    cy.get('[id="twotabsearchtextbox"]').type(value)
    cy.get('[id="nav-search-submit-button"]').click()
    cy.get('[id="twotabsearchtextbox"]').type('{selectAll}{del}{esc}')
}

export function selectProduct(){
    cy.get('[data-component-type="s-product-image"]:eq(0)').click()
    return cy.get('#productTitle').invoke('text').then((title) => {
        const trimmedTitle = title.trim();
        return cy.wrap(trimmedTitle)
    })
}

export function addToCart(){
    cy.get('[id="add-to-cart-button"]').eq(0).click().wait(6000)
}

export function getPrice(selector, price) {
    cy.get(selector).should('be.visible');
    cy.get(selector).invoke('text').then((value) => {
        const cleanedPrice = value.slice().match(/\d+(\.\d+)?/);
        cy.wrap(cleanedPrice[0]).as(price);
    });
}

export function validateTotalPrice(itemCount, totalPriceVar) {
    let totalPrice = 0;

    // Iteruj przez elementy w koszyku
    for (let index = 0; index < itemCount; index++) {
        const selector = `.sc-product-price:eq(${index})`;
        const priceVar = `price${index}`;

        // Pobierz cenę dla danego elementu
        getPrice(selector, priceVar)

        // Dodaj cenę do ogólnej sumy
        cy.get('@' + priceVar).then((itemPrice) => {
            totalPrice += parseFloat(itemPrice.toString());
        });
    }

    cy.get('#sc-subtotal-label-buybox').should('contain.text',`Subtotal (${itemCount} items):`)

    // Pobierz cenę całego koszyka
    cy.get('#sc-subtotal-amount-activecart').invoke('text').then((cartTotal) => {
        const cleanedCartTotal = cartTotal.slice().match(/\d+(\.\d+)?/);
        const adjustedTotalPrice = totalPrice.toFixed(2); // zaokrąglij do dwóch miejsc po przecinku
        cy.wrap(cleanedCartTotal).as(totalPriceVar); // Aktualizuj totalPriceVar
        expect(parseFloat(cleanedCartTotal.toString())).to.equal(parseFloat(adjustedTotalPrice));
    });
}

export function deleteAllItemsFromCart(){
    Navigate.shoppingCart.here()
    cy.get('body').then((item)=>{
        if(item.find('h1.a-spacing-top-base:contains("Your Amazon Cart is empty.")').length) {
            return 0;
        }else {
            cy.get('input[data-action="delete"]').click({multiple:true,force:true})
        }
    })
}