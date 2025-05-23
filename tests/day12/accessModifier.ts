export class Employee{
   empName:string
   protected empId:string
   private empSalary:number
   protected readonly empPhno:number

   constructor(){
    this.empName="Vidya"
    this.empId="TL12"
    this.empSalary=40000
    this.empPhno=78932649201
   }

   printEmpdetails(){
     //this.empPhno=46900738902 as it is decalred as readonly -->not modifiable
     console.log(`The employe details ${this.empName}:${this.empId}:${this.empSalary}:${this.empPhno}`)
   }

  public get readSalary(){
    return this.empSalary
  }


  public set writeSalary(newSalary:number){
     this.empSalary=newSalary
  }

    
}

// new Employee().printEmpdetails()
// new Employee().empName
// let sal=new Employee()
// console.log(sal.readSalary)
// sal.writeSalary=60000
// console.log(sal.readSalary)


class HR extends Employee {
 
    admin(){           
           console.log(this.empId)
    }
    
}