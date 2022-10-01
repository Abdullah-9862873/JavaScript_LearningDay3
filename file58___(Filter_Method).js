// Filter method


const numbers = [1, 3, 2, 6, 4, 8];

// const odd = [];
// const even = [];

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] === 0){
//         even.push(numbers[i]);
//     }
//     if(numbers[i]%2===0){
//         even.push(numbers[i]);
//     }else if(numbers[i]%2 !== 0){
//         odd.push(numbers[i]);
//     }
// }

// console.log(odd);
// console.log(even);



// Filter function takes callback function as an argument and returns true or false and stores in array...

function isEven(number){
    return number%2===0;
    // Returns even numbers
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);


// function isOdd(number){
//     return number%2 !== 0;
// }

// const oddNumbers = numbers.filter(isOdd);
// console.log(oddNumbers);

const oddNUmbers = numbers.filter(number => {
    return number%2 !== 0;
});

console.log(oddNUmbers);

