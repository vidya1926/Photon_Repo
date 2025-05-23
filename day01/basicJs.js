let numbers = [1,3,6,7,9,12,14]
let sum = 0;
for(let index = 0; index < numbers.length; index++){
    if(numbers[index] % 2 === 0){
        sum += numbers[index]
    }
}
console.log(sum)