## Table of Contents

1. **[Handling Multiple Windows (Pop-ups)](#handling-multiple-windows-pop-ups)**
   - [Sequential Approach](#sequential-approach)
   - [Promise.all for Multiple Windows](#promiseall-for-multiple-windows)
   - [waitForEvent('page')](#waitforeventpage)

## Handling Multiple Windows (Pop-ups)

Managing multiple windows is vital for comprehensive testing, particularly for applications that open new tabs or windows.

### Sequential Approach

```javascript
// Sequentially handling new windows
    const windowPromise = context.waitForEvent('page');
    await page.getByText("Open",{exact:true}).click();
    const window = await windowPromise;
```
### Promise.all for Multiple Windows

```javascript
// Coordinating the opening of several windows simultaneously
const [window1, window2] = await Promise.all([
    context.waitForEvent('page'),
    context.waitForEvent('page'),
    page.click('#open-first-window'),
    page.click('#open-second-window')
]);
```
### waitForEvent('page')

```javascript
// Detecting a new page following an action
const newPage = await context.waitForEvent('page');
page.click('#open-new-window');
```
### File Upload
Automating file uploads through web forms is crucial for testing upload functionalities.

```javascript

// Setting files on input elements to simulate file selection
await page.setInputFiles('#upload-selector', 'path/to/file.txt');
setFiles
// Interacting with file chooser dialogs
const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.click('#upload-btn')
]);
await fileChooser.setFiles('path/to/file.txt');
```
### File Downloads with Playwright
Automating file downloads ensures the correct handling of files from web applications. This guide covers managing the download process and saving the downloaded files to a specific location using Playwright.

Download Event and suggestedFilename
To manage the download process and retrieve the suggested filename, use the download event in combination with the suggestedFilename() method.

```javascript
const fileDownloadPromise = page.waitForEvent('download');
await page.getByRole('button', {name:'Download'}).click();
const fileDownloader = await fileDownloadPromise;
console.log('Suggested Filename:', download.suggestedFilename());
```
In this example, Playwright waits for the download event to be triggered by clicking on the download link. Once the download starts, it logs the suggested filename.

Saving the Downloaded File
To save the downloaded file to a specific location, use the download.path() method along with the saveAs() method.

### Example
const path = await download.path();
await download.saveAs('/path/to/save/file');
This example demonstrates how to retrieve the path of the downloaded file and save it to a specified location on your filesystem.

### Final Notes
Ensure Correct Paths: Make sure the paths to save the files are correctly specified and that the application has the necessary permissions to write to those paths.
Handling Multiple Downloads: For handling multiple downloads, ensure each download event and file save operation is correctly awaited to avoid conflicts.

### JSON
You can read data from a JSON file using the Node.js fs module or any other preferred library.

Example
import fs from 'fs';

const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// Use jsonData in your tests
### CSV
To read data from a CSV file, you can utilize libraries like csv-parse combined with fs.

Example
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const loginData = parse(fs.readFileSync(path.join(__dirname, "testData.csv")), {
    columns: true,
    skip_empty_lines: true,
    skip_records_with_empty_values: true
});

for (const data of loginData) {
    test(`Learn to read data from CSV file for ${data.testId}`, async ({ page }) => {
        await page.goto("http://www.leaftaps.com/opentaps");
        await page.fill("#username", data.username);
        await page.fill("#password", data.password);
        await page.click(".decorativeSubmit");
    });
}