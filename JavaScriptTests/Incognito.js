/*
Andrew Moskowitz
CSCI 490 - Fall 23
This JavaScript program automates the process of using the Selenium WebDriver to open two instances of the Google homepage, one in regular mode and another in incognito mode.
*/

async function WaitSeconds(seconds) {                                                                   // Defines an asynchronous function to pause the program for a specified number of seconds.
    const milliseconds = seconds * 1000;                                                                // Calculates the time in milliseconds for setting a timeout to wait.
    await new Promise((resolve) => setTimeout(resolve, milliseconds));                                  // Uses a Promise to create a delay. The setTimeout function is used to delay the resolution of the Promise for the number of milliseconds calculated earlier.
}

const {By, Key, Builder} = require("selenium-webdriver");                                               // Imports necessary modules from the "selenium-webdriver" package, including By, Key, and Builder. These provide functionality to locate and interact with web elements and build the WebDriver.
const chrome = require("selenium-webdriver/chrome");                                                    // Imports chrome module from selenium-webdriver library and assigns it to const chrome. Used to add chrome options for incognito mode.
require("chromedriver");                                                                                // Imports the "chromedriver" package, which is necessary for Selenium to interact with the Google Chrome browser.

async function Incognito() {                                                                            // Defines asynchronous function which contains logic to open a regular browser then an incognito browser.

    let DriverOne = await new Builder().forBrowser("chrome").build();                                   // This line creates a new WebDriver instance using the Builder class and assigns it to driver variable. It specifies that the browser to be used is Chrome,
                                                                                                        //      then builds the driver instance. The await keyword is used to ensure that the driver is fully initialized before proceeding.                   
    await DriverOne.get("http://google.com").then(() => {                                               // Instructs the Chrome driver instance DriverOne to open a web page with given URL using the get method. Once navigation is complete, success message is logged to console.
        console.log('\n\nDriverOne opened in regular mode\n\n')
    });                                                 

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program. 

    await DriverOne.quit();                                                                             // Closes the WebDriver, terminating the browser session.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.   
    
    const chromeOptions = new chrome.Options().addArguments("--incognito");                             // This line creates a Chrome options object (chrome.Options) and adds the argument "--incognito" to indicate that the second driver instance should be in incognito mode.

    let DriverTwo = await new Builder().forBrowser("chrome")                                            // This line creates a new Chrome driver instance (DriverTwo) with the Chrome options set to incognito mode.           
                                       .setChromeOptions(chromeOptions)
                                       .build();

    await DriverTwo.get('http://google.com').then(() => {                                               // Instructs the Chrome driver instance DriverTwo to open a web page with given URL using the get method. Once navigation is complete, success message is logged to console.
        console.log('\n\nDriverTwo opened in incognito mode\n\n')
    });

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.
                                                                                                                            
    await DriverTwo.quit();                                                                             // Closes the WebDriver, terminating the browser session.                                

}

Incognito();                                                                                            // Incognito function is invoked to run the test.

