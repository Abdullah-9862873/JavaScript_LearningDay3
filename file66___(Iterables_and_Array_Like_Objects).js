// iterables

// String and arrays are iterables
// You can use for of loop in them

// _________________________________________
const array = [1, 2, 3, 4, 5];
for(let it of array){
    console.log(it);
}




// const str = "Abdullah";
// for(let it of str){
//     console.log(it);
// }
// ________________________________________

// Array like objects

// string is an array like object because we can use 
// length property in it and
// can access using indexing

const str = "Abdullah";
console.log(str.length);
console.log(str[2]);