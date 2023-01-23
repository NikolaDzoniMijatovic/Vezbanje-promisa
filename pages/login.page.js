'use strict';
const { By, Key, until } = require('selenium-webdriver');

module.exports = class LoginPage {
    #driver;

    constructor(webdriver) {
        this.#driver = webdriver;
    }

    goToPage() {
        this.#driver.get("http://shop.qa.rs/login");
    }

    async getInputUsername() {
        const username = this.#driver.findElement(By.name('username'));
        username.click();
        username.sendKeys("aaa");
    }
    
    async getInputPassword() {
        const password = this.#driver.findElement(By.name('password'));
        password.click();
        password.sendKeys("aaa");
    }

    async clickOnLoginButton() {
         const buttonLogin = await this.#driver.findElement(By.name('login'));
         await buttonLogin.click();
    }
}