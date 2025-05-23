export abstract class PWWrappers{
 

    typeandEnter(locator:string,data:string){
           console.log(`${locator} with ${data}`)
    }

    abstract traceOptions():void;
}


export class loginPage extends PWWrappers{
    traceOptions(): void {
      console.log("trace enabled")
    }

}

let lp=new loginPage()
lp.typeandEnter("password","crmsfa")
