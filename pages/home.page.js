'use strict';
const { By, Key, until } = require('selenium-webdriver');

module.exports = class HomePage {
    #driver;

    constructor(webdriver) {
        this.#driver = webdriver;
    }

    // prvo uzimam ceo div jer se u njemu nalazi dropdown i stavljamo parametar title koji ce da trazi tekst
    getPackageDiv(title) {
      const xpathPackage = `//h3[contains(text(), "${title}")]/ancestor::div[contains(@class, "panel")]`;
      return this.#driver.findElement(By.xpath(xpathPackage)); // prvo smo smestili xpath u promenljivu xpathPackage a zatim nasli taj element i u paramteru stavili xpathPackage
    }

    getQuantityDropdown(packageDiv) {  // U ovoj metodi trebamo da stavimo u parametre packageDiv kako bi unutar tog diva mogli da trazimo select tag(quantity)
      return packageDiv.findElement(By.name('quantity'));
    }

    getQuantityOptions(quantityDropdown) {  // ovde zelimo da uzmemo svaku od opcija
      return quantityDropdown.findElements(By.css('option'));
    }

  }