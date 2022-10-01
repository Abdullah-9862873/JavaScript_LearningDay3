// Map is also a call back function like forEach but the difference is that the map returns in the form of array

// const numbers = [3, 4, 6, 1, 8];

// function square(number){
//     return number*number;
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);



// const numbers = [3, 4, 6, 1, 8];

// const squareNumber = numbers.map(function(number){
//     return number*number;
// })
// console.log(squareNumber);


const numbers = [3, 4, 6, 1, 8];

const squareNumber = numbers.map(function(number, index){
    return (`Index: ${index}, ${number*number}`);
})

console.log(squareNumber);

// Example

const users = [
    {firstName: "Abdullah", age: 20},
    {firstName: "Husnain", age: 21},
    {firstName: "Ahmed", age: 22},
    {firstName: "Shazy", age: 20},
]

const userNames = users.map(function(obj){
    return obj.firstName;
})
console.log(userNames);