// Every method

// This method checks for every instance of the array and returns true only if the condition is true for every instance

// _______________________________________________________________

// Check for if the following array has even numbers or not
const numbers = [2, 4, 6, 8, 10];

const ans = numbers.every(num => num%2===0);

console.log(ans);

// ___________________________________________________________________

// Check for if the following array has even numbers or not
const otherNumbers = [2, 4, 8, 9, 10];

const secondAns = otherNumbers.every(num => num%2===0);

console.log(secondAns);

// ___________________________________________________________________

// Check if every product's price is less than 30k

const userCart = [
    {userId: 1, userProduct: "mobile", price: 12000},
    {userId: 2, userProduct: "tv", price: 15000},
    {userId: 3, userProduct: "laptop", price: 22000},
]

const ASNWER = userCart.every(function(obj){
    return obj.price<30000;
});
console.log(ASNWER);