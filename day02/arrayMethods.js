
let num=[2,5,7,3,1]

//num.sort()

//console.log(num)

//num.sort((a,b)=>a-b)

//console.log(num)

/**(a,b)=>b-a
 * 2,5 -->5-2 
 * 5,7 -->
 * 7,5,3,2,1
 */


//filter -->search for a particular match 

let matchingvalue=num.filter(ele=>ele==7)
console.log(matchingvalue)

const userData=[
    {user:"Vidya",active:true},
    {user:"user2",active:false},
    {user:"user3",active:true}
]

let activeUsers=userData.filter(ele=>ele.active==true)
//console.log(activeUsers)

//map -->modify the original array

let modifiedArray=num.map((doubledValue,val)=>doubledValue+val)
//console.log(modifiedArray)

console.log(num.reduce((a,b)=>a+b))
