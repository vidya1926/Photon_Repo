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
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
        this.empName = "Vidya";
        this.empId = "TL12";
        this.empSalary = 40000;
        this.empPhno = 78932649201;
    }
    Employee.prototype.printEmpdetails = function () {
        //this.empPhno=46900738902 as it is decalred as readonly -->not modifiable
        console.log("The employe details ".concat(this.empName, ":").concat(this.empId, ":").concat(this.empSalary, ":").concat(this.empPhno));
    };
    Object.defineProperty(Employee.prototype, "readSalary", {
        get: function () {
            return this.empSalary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "writeSalary", {
        set: function (newSalary) {
            this.empSalary = newSalary;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
exports.Employee = Employee;
// new Employee().printEmpdetails()
// new Employee().empName
// let sal=new Employee()
// console.log(sal.readSalary)
// sal.writeSalary=60000
// console.log(sal.readSalary)
var HR = /** @class */ (function (_super) {
    __extends(HR, _super);
    function HR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HR.prototype.admin = function () {
        console.log(this.empId);
    };
    return HR;
}(Employee));
