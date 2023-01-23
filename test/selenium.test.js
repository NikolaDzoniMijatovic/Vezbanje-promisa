'use strict';

require('chromedriver');
const webdriver = require('selenium-webdriver');
const { By, Key, until } = require('selenium-webdriver');

// Load chai library
const chai = require('chai');
// Load chai-as-promised library, to use with promises
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect; // Use chai.expect instead of mocha expect

const LoginPage = require('../pages/login.page');
const HomePage = require('../pages/home.page');

describe('Exam tests', function() {
  let driver;
  let pageLogin;
  let pageHomepage;

  
  before(function() {
    driver = new webdriver.Builder().forBrowser('chrome').build();
    pageLogin = new LoginPage(driver);
    pageHomepage = new HomePage(driver);
  });

  //after(async function() {
    //await driver.quit();
//});

it('Goes to home page', async function() {
  pageLogin.goToPage();
  pageLogin.getInputUsername();
  pageLogin.getInputPassword();
  pageLogin.clickOnLoginButton();
});

it("Add item to cart - Starter, 2 items", async function() {
  const packageToAdd = 'starter'; // prvo dodajemo konstantu packageToAdd u koju prosledjujemo koju vrstu paketa zelimo

  const packageDiv = await pageHomepage.getPackageDiv(packageToAdd); // ovde sam napravio konstantu packageDiv kojoj sam prosledio ceo div(metoda getPackageDiv) sa parametrom packageToAdd(predstavlja title tj ime paketa)

  const quantity = await pageHomepage.getQuantityDropDown(packageDiv); // napravili smo konstantu quantity i u nju smestili nase opcije ali samo za odredjeni div tj za starter paket(packageDiv)

  const options = await pageHomepage.getQuantityOptions(quantity); // suzavamo pretragu i u konstantu options stavljamo sve opcije ali samo iz quantity konstante

  // Sada pisemo promise
});
});