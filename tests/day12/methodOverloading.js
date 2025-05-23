"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
var Element = /** @class */ (function () {
    function Element() {
    }
    //    click(locator:string,forceClick:boolean)
    //   click(sele:string,timeout:number):void
    //   click(Slocator:string,mode:string):string
    Element.prototype.click = function (locator, forceClick) {
        if (forceClick == true) {
            console.log("Click the element forcefully");
        }
        else {
            console.log("click the element normallly");
        }
    };
    return Element;
}());
exports.Element = Element;
var ele = new Element();
ele.click("text=crmsfa");
ele.click("text=crmsfa", true);
