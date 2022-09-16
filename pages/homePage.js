let BasePage = require("./basePage");
let WebButton = require("../elements/button.element");
let ViewElement = require("../elements/view.element");

class HomePage extends BasePage {
    baseElement() {return new ViewElement($('#navbarAccount'), "Home page base element")};
    get accountButtonHeader() {return new WebButton($('#navbarAccount'), "Account button")};
    get loginButtonHeader() {return new WebButton($('[id="navbarLoginButton"]'), "Login button in account menu")};
    get logoutButtonHeader() {return new WebButton($('#navbarLogoutButton'), "Logout button in account menu")};
    get basketButton() {return new WebButton($('button[routerlink="/basket"]'), "Basket button")};
    get burgerButton() {return new WebButton($('//mat-toolbar-row/button[1]'), "Burger button")};
    get aboutUsButton() {return new WebButton($('a[routerlink="/about"]'), "About Us button")};

    async openLoginPage() {
        await this.accountButtonHeader.click();
        await this.loginButtonHeader.click();
    };

    async logOut() {
        await this.accountButtonHeader.click();

        if(await this.logoutButtonHeader.isExisting()){
            this.logoutButtonHeader.click();
        }else{this.loginButtonHeader.click()}
    };

    async goToAboutUspage(){
        await this.burgerButton.click();
        await this.aboutUsButton.waitForClickable();
        await this.aboutUsButton.click();
    };
}

module.exports = new HomePage();