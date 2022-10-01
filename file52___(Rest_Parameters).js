// Rest Parameters

// const myFunc = function(a, b, c){
//     console.log(`The value of a is ${a}`);
//     console.log(`The value of b is ${b}`);
//     console.log(`The value of c is ${c}`);
// }

// myFunc(1, 2, 3, 4, 5, 6);

// This will only take first three values and store them

// To store the rest values we can use spread operator or rest parameter method


const myFunc = function(a,b, ...c){
    console.log(`The value of a is ${a}`);
    console.log(`The value of b is ${b}`);
    console.log(`The value of c is ${c}`);
}

myFunc(1, 2, 3, 4, 5, 6, 7);


// Example

const addAllNumbers = function(...numbers){
    // This will take the numbers as arrays
    let sum = 0;
    for(let it of numbers){
        sum = sum + it;
    }
    return sum;
}

const ans = addAllNumbers(1, 2, 3, 4, 5);
console.log(ans);