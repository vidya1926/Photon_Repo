export class Element{

//    click(locator:string,forceClick:boolean)

//   click(sele:string,timeout:number):void
//   click(Slocator:string,mode:string):string


   click(locator:string,forceClick?:boolean){
        if(forceClick==true){
            console.log("Click the element forcefully")
        }else{
            console.log("click the element normallly")
        }
   }

}

let ele=new Element()
ele.click("text=crmsfa")
ele.click("text=crmsfa",true)