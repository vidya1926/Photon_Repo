"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapperClass = void 0;
var WrapperClass = /** @class */ (function () {
    function WrapperClass() {
    }
    WrapperClass.prototype.screenshot = function () {
        console.log("take screenshot after each test");
    };
    WrapperClass.prototype.getAttribute = function () {
        console.log("fetch the attribute value");
    };
    WrapperClass.prototype.clearAndType = function (locator, timeout) {
        console.log("clear the text field and type in the text");
    };
    return WrapperClass;
}());
exports.WrapperClass = WrapperClass;
var wc = new WrapperClass();
wc.clearAndType("username", 3000);
wc.getAttribute();
wc.screenshot();
