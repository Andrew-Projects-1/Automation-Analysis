/*
Andrew Moskowitz
CSCI 490 - Fall 23
This JavaScript program automates the process of logging into a web application, navigating to the user's profile, and changing the user's profile picture.
*/

async function WaitSeconds(seconds) {                                                                   // Defines an asynchronous function to pause the program for a specified number of seconds.
    const milliseconds = seconds * 1000;                                                                // Calculates the time in milliseconds for setting a timeout to wait.
    await new Promise((resolve) => setTimeout(resolve, milliseconds));                                  // Uses a Promise to create a delay. The setTimeout function is used to delay the resolution of the Promise for the number of milliseconds calculated earlier.
}

const {By, Key, Builder} = require("selenium-webdriver");                                               // Imports necessary modules from the "selenium-webdriver" package, including By, Key, and Builder. These provide functionality to locate and interact with web elements and build the WebDriver.
require("chromedriver");                                                                                // Imports the "chromedriver" package, which is necessary for Selenium to interact with the Google Chrome browser.


async function ChangeProfilePic() {                                                                     // Defines asynchronous function which contains logic to open navigate to the user's profile and change their profile picture.

    let driver = await new Builder().forBrowser("chrome").build();                                      // This line creates a new WebDriver instance using the Builder class and assigns it to driver variable. It specifies that the browser to be used is Chrome,
                                                                                                        //      then builds the driver instance. The await keyword is used to ensure that the driver is fully initialized before proceeding.       
    await driver.get("http://127.0.0.1:8000/");                                                         // Instructs the WebDriver to open a web page with given URL using the get method.                                                        

    await driver.findElement(By.name("username")).sendKeys("Bill");                                     // Locates the first HTML element with name attribute, "username", and sends the text, "Bill", to that element.

    await driver.findElement(By.name("password")).sendKeys("Coaster76");                           // Locates the first HTML element with name attribute, "password", and sends the text, "Coaster76", to that element.

    await driver.findElement(By.css('[value="Login"]')).click();                                        // Locates the first HTML element with the attribute 'value' equal to "Login" using a CSS selector, then clicks on it.           

    await driver.findElement(By.css('[data-bs-toggle="dropdown"]')).click();                            // Locates the first HTML element with the attribute 'data-bs-toggle' equal to "dropdown" using a CSS selector, then clicks on it.
    
    await driver.findElement(By.css('[href="/profile"]')).click();                                      // Locates the first HTML element with the attribute 'href' equal to "/profile" using a CSS selector, then clicks on it.

    let input = await driver.findElement(By.id("id_image"));                                            // Locates the first HTML element with id attribute, "id_image", and assigns it to input variable.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    //await input.sendKeys("../bg3.jpg");                              // Sends the location of the local file to input variable.
    await input.sendKeys("../avatar.png");                             // Sends the location of the local file to input variable.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.findElement(By.css('button[type="submit"].button.expanded')).click();                  // Locates the first HTML button element with the attribute 'type' equal to "submit" and the attribute 'class' containing "button" and "expanded classes" using a CSS selector, then clicks on it.

    await WaitSeconds(4);                                                                               // Pauses the execution for 4 seconds using the WaitSeconds function defined at top of program.

    driver.quit();                                                                                      // Closes the WebDriver, terminating the browser session.  

    console.log('\n\nTest ran successfully.\n\n');                                                      // Logs a success message to the console.               

}

ChangeProfilePic();                                                                                     // ChangeProfilePic function is invoked to run the test.