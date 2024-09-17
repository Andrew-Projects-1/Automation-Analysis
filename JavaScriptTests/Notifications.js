/*
Andrew Moskowitz
CSCI 490 - Fall 23
This JavaScript program automates the process of
*/

async function WaitSeconds(seconds) {
    const milliseconds = seconds * 1000;
    await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

const {By, Key, Builder, Actions, until, WebDriver} = require("selenium-webdriver");
require("chromedriver");

async function Notifications(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://127.0.0.1:8000/");

    await driver.findElement(By.name("username")).sendKeys("Bill");

    await driver.findElement(By.name("password")).sendKeys("Coaster76", Key.RETURN);

    //await WaitSeconds(2);


    const element = await driver.findElement(By.xpath('/html/body/nav/ul/div/div'));

    // Create an Actions object
    const actions = new Actions(driver);

    // Move to the element and then click it
    await actions.moveToElement(element).perform();

    // Needs work 
    // Needs work
    // Needs work 
    // Needs work





}

Notifications();