/*
Andrew Moskowitz
CSCI 490 - Fall 23
This JavaScript program automates the process of logging into a web application, navigating to the hash conversion page, and comparing the hashed values of strings from the application with the correct hash values. 
*/

async function WaitSeconds(seconds) {                                                                   // Defines an asynchronous function to pause the program for a specified number of seconds.
    const milliseconds = seconds * 1000;                                                                // Calculates the time in milliseconds for setting a timeout to wait.
    await new Promise((resolve) => setTimeout(resolve, milliseconds));                                  // Uses a Promise to create a delay. The setTimeout function is used to delay the resolution of the Promise for the number of milliseconds calculated earlier.
}

const {By, Key, Builder} = require("selenium-webdriver");                                               // Imports necessary modules from the "selenium-webdriver" package, including By, Key, and Builder. These provide functionality to locate and interact with web elements and build the WebDriver.
require("chromedriver");                                                                                // Imports the "chromedriver" package, which is necessary for Selenium to interact with the Google Chrome browser.


async function SHA256(){                                                                                // Defines asynchronous function which contains logic to navigate to a page and test the functionality of the hash converter.

    let driver = await new Builder().forBrowser("chrome").build();                                      // This line creates a new WebDriver instance using the Builder class and assigns it to driver variable. It specifies that the browser to be used is Chrome,
                                                                                                        //      then builds the driver instance. The await keyword is used to ensure that the driver is fully initialized before proceeding.
    await driver.get("http://127.0.0.1:8000/");                                                         // Instructs the WebDriver to open a web page with given URL using the get method.

    await driver.findElement(By.name("username")).sendKeys("Andrew");                                   // Locates the first HTML element with name attribute, "username", and sends the text, "Andrew", to that element.

    await driver.findElement(By.name("password")).sendKeys("Coaster76", Key.RETURN);                    // Locates the first HTML element with name attribute, "password", and sends the text, "Coaster76", to that element. Key.RETURN then submits the input.

    await driver.findElement(By.partialLinkText("SHA256 Converter")).click();                           // Locates the first HTML element with partial link text, "SHA256 Converter", and clicks on it.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    const textValue = "abc123";                                                                         // Assigns string "abc123" to textValue variable.

    await driver.findElement(By.id("input-text")).sendKeys(textValue);                                  // Locates the first HTML element with id attribute, "input-text", and sends the text "abc123" to that element.

    const pElement = await driver.findElement(By.id("hash-output"));                                    // Locates the first HTML element with id attribute, "hash-output", and assigns it to pElement variable.

    const hashValue = await pElement.getText();                                                         // This line retrieves the text content of pElement using .getText() and is then stored in the hashValue variable.

    if (hashValue === "6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090") {             // Compares hash value given on web application with the correct hash value. This should be correct, so it logs a success message.
        console.log("\n\nHash Value:", hashValue, "is correct for", "'" + textValue + "'\n");           // Logs success message with hash value given on web application and inputted text value.
    } else {                                                                                            // If hash value on web application is incorrect, run this code segment to log unsuccessful message and quit the driver and program.
        console.log("\nFirst test failed! Incorrect hash value for", "'" + textValue + "'\n")           // Logs unsuccessful message. 
        await driver.quit();                                                                            // Closes WebDriver, terminating the browser session.
        return 0;                                                                                       // Returns 0 to exit program.
    }

    const textValue2 = "Hello there!";                                                                  // Assigns string "Hello there!" to textValue2 variable.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.findElement(By.id("input-text")).clear();                                              // Locates the first HTML element with id attribute, "input-text", and clears its contents.

    await driver.findElement(By.id("input-text")).sendKeys(textValue2);                                 // Locates the first HTML element with id attribute, "input-text", and sends the text "Hello there!" to that element.

    const hashValue2 = await pElement.getText();                                                        // This line retrieves the text content of pElement using .getText() and is then stored in the hashValue2 variable.

    if (hashValue2 === "6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090") {            // Compares hash value given on web application with the incorrect hash value. This should be incorrect, so it logs an unsuccessful message and quits.
        console.log("\n\nHash Value:", hashValue2, "is correct for", "'" + textValue2 + "'\n");         // Logs success message with hash value given on web application and inputted text value.
    } else {                                                                                            // If hash value on web application is incorrect, run this code segment to log unsuccessful message and quit the driver and program.  
        console.log("\nSecond test failed! Incorrect hash value for", "'" + textValue2 + "'\n")         // Logs unsuccessful message.
        await driver.quit();                                                                            // Closes WebDriver, terminating the browser session.
        return 0;                                                                                       // Returns 0 to exit program.
    }

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.quit();                                                                                // Closes the WebDriver, terminating the browser session.

    console.log('\n\nTest ran successfully.\n\n');                                                      // Logs a success message to the console. Not invoked since test failed in second compare.
}

SHA256();                                                                                               // SHA256 function is invoked to run the test.