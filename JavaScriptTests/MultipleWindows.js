/*
Andrew Moskowitz
CSCI 490 - Fall 23
This JavaScript program automates the process of opening multiple browser windows, switching between them, and interacting with web elements in each window.
*/

async function WaitSeconds(seconds) {                                                                   // Defines an asynchronous function to pause the program for a specified number of seconds.
    const milliseconds = seconds * 1000;                                                                // Calculates the time in milliseconds for setting a timeout to wait.
    await new Promise((resolve) => setTimeout(resolve, milliseconds));                                  // Uses a Promise to create a delay. The setTimeout function is used to delay the resolution of the Promise for the number of milliseconds calculated earlier.
}

const {By, Key, Builder} = require("selenium-webdriver");                                               // Imports necessary modules from the "selenium-webdriver" package, including By, Key, and Builder. These provide functionality to locate and interact with web elements and build the WebDriver.
require("chromedriver");                                                                                // Imports the "chromedriver" package, which is necessary for Selenium to interact with the Google Chrome browser.

async function MultipleWindows() {                                                                      // Defines asynchronous function which contains logic to open and interact with multiple browser windows.
    
    let driver = await new Builder().forBrowser("chrome").build();                                      // This line creates a new WebDriver instance using the Builder class and assigns it to driver variable. It specifies that the browser to be used is Chrome,
                                                                                                        //      then builds the driver instance. The await keyword is used to ensure that the driver is fully initialized before proceeding.
    await driver.get("http://127.0.0.1:8000/");                                                         // Instructs the WebDriver to open a web page with given URL using the get method.

    const windowOne = await driver.getWindowHandle();                                                   // Gets a handle to the current browser window and stores it in the windowOne variable. Used to switch between windows.

    await WaitSeconds(4);                                                                               // Pauses the execution for 4 seconds using the WaitSeconds function defined at top of program.                                                      

    await driver.switchTo().newWindow('window');                                                        // Instructs the WebDriver to open a new browser window. The string 'window' is a target name for the new window.

    await driver.get('https://selenium.dev');                                                           // Loads the given web page into the newly opened browser window.

    const windowTwo = await driver.getWindowHandle();                                                   // Gets a handle to the current browser window and stores it in the windowTwo variable. Used to switch between windows.                

    await WaitSeconds(4);                                                                               // Pauses the execution for 4 seconds using the WaitSeconds function defined at top of program.                                                                       
    
    await driver.switchTo().window(windowOne);                                                          // Switches the focus of the driver back to the first browser window.                

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.                                                                       

    await driver.findElement(By.name("username")).sendKeys("Andrew");                                   // Locates the first HTML element with name attribute, "username", and sends the text, "Andrew", to that element.                

    await driver.findElement(By.name("password")).sendKeys("Coaster76");                                // Locates the first HTML element with name attribute, "password", and sends the text, "Coaster76", to that element.                

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.findElement(By.css('[value="Login"]')).click();                                        // Locates the first HTML element with the attribute 'value' equal to "Login" using a CSS selector, then clicks on it.

    await WaitSeconds(4);                                                                               // Pauses the execution for 4 seconds using the WaitSeconds function defined at top of program.                                                                       

    await driver.switchTo().window(windowTwo);                                                          // Switches the focus of the driver back to the second browser window.
    
    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await driver.get('https://google.com');                                                             // Instructs the WebDriver to navigate to the given URL using the get method.

    await WaitSeconds(4);                                                                               // Pauses the execution for 4 seconds using the WaitSeconds function defined at top of program.                                                                      

    await driver.quit();                                                                                // Closes the WebDriver, terminating both browser sessions.               

    console.log('\n\nTest ran successfully.\n\n');                                                      // Logs a success message to the console

}

MultipleWindows();                                                                                      // MultipleWindows function is invoked to run the test.


// This version has persistent data, meaning if you are logged into account on first window, you are still logged in on second window



// const windowHandles = await driver.getAllWindowHandles();                                   
// const originalWindowHandle = windowHandles[0];
// const secondWindowHandle = windowHandles[1];