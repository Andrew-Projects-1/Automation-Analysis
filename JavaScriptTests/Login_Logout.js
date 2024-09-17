/*
Andrew Moskowitz
CSCI 490 - Fall 23
This JavaScript program automates the process of opening a web page and interacting with web elements to log in and log out.
*/

async function WaitSeconds(seconds) {                                                                   // Defines an asynchronous function to pause the program for a specified number of seconds.
    const milliseconds = seconds * 1000;                                                                // Calculates the time in milliseconds for setting a timeout to wait.
    await new Promise((resolve) => setTimeout(resolve, milliseconds));                                  // Uses a Promise to create a delay. The setTimeout function is used to delay the resolution of the Promise for the number of milliseconds calculated earlier.
}

const {By, Key, Builder} = require("selenium-webdriver");                                               // Imports necessary modules from the "selenium-webdriver" package, including By, Key, and Builder. These provide functionality to locate and interact with web elements and build the WebDriver.
require("chromedriver");                                                                                // Imports the "chromedriver" package, which is necessary for Selenium to interact with the Google Chrome browser.
                    
async function LoginTest() {                                                                            // Defines asynchronous function which contains logic to login and logout of personal web application.
    
    let driver = await new Builder().forBrowser("chrome").build();                                      // This line creates a new WebDriver instance using the Builder class and assigns it to driver variable. It specifies that the browser to be used is Chrome,
                                                                                                        //      then builds the driver instance. The await keyword is used to ensure that the driver is fully initialized before proceeding.     
    await driver.get("http://127.0.0.1:8000/");                                                         // Instructs the WebDriver to open a web page with given URL using the get method.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.findElement(By.name("username")).sendKeys("Andrew");                                   // Locates the first HTML element with name attribute, "username", and sends the text, "Andrew", to that element.

    await driver.findElement(By.name("password")).sendKeys("Coaster76");                           // Locates the first HTML element with name attribute, "password", and sends the text, "Coaster76", to that element.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    // await driver.findElement(By.partialLinkText("Login")).click();                                   // This line does not work because the needed element shares this attribute with another element and is second on the page. findElement locates the first element on the page. 
    await driver.findElement(By.css('[value="Login"]')).click();                                        // Locates the first HTML element with the attribute 'value' equal to "Login" using a CSS selector, then clicks on it.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.findElement(By.css('[data-bs-toggle="dropdown"]')).click();                            // Locates the first HTML element with the attribute 'data-bs-toggle' equal to "dropdown" using a CSS selector, then clicks on it.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.
    
    await driver.findElement(By.css('[href="/logout"]')).click();                                       // Locates the first HTML element with the attribute 'href' equal to "/logout" using a CSS selector, then clicks on it.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    driver.quit();                                                                                      // Closes the WebDriver, terminating the browser session.

    console.log('\n\nTest ran successfully.\n\n');                                                      // Logs a success message to the console.

}

LoginTest();                                                                                            // LoginTest function is invoked to run the test.