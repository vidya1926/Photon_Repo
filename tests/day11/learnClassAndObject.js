"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
var type;
var Browser = /** @class */ (function () {
    function Browser() {
        //property
        this.browserName = "Chrome"; //-->class property --global property
        this.browserVersion = 133.45;
        this.printBrowserDetails("Chromium");
    }
    Browser.prototype.printBrowserDetails = function (browserType) {
        type = browserType;
        console.log("Get the browser detaial ".concat(this.browserName, " : ").concat(this.browserVersion, " ").concat(browserType));
    };
    return Browser;
}());
exports.Browser = Browser;
//create an object always outside the class
var browserData = new Browser(); //reference for the class
//browserData.printBrowserDetails("chromium")
