const aboutUsPage = require("../../pages/aboutUsPage");
const facebookLoginPage = require("../../pages/facebookLoginPage");
const facebookMainPage = require("../../pages/facebookMainPage");
const homePage = require("../../pages/homePage")


describe("Facebook login scenario", () => {

    before("Open Homepage", async () => {
        await homePage.open();
    });

    it("Facebook login success", async () => {
        await homePage.goToAboutUspage();
        await aboutUsPage.waitForPageAvailable();
        await aboutUsPage.goToFacebook();
        await aboutUsPage.switchWindow(facebookLoginPage.facebookURL);
        await facebookLoginPage.waitForPageAvailable();
        await facebookLoginPage.login(, );
        await facebookMainPage.waitForPageAvailable();
    });
});