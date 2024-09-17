/*
Andrew Moskowitz
CSCI 490 - Fall 23
This JavaScript program automates the process of 
*/

async function WaitSeconds(seconds) {                                                                   // Defines an asynchronous function to pause the program for a specified number of seconds.
    const milliseconds = seconds * 1000;                                                                // Calculates the time in milliseconds for setting a timeout to wait.
    await new Promise((resolve) => setTimeout(resolve, milliseconds));                                  // Uses a Promise to create a delay. The setTimeout function is used to delay the resolution of the Promise for the number of milliseconds calculated earlier.
}

const {By, Key, Builder} = require("selenium-webdriver");                                               // Imports necessary modules from the "selenium-webdriver" package, including By, Key, and Builder. These provide functionality to locate and interact with web elements and build the WebDriver.
require("chromedriver");                                                                                // Imports the "chromedriver" package, which is necessary for Selenium to interact with the Google Chrome browser.
                    
async function Functions() {                                                                            // Defines asynchronous function which contains logic to login and logout of personal web application.
    
    let driver = await new Builder().forBrowser("chrome").build();                                      // This line creates a new WebDriver instance using the Builder class and assigns it to driver variable. It specifies that the browser to be used is Chrome,
                                                                                                        //      then builds the driver instance. The await keyword is used to ensure that the driver is fully initialized before proceeding.     
    await driver.get("http://127.0.0.1:8000/");  

}

Functions();