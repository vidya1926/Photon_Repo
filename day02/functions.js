
login()

function login(){
    console.log("Login is sucessful")
}

//Function expression
let sum= function math(a,b){
    console.log(a+b)
}

sum(2,3)

//anonymous function
let credentials= function (){
    console.log("credentials" )
}

credentials()

//arrow function => fat arrow
let add=(a,b)=>{ 
    
    return a+b
}
let result=add(4,5)
console.log (result)
//asynchronous 
//callback function
setTimeout(credentials, 2000);

console.log("Learning async ")
