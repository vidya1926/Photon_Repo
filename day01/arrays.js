let browserDetails=["Chrome",122.45,true]

console.log(browserDetails.length) //
// -->count of elements in the array
//accessed based on the index

browserDetails[7]="Firefox"
console.log(browserDetails)
console.log(browserDetails.length)

let companyName= new Array("Photon","Testleaf","Qeagle")

//push, unshift --add the data from first and last position

 browserDetails.push("WebKit","Edge")
console.log(browserDetails)



browserDetails.unshift("Chromium","IE")
console.log(browserDetails)

// pop,shift - delete the data from first and last position

browserDetails.pop()
console.log(browserDetails)

browserDetails.shift()
console.log(browserDetails)

browserDetails.splice(2,2,"Edge","Safari")
//removes the element from the particular index , count of elements to be removed, supports to insert inew elements in that position
console.log(browserDetails)

console.log(browserDetails.slice(2,4))

let employee= ["emp01","emp02",["id","userData"],"emp03"]
console.log("The flat array  "+employee.flat())

console.log(employee[2])
 console.log(employee.indexOf("emp02"))

for(const eachele of employee){
    if(Array.isArray(eachele)){
        //console.log(eachele)
    }
}


//..spread syntax -->append two arrays
let a=[1,2,3,4,5]
let b=[2,3,4,5,6]

let c=[...a,...b]

console.log(c)

let uniqueArray=[...new Set([...a,...b])]
console.log(uniqueArray)

