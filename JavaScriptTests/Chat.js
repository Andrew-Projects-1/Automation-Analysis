/*
Andrew Moskowitz
CSCI 490 - Fall 23
This JavaScript program automates the interaction with a web application's live chat feature by utilizing two separate browser windows with individual drivers, allowing two users to engage with the chat interface simultaneously.
*/

async function WaitSeconds(seconds) {                                                                   // Defines an asynchronous function to pause the program for a specified number of seconds.
    const milliseconds = seconds * 1000;                                                                // Calculates the time in milliseconds for setting a timeout to wait.
    await new Promise((resolve) => setTimeout(resolve, milliseconds));                                  // Uses a Promise to create a delay. The setTimeout function is used to delay the resolution of the Promise for the number of milliseconds calculated earlier.
}

const {By, Key, Builder} = require("selenium-webdriver");                                               // Imports necessary modules from the "selenium-webdriver" package, including By, Key, and Builder. These provide functionality to locate and interact with web elements and build the WebDriver.
require("chromedriver");                                                                                // Imports the "chromedriver" package, which is necessary for Selenium to interact with the Google Chrome browser.

async function Chat() {                                                                                 // Defines asynchronous function which contains logic to open and interact with two broswer windows using two drivers and have two users use the live chat feature.

    let DriverOne = await new Builder().forBrowser("chrome").build();                                   // This line creates a new WebDriver instance using the Builder class and assigns it to DriverOne variable. It specifies that the browser to be used is Chrome,
                                                                                                        //      then builds the driver instance. The await keyword is used to ensure that the driver is fully initialized before proceeding.
    await DriverOne.get("http://127.0.0.1:8000/");                                                      // Instructs the WebDriver, Driver One, to open a web page with given URL using the get method.

    await DriverOne.findElement(By.name("username")).sendKeys("Andrew");                                // Locates the first HTML element with name attribute, "username", and sends the text, "Andrew", to that element.

    await DriverOne.findElement(By.name("password")).sendKeys("Coaster76", Key.RETURN);            // Locates the first HTML element with name attribute, "password", and sends the text, "Coaster76", to that element. Key.RETURN sends an enter keypress to the driver, submitting the form.

    await DriverOne.findElement(By.partialLinkText("Chat Rooms")).click();                              // Locates the first HTML element with partial link text, "Chat Rooms", and clicks on it.

    await DriverOne.findElement(By.id("room-name-input")).sendKeys("Testing123", Key.RETURN);           // Locates the first HTML element with id attribute, "room-name-input", and sends the text "Testing123" to that element. Key.RETURN then submits the input. 

    await WaitSeconds(4);                                                                               // Pauses the execution for 4 seconds using the WaitSeconds function defined at top of program.                                                                           

    let DriverTwo = await new Builder().forBrowser("chrome").build();                                   // This line creates another WebDriver instance for a second browser window, and assigns it to DriverTwo variable. 

    await DriverTwo.get("http://127.0.0.1:8000/");                                                      // Instructs DriverTwo to open a web page with given URL using the get method.            

    await DriverTwo.findElement(By.name("username")).sendKeys("Bill");                                  // Locates the first HTML element with name attribute, "username", and sends the text, "Andrew", to that element.

    await DriverTwo.findElement(By.name("password")).sendKeys("Coaster76", Key.RETURN);            // Locates the first HTML element with name attribute, "password", and sends the text, "Coaster76", to that element. Key.RETURN then submits the input.

    await DriverTwo.findElement(By.partialLinkText("Chat Rooms")).click();                              // Locates the first HTML element with partial link text, "Chat Rooms", and clicks on it.

    await DriverTwo.findElement(By.id("room-name-input")).sendKeys("Testing123", Key.RETURN);           // Locates the first HTML element with id attribute, "room-name-input", and sends the text "Testing123" to that element. Key.RETURN then submits the input. 

    await WaitSeconds(4);                                                                               // Pauses the execution for 4 seconds using the WaitSeconds function defined at top of program.                                                                         

    await DriverTwo.findElement(By.id("chat-message-input")).sendKeys("Hi Andrew!", Key.RETURN);        // In second window, locates the first HTML element with id attribute, "chat-message-input", and sends the text "Hi Andrew" to that element. Key.RETURN then submits the input. 

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.                                                                       

    await DriverOne.findElement(By.id("chat-message-input")).sendKeys("Hi Bill!", Key.RETURN);          // In first window, locates the first HTML element with id attribute, "chat-message-input", and sends the text "Hi Bill" to that element. Key.RETURN then submits the input. 
    
    await WaitSeconds(1);                                                                               // Pauses the execution for 1 seconds using the WaitSeconds function defined at top of program.
    
    await DriverOne.findElement(By.id("chat-message-input")).sendKeys("Pretty cool Capstone project right?", Key.RETURN); // In first window, locates the first HTML element with id attribute, "chat-message-input", and sends the given text to that element. Key.RETURN then submits the input.

    await WaitSeconds(2);                                                                               // Pauses the execution for 2 seconds using the WaitSeconds function defined at top of program.

    await DriverTwo.findElement(By.id("chat-message-input")).sendKeys("Very cool!", Key.RETURN);        // In second window, locates the first HTML element with id attribute, "chat-message-input", and sends the text "Very cool!" to that element. Key.RETURN then submits the input. 
    
    await WaitSeconds(1);                                                                               // Pauses the execution for 1 seconds using the WaitSeconds function defined at top of program.
    
    await DriverTwo.findElement(By.id("chat-message-input")).sendKeys("See ya!", Key.RETURN);           // In first window, locates the first HTML element with id attribute, "chat-message-input", and sends the text "See ya!" to that element. Key.RETURN then submits the input.

    await WaitSeconds(3);                                                                               // Pauses the execution for 3 seconds using the WaitSeconds function defined at top of program.

    await DriverTwo.findElement(By.partialLinkText("Exit Chatroom")).click();                           // In second window, locates the first HTML element with partial link text, "Exit Chatroom", and clicks on it.
    await DriverOne.findElement(By.partialLinkText("Exit Chatroom")).click();                           // In first window, locates the first HTML element with partial link text, "Exit Chatroom", and clicks on it.

    await WaitSeconds(2); 

    await DriverOne.quit();                                                                             // Closes first WebDriver, terminating first browser session.
    await DriverTwo.quit();                                                                             // Closes second WebDriver, terminating second browser session.

    console.log('\n\nTest ran successfully.\n\n');                                                      // Logs a success message to the console.

}

Chat();                                                                                                 // Chat function is invoked to run the test.

// This version of window management does not have persistent data, a new driver means a whole new instance. 
// Also having two drivers does not shift focus between the two when interacting.

