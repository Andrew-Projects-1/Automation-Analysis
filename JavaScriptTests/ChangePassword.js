/*
Andrew Moskowitz
CSCI 490 - Fall 23
This JavaScript program automates the process of changing the password of a user
*/

async function WaitSeconds(seconds) {                                                                   // Defines an asynchronous function to pause the program for a specified number of seconds.
    const milliseconds = seconds * 1000;                                                                // Calculates the time in milliseconds for setting a timeout to wait.
    await new Promise((resolve) => setTimeout(resolve, milliseconds));                                  // Uses a Promise to create a delay. The setTimeout function is used to delay the resolution of the Promise for the number of milliseconds calculated earlier.
}

const {By, Key, Builder} = require("selenium-webdriver");                                               // Imports necessary modules from the "selenium-webdriver" package, including By, Key, and Builder. These provide functionality to locate and interact with web elements and build the WebDriver.
require("chromedriver");                                                                                // Imports the "chromedriver" package, which is necessary for Selenium to interact with the Google Chrome browser.


async function ChangePassword() {

    let driver = await new Builder().forBrowser("chrome").build();                                      // This line creates a new WebDriver instance using the Builder class and assigns it to driver variable. It specifies that the browser to be used is Chrome,
                                                                                                        //      then builds the driver instance. The await keyword is used to ensure that the driver is fully initialized before proceeding.
    await driver.get("http://127.0.0.1:8000/");                                                         // Instructs the WebDriver to open a web page with given URL using the get method.

    await driver.findElement(By.name("username")).sendKeys("Bill");                                     // Locates the first HTML element with name attribute, "username", and sends the text, "Bill", to that element.

    await driver.findElement(By.name("password")).sendKeys("Coaster76");                                // Locates the first HTML element with name attribute, "password", and sends the text, "Coaster76", to that element. (Regular password)
    //await driver.findElement(By.name("password")).sendKeys("Breaker19");                                // Locates the first HTML element with name attribute, "password", and sends the text, "Breaker19", to that element. (Used for multiple runs of test)
    //await driver.findElement(By.name("password")).sendKeys("Breaker90");                                // Locates the first HTML element with name attribute, "password", and sends the text, "Breaker90", to that element. (Used for multiple runs of test)

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.findElement(By.css('[value="Login"]')).click();                                        // Locates the first HTML element with the attribute 'value' equal to "Login" using a CSS selector, then clicks on it.

    await driver.findElement(By.css('[data-bs-toggle="dropdown"]')).click();                            // Locates the first HTML element with the attribute 'data-bs-toggle' equal to "dropdown" using a CSS selector, then clicks on it.
    
    await driver.findElement(By.css('[href="/profile"]')).click();                                      // Locates the first HTML element with the attribute 'href' equal to "/profile" using a CSS selector, then clicks on it.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.findElement(By.css('[href="/password_change"]')).click();                              // Locates the first HTML element with the attribute 'href' equal to "/password_change" using a CSS selector, then clicks on it.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    //await driver.findElement(By.name("new_password1")).sendKeys("Breaker19");                           // Locates the first HTML element with name attribute, "new_password1", and sends the text, "Breaker19", to that element.
    //await driver.findElement(By.name("new_password2")).sendKeys("Breaker19", Key.RETURN);               // Locates the first HTML element with name attribute, "new_password2", and sends the text, "Breaker19", to that element. Key.RETURN then submits the input. 

    await driver.findElement(By.name("new_password1")).sendKeys("Breaker90");                           // Locates the first HTML element with name attribute, "new_password1", and sends the text, "Breaker90", to that element.
    await driver.findElement(By.name("new_password2")).sendKeys("Breaker90", Key.RETURN);               // Locates the first HTML element with name attribute, "new_password2", and sends the text, "Breaker90", to that element. Key.RETURN then submits the input. 

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.findElement(By.name("username")).sendKeys("Bill");                                     // (Back to homescreen) Locates the first HTML element with name attribute, "username", and sends the text, "Bill", to that element.

    //await driver.findElement(By.name("password")).sendKeys("Breaker19");                                // Locates the first HTML element with name attribute, "password", and sends the text, "Breaker19", to that element.
    await driver.findElement(By.name("password")).sendKeys("Breaker90");                                // Locates the first HTML element with name attribute, "password", and sends the text, "Breaker90", to that element.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.findElement(By.css('[value="Login"]')).click();                                        // Locates the first HTML element with the attribute 'value' equal to "Login" using a CSS selector, then clicks on it.

    const h1Element = await driver.findElement(By.css("h1"));                                           // Locates the first HTML element h1 using CSS selector and assigns reference to element to h1Element.

    const actualText = await h1Element.getText();                                                       // This line retrieves the text content of the h1 element using the getText() method.

    const expectedText = "Hello Bill! Welcome to ZAP!";                                                 // The expected string is assigned to expectedText.

    if (actualText === expectedText) {                                                                  // This line initiates an if statement to compare the actualText retrieved from the web page to the expectedText defined above.
      console.log("\nText is correct:", actualText);                                                    // If they match, log a success message.
    } else {
      console.log("\nText is incorrect. Actual text:", actualText);                                     // If they do not match, log an uncessessful message.
    }

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    driver.quit();                                                                                      // Closes the WebDriver, terminating the browser session.  

    console.log('\n\nTest ran successfully.\n\n');                                                      // Logs a success message to the console.

}

ChangePassword();                                                                                       // ChangePassword function is invoked to run the test.