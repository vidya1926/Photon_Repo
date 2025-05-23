let word = 'javascript'
console.log(word)
let reversedString = ''
for (let i = word.length; i >= 0; i--) {
    reversedString = reversedString +  word.charAt(i)
}
console.log(reversedString)

//javascript -->tp...
//i=6 ,6>=0,i--
//word(6)-->t
//split method -->words into array 

console.log(word.split(''))

console.log(word.split('').reverse().join(''))

let sentence="Learning string in javascript session"

console.log(sentence.split(" ").reverse().join(" "))

//replace ,replaceAll
console.log(word.replaceAll("a","$"))

let leadID="user$123"
//regrx pattern
console.log(leadID.replaceAll(/[^0-9]/g ,"")) //except numbers from 0-9 replace all the characters with space

let pdtPrice="Rs.30,500"

let price =pdtPrice.match(/\d/g).toString().replaceAll(",","")
console.log(typeof price)

let discount=price/100
console.log(typeof discount)

let prce=parseInt(price)
console.log(typeof prce)

const a ="JavaScript"
let targetEle='a'
let count =0
for(let i=0;i<a.length;i++){
if(a[i]===targetEle){
count++
}
}
console.log(count)