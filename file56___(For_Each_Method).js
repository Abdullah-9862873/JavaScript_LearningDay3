// For Each is used to get the number as well as index of array... It is kinda loop

// ________________________________________

// const numbers = [..."12345"];

// function myFunc(number, index){
//     console.log(`The index is ${index} and the number is ${number}`);
// }

// for(let i=0; i<numbers.length; i++){
//     myFunc(numbers[i], i);
// }

// >>>>>>>This is another method to work<<<<<<<<<<

// const numbers = [..."12345"];

// function myFunc(number, index){
    //     console.log(`The index is ${index} and the number is ${number}`);
    // }
    
    // numbers.forEach(myFunc);
    
    
// >>>>>>>This is another method to work<<<<<<<<<<

const numbers = [..."12345"];

// numbers.forEach(function(number, index){
//     console.log(`The index is ${index} and the number is ${number}`);
// });

numbers.forEach(function(number, index){
    console.log(`"The index is ${index} and the ${number}*2 = ${number*2}`);
})



const users = [
    {firstName: "Abdullah", age: 20},
    {firstName: "Husnain", age: 21},
    {firstName: "Ahmed", age: 22},
    {firstName: "Shazy", age: 20},
]

// function printDetails(obj){
//     console.log(obj.firstName)
// }

// users.forEach(printDetails);

users.forEach(function(obj){
    console.log(obj.firstName);
});
