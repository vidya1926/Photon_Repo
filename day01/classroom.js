const browserVersion = "Chrome";  

function getBrowserVersion() {
    let browserVersion = "Firefox";
    if (browserVersion === "Chrome") {
        let browserVersion = "Chromium";  
        console.log("Inside function: " + browserVersion);  
    }

    console.log("Outside block: " + browserVersion); 
}

getBrowserVersion();  
console.log("Globally: " + browserVersion);