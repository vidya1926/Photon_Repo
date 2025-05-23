"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var Page = /** @class */ (function () {
    function Page() {
    }
    Page.prototype.launchBrowser = function () {
        console.log("Launching in chrome");
    };
    return Page;
}());
exports.Page = Page;
var Base = /** @class */ (function (_super) {
    __extends(Base, _super);
    function Base() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Base.prototype.launchBrowser = function () {
        _super.prototype.launchBrowser.call(this); //super -->will calls the parent class method which is overriden in child class
        console.log("Launching Edge browser");
    };
    return Base;
}(Page));
var blaunch = new Base();
blaunch.launchBrowser();
