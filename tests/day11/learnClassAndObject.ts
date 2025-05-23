

let type:any
export class Browser{
    //property
    browserName:string="Chrome"  //-->class property --global property
    browserVersion:number=133.45
    
    constructor(page:string){
        this.printBrowserDetails("Chromium" + page)
    }

     printBrowserDetails(browserType:string){
       type=browserType 
       console.log(`Get the browser detaial ${this.browserName} : ${this.browserVersion} ${browserType}`)
     }
}

//create an object always outside the class
let browserData=new Browser("page") //reference for the class
//browserData.printBrowserDetails("chromium")
