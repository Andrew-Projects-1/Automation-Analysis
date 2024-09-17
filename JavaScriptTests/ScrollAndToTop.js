/*
Andrew Moskowitz
CSCI 490 - Fall 23
This JavaScript program automates the process of logging into a web application, navigating to the question form, scrolling to the bottom of the page, and pressing the top button to return to the top of the page. 
*/

async function WaitSeconds(seconds) {                                                                   // Defines an asynchronous function to pause the program for a specified number of seconds.
    const milliseconds = seconds * 1000;                                                                // Calculates the time in milliseconds for setting a timeout to wait.
    await new Promise((resolve) => setTimeout(resolve, milliseconds));                                  // Uses a Promise to create a delay. The setTimeout function is used to delay the resolution of the Promise for the number of milliseconds calculated earlier.
}

const {By, Key, Builder} = require("selenium-webdriver");                                               // Imports necessary modules from the "selenium-webdriver" package, including By, Key, and Builder. These provide functionality to locate and interact with web elements and build the WebDriver.
require("chromedriver");                                                                                // Imports the "chromedriver" package, which is necessary for Selenium to interact with the Google Chrome browser.


async function ScrollAndToTop() {                                                                       // Defines asynchronous function which contains logic to navigate to a page, scroll to the bottom, and test the back to top button.
    
    let driver = await new Builder().forBrowser("chrome").build();                                      // This line creates a new WebDriver instance using the Builder class and assigns it to driver variable. It specifies that the browser to be used is Chrome,
                                                                                                        //      then builds the driver instance. The await keyword is used to ensure that the driver is fully initialized before proceeding.  
    await driver.get("http://127.0.0.1:8000/");                                                         // Instructs the WebDriver to open a web page with given URL using the get method.

    await driver.findElement(By.name("username")).sendKeys("Andrew");                                   // Locates the first HTML element with name attribute, "username", and sends the text, "Andrew", to that element.

    await driver.findElement(By.name("password")).sendKeys("Coaster76");                           // Locates the first HTML element with name attribute, "password", and sends the text, "Coaster76", to that element.

    await driver.findElement(By.css('[value="Login"]')).click();                                        // Locates the first HTML element with the attribute 'value' equal to "Login" using a CSS selector, then clicks on it.

    await driver.findElement(By.partialLinkText("Ask a Question")).click();                             // Locates the first HTML element with partial link text, "Ask a Question", and clicks on it.

    await WaitSeconds(4);                                                                               // Pauses the execution for 4 seconds using the WaitSeconds function defined at top of program.

    await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');                       // JavaScript statement to scroll down to the bottom of the web page.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    const button = await driver.findElement(By.id('myBtn'));                                            // Locates the first HTML element with id attribute, "myBtn", and assigns it to button variable.

    await button.click();                                                                               // Clicks the button variable with the saved HTML element above.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    driver.quit();                                                                                      // Closes the WebDriver, terminating the browser instance. 

    console.log('\n\nTest ran successfully.\n\n');                                                      // Logs a success message to the console.

}

ScrollAndToTop();                                                                                       // ScrollAndToTop function is invoked to run the test.