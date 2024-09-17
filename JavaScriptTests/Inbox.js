/*
Andrew Moskowitz
CSCI 490 - Fall 23
This JavaScript program automates the process of
*/

async function WaitSeconds(seconds) {                                           // Defines an asynchronous function to pause the program for a specified number of seconds.
    const milliseconds = seconds * 1000;                                        // Calculates the time in milliseconds for setting a timeout to wait.
    await new Promise((resolve) => setTimeout(resolve, milliseconds));          // Uses a Promise to create a delay. The setTimeout function is used to delay the resolution of the Promise for the number of milliseconds calculated earlier.
}

const {By, Key, Builder} = require("selenium-webdriver");                       // Imports necessary modules from the "selenium-webdriver" package, including By, Key, and Builder. These provide functionality to locate and interact with web elements and build the WebDriver.
require("chromedriver");                                                        // Imports the "chromedriver" package, which is necessary for Selenium to interact with the Google Chrome browser.


async function Inbox(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://127.0.0.1:8000/");

    await driver.findElement(By.name("username")).sendKeys("Andrew");

    await driver.findElement(By.name("password")).sendKeys("Coaster76", Key.RETURN);

    //await WaitSeconds(2);

    let driver2 = await new Builder().forBrowser("chrome").build();

    await driver2.get("http://127.0.0.1:8000/");

    await driver2.findElement(By.name("username")).sendKeys("Bill");

    await driver2.findElement(By.name("password")).sendKeys("Coaster76", Key.RETURN);

    //await WaitSeconds(2);

    await driver.findElement(By.css('[data-bs-toggle="dropdown"]')).click();
    
    await driver.findElement(By.css('[href="/inbox"]')).click();

    //await WaitSeconds(2);

    await driver.findElement(By.css('button.favorite[type="submit"]')).click();

    await WaitSeconds(2);

    await driver.findElement(By.name("username")).sendKeys("Bill");

    //await WaitSeconds(2);

    await driver.findElement(By.xpath('//button[contains(@class, "btn-success") and contains(text(), "Continue")]')).click();

    await driver.findElement(By.name("body")).sendKeys("Test1");

    //await WaitSeconds(2);

    await driver.findElement(By.name("body")).sendKeys(Key.RETURN);

    await WaitSeconds(2);                                                       // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver2.navigate().refresh();

    // Needs work 
    // Needs work
    // Needs work 
    // Needs work




}

Inbox();