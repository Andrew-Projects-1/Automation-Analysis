/*
Andrew Moskowitz
CSCI 490 - Fall 23
This JavaScript program automates the process of logging into a web application, navigating to the question form, submitting a text question with along with a picture upload, and finally answering the question.
*/

async function WaitSeconds(seconds) {                                                                   // Defines an asynchronous function to pause the program for a specified number of seconds.
    const milliseconds = seconds * 1000;                                                                // Calculates the time in milliseconds for setting a timeout to wait.
    await new Promise((resolve) => setTimeout(resolve, milliseconds));                                  // Uses a Promise to create a delay. The setTimeout function is used to delay the resolution of the Promise for the number of milliseconds calculated earlier.
}

const {By, Key, Builder} = require("selenium-webdriver");                                               // Imports necessary modules from the "selenium-webdriver" package, including By, Key, and Builder. These provide functionality to locate and interact with web elements and build the WebDriver.
require("chromedriver");                                                                                // Imports the "chromedriver" package, which is necessary for Selenium to interact with the Google Chrome browser.


async function UploadQuestionPicture(){                                                                 // Defines asynchronous function which contains logic to Upload a question and picture onto a forum then post an answer to it.

    let driver = await new Builder().forBrowser("chrome").build();                                      // This line creates a new WebDriver instance using the Builder class and assigns it to driver variable. It specifies that the browser to be used is Chrome,
                                                                                                        //      then builds the driver instance. The await keyword is used to ensure that the driver is fully initialized before proceeding.
    await driver.get("http://127.0.0.1:8000/");                                                         // Instructs the WebDriver to open a web page with given URL using the get method.

    await driver.findElement(By.name("username")).sendKeys("Andrew");                                   // Locates the first HTML element with name attribute, "username", and sends the text, "Andrew", to that element.

    await driver.findElement(By.name("password")).sendKeys("Coaster76", Key.RETURN);               // Locates the first HTML element with name attribute, "password", and sends the text, "Coaster76", to that element. Key.RETURN then submits the input.

    await driver.findElement(By.partialLinkText("Ask a Question")).click();                             // Locates the first HTML element with partial link text, "Ask a Question", and clicks on it.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.findElement(By.name("question_field")).sendKeys("Is this a duck?");                    // Locates the first HTML element with name attribute, "question_field", and sends the text, "Is this a duck?", to that element.

    await driver.findElement(By.name("image_description")).sendKeys("Not sure if this is a duck...");   // Locates the first HTML element with name attribute, "image_description", and sends the text, "Not sure if this is a duck...", to that element.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    let input = await driver.findElement(By.id("id_image"));                                            // Locates the first HTML element with id attribute, "id_image", and assigns it to input variable.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await input.sendKeys("../Duck.jfif");                              // Sends the location of the local file to input variable.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.findElement(By.css("input[type='submit'][value='Submit']")).click();                   // Locates the first HTML input element with the attribute 'type' equal to "submit" and the attribute 'value' equal to "Submit" using a CSS selector, then clicks on it.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.findElement(By.id("lightgreen")).click();                                              // Locates the first HTML element with id attribute, "lightgreen", and clicks on it.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.findElement(By.name("answer_field")).sendKeys("Yes, I do believe this is a duck!");    // Locates the first HTML element with name attribute, "answer_field", and sends the text, "Yes, I do believe this is a duck!", to that element.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.findElement(By.name("answer_field")).sendKeys(Key.RETURN);                             // Locates the first HTML element with name attribute, "answer_field", and submits the input with Key.RETURN.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.quit();                                                                                // Closes the WebDriver, terminating the browser session.

    console.log('\n\nTest ran successfully.\n\n');                                                      // Logs a success message to the console.
}

UploadQuestionPicture();                                                                                // UploadQuestionPicture function is invoked to run the test.


// How to get certain element of same kind on page
//const elements = await driver.findElements(By.id("lightgreen"));                                            
//elements[1].click();