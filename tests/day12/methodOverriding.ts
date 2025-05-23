export class Page{
        launchBrowser(){
        console.log("Launching in chrome")
      }
}

class Base extends Page{
     launchBrowser() {
          super.launchBrowser()  //super -->will calls the parent class method which is overriden in child class
          console.log("Launching Edge browser")
     }
}

let blaunch=new Base()
blaunch.launchBrowser()