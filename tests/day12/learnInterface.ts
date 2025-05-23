import { PWWrappers } from "./learnAbstractclass";


export interface PageActions{

  //always have the design
  //implementation details to it

  clearAndType(locator:string,timeout:number):void;

}


export interface ElementAction extends PageActions {

    getAttribute():void;
}


export interface reporter{
    screenshot():void;
}


export class WrapperClass extends PWWrappers implements ElementAction,reporter {
    traceOptions(): void {
       console.log("trace is enabled")
    }
    screenshot(): void {
       console.log("take screenshot after each test")
    }
    getAttribute(): void {
        console.log("fetch the attribute value")
    }
    clearAndType(locator: string, timeout: number): void {
      console.log("clear the text field and type in the text")
    }
   

}

let wc=new WrapperClass()
wc.clearAndType("username",3000)
wc.getAttribute()
wc.screenshot()


