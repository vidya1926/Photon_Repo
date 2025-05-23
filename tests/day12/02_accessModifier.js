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
var accessModifier_1 = require("./accessModifier");
var PayRoll = /** @class */ (function (_super) {
    __extends(PayRoll, _super);
    function PayRoll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayRoll.prototype.taxCal = function () {
        console.log("New Salary");
    };
    return PayRoll;
}(accessModifier_1.Employee));
var pr = new PayRoll();
pr.taxCal();
console.log(pr.readSalary);
pr.writeSalary = 70000;
console.log(pr.readSalary);
