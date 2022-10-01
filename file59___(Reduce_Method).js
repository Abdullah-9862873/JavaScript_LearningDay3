// Reduce method

const numbers = [1, 2, 3, 4, 5];

// aim: To sum all the numbers

const sum = numbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});

console.log(sum);


// accumulator      currentValue        return 
// 1                    2                   3
// 3                    3                   6
// 6                    4                   10
// 10                   5                   15


const userCart = [
    {userId: 1, userProduct: "mobile", price: 12000},
    {userId: 2, userProduct: "tv", price: 15000},
    {userId: 3, userProduct: "laptop", price: 22000},
]

// let sumOfPrice = 0;

// for(let key of userCart){
//     sumOfPrice += key.price;
// }

// console.log(sumOfPrice);


const sumOfPrice = userCart.reduce(function(accumulator, currentProduct){
    return accumulator + currentProduct.price;
}, 0)

console.log(sumOfPrice);

// Here we have set the initial value of accumulator to 0 