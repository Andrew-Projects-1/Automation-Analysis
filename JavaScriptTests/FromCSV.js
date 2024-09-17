/*
Andrew Moskowitz
CSCI 490 - Fall 23
This JavaScript program automates the process of interacting with the register functionality of a web application and reading information from an excel spreadsheet as the input data. 
*/

async function WaitSeconds(seconds) {                                                                   // Defines an asynchronous function to pause the program for a specified number of seconds.
    const milliseconds = seconds * 1000;                                                                // Calculates the time in milliseconds for setting a timeout to wait.
    await new Promise((resolve) => setTimeout(resolve, milliseconds));                                  // Uses a Promise to create a delay. The setTimeout function is used to delay the resolution of the Promise for the number of milliseconds calculated earlier.
}

const {By, Key, Builder} = require("selenium-webdriver");                                               // Imports necessary modules from the "selenium-webdriver" package, including By, Key, and Builder. These provide functionality to locate and interact with web elements and build the WebDriver.
require("chromedriver");                                                                                // Imports the "chromedriver" package, which is necessary for Selenium to interact with the Google Chrome browser.

const XLSX = require("xlsx");                                                                           // Imports xlsx package which is used for reading Excel files in JavaScript.

async function FromCSV(){                                                                               // Defines asynchronous function which contains logic to read from an excel spreadsheet and input the information into a web application.

    let driver = await new Builder().forBrowser("chrome").build();                                      // This line creates a new WebDriver instance using the Builder class and assigns it to driver variable. It specifies that the browser to be used is Chrome,
                                                                                                        //      then builds the driver instance. The await keyword is used to ensure that the driver is fully initialized before proceeding.
    const workbook = XLSX.readFile("../Book1.xlsx")                                                     // This line reads the Excel file located at this local address using the XLSX.readFile() function and stores the workbook in the workbook variable.
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];                                          // This line retrieves the first sheet in the Excel workbook and stores it in the worksheet variable which will be where the data is read from.

    function getTargetCell(l, cellNumber) {                                                             // Defines function that takes a letter, l, and a number, cellNumber, to construct an Excel cell address and returns the corresponding cell from the worksheet.
        const cellLetter = String.fromCharCode(65 + l);                                                 // This line calculates the letter corresponding to the number 'l' using the String.fromCharCode() method to convert ASCII to actual character representation.
        const result = cellLetter.concat(cellNumber);                                                   // This line concatenates cellLetter and cellNumber to form a cell address, such as 'A1'.
        const targetCellAddress = result;                                                               // This line assigns the constructed cell address to targetCellAddress variable. 
        const targetCell = worksheet[targetCellAddress];                                                // This line uses targetCellAddress to retrieve the corresponding cell object form the Excel worksheet.
        return targetCell;                                                                              // Returns targetCell which is the Excel cell object corresponding to the specified cell address.
    }

    async function sendTargetCellValue(driver, l, cellNumber, targetElement) {                          // Defines asynchronous function responsible for sending the value from an Excel cell to a specific web element. 
        var targetCell = getTargetCell(l, cellNumber);                                                  // This line calls the getTargetCell function to retrieve an Excel cell object and assigns it to targetCell variable.
        if (targetCell) {                                                                               // If targetCell is defined, continue with code block.
            var targetCellValue = targetCell.v;                                                         // This line retrieves the value of targetCellValue by accessing its .v property.
            await driver.findElement(By.name(targetElement)).sendKeys(`${targetCellValue}`);            // Locates first HTML element with name attribute defined by targetElement, and sends the text defined by targetCellValue to that element.
        }
    }

    await driver.get("http://127.0.0.1:8000/login/");                                                   // Instructs the WebDriver to open a web page with given URL using the get method.

    for (let cellNumber = 1; cellNumber <= 4; cellNumber++){                                            // Enters a for loop to process Excel data and populate the web form fields, iterating over cellNumber from one to four, representing rows in the Excel sheet.
        var l = 0;                                                                                      // Assigns the value 0 to the l variable, representing A.
        await driver.findElement(By.partialLinkText("Register")).click();                               // Locates the first HTML element with partial link text, "Register", and clicks on it.

        await sendTargetCellValue(driver, l, cellNumber, "username");                                   // Calls the sentTargetCellValue function with the driver, l (A), cellNumber, and the target element as arguments to send the value to the element. 

        l++;                                                                                            // Increases the value of l, which in turn increments A to B.
        await sendTargetCellValue(driver, l, cellNumber, "email");                                      // Calls the sentTargetCellValue function with the driver, l (B), cellNumber, and the target element to send the value to. 

        l++;                                                                                            // Increases the value of l, which in turn increments B to C.
        await sendTargetCellValue(driver, l, cellNumber, "password1");                                  // Calls the sentTargetCellValue function with the driver, l (C), cellNumber, and the target element to send the value to. 
        
        l++;                                                                                            // Increases the value of l, which in turn increments C to D.
        await sendTargetCellValue(driver, l, cellNumber, "password2");                                  // Calls the sentTargetCellValue function with the driver, l (D), cellNumber, and the target element to send the value to. 

        await WaitSeconds(1);                                                                           // Pauses the execution for 1 second using the WaitSeconds function defined at top of program.
        await driver.findElement(By.partialLinkText("Cancel")).click();                                 // Locates the first HTML element with partial link text, "Cancel", and clicks on it. Cancelling allows the ability to run this test indefinitely without having to change information. 
        await WaitSeconds(1);                                                                           // Pauses the execution for 1 second using the WaitSeconds function defined at top of program.
       
    }
    
    await driver.quit();                                                                                // Closes the WebDriver, terminating the browser session.

    console.log('\n\nTest ran successfully.\n\n');                                                      // Logs a success message to the console.

}

FromCSV();                                                                                              // FromCSV function is invoked to run the test.


// Another way to pause
// await new Promise((resolve) => setTimeout(resolve, 2000));