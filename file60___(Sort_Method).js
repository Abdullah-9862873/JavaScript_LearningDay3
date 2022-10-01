// sort method

// __________________________________________________________________
const names = ["abdullah", "ahmed", "komal", 
"shazy"];

names.sort();
console.log(names);

// This will sort them according to the increasing ASCII values of the first 
// character of string

// ASCII of a is 97 so it'll be putted first and so on

// In case of capital letter they are all putted first 

// ASCII of A is 65 so it'll come first


// This is used to sort the string according to the dictionary rules like first "a" then "aa" then "aaa"

//  ________________________________________________________________

const numbers = [5, 9, 1200, 400, 3000];

numbers.sort();  // This will sort it by taking the numbers as strings and checking their ascii values

// _____________________________________________________________________

// The following will give the exact output as if a-b gives positive values then b will come first and then a

// If a-b gives negative values then a comes first then b


numbers.sort(function(a,b){
    return a-b;
});

console.log(numbers);

// __________________________________________________________________________

const products = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 3000},
    {productId: 3, productName: "p3", price: 200},
    {productId: 4, productName: "p4", price: 8000},
    {productId: 5, productName: "p5", price: 500},
]

//                                      ________                        
// sort them according to price low to high

// const pricesOfProducts = products.map(function(obj){
//     return obj.price;
// })

// console.log(pricesOfProducts);

// pricesOfProducts.sort(function(a,b){
//     return a-b;
// });

// console.log(pricesOfProducts);

//                                      __________



// sort them according  to low to high

const lowToHigh = products.slice(0).sort(function(a, b){
    return a.price-b.price;
});
console.log(lowToHigh);

// sort them according to high to low

const highToLow = products.slice(0).sort(function(a,b){
    return b.price-a.price;
});
console.log(highToLow);