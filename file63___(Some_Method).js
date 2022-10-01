// some method

// It returns true even if only one value satisfies the condition

// _________________________________________________________________

// Question: Check if the array contain a value which is even

const numbers = [1, 3, 5, 8, 9];

const ans = numbers.some(num => num%2===0);

console.log(ans);

// _________________________________________________________________

const userCart = [
    {userId: 1, userProduct: "mobile", price: 12000},
    {userId: 2, userProduct: "tv", price: 15000},
    {userId: 3, userProduct: "laptop", price: 22000},
    {userId: 4, userProduct: "macbook", price: 250000},
]

// Check if any product has price greater than 2lac

const secondAns = userCart.some(function(obj){
    return obj.price>200000;
});

console.log(secondAns);
