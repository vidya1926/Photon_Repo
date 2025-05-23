import { Employee } from "./accessModifier";
import { FakerData } from "./fakerUtil";

class PayRoll extends Employee{

  taxCal(){
     console.log(FakerData.getFirstname())
    console.log("New Salary")
  }

}


let pr=new PayRoll()
pr.taxCal()
console.log(pr.readSalary)
pr.writeSalary=70000
console.log(pr.readSalary)

