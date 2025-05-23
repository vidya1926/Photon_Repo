"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakerData = void 0;
var faker_1 = require("@faker-js/faker");
var FakerData = /** @class */ (function () {
    function FakerData() {
    }
    FakerData.getFirstname = function () {
        return faker_1.faker.person.firstName();
    };
    FakerData.gettomorowsDate = function () {
        var date = new Date();
        var month = String(date.getMonth() + 1); //month is 0 indexed
        console.log(month);
        var day = String(date.getDate());
        var year = String(date.getFullYear());
        var hours = date.getHours(); //give 24 hour format   
        // Convert 0 to 12 for 12 AM\
        var minute = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        // Convert 0 (midnight) to 12, and 13–23 to 1–11
        hours = hours % 12 || 12;
        var formattedHours = ("0".concat(hours)).slice(-2);
        console.log("".concat(month, "/").concat(day, "/").concat(year, ": ").concat(formattedHours, ":").concat(minute).concat(ampm));
    };
    return FakerData;
}());
exports.FakerData = FakerData;
FakerData.gettomorowsDate();
