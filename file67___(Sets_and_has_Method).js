// Sets 

// Sets can store data
// Have unique values
// Have their own methods
// No fixed order
// Is not iterateable
// Can have multiple data types as values
// No index based access

//_____________________________________________________


// const number = new Set([1, 2, 3]);
// console.log(number);

// __________________________________________________

// const number = new Set();
// number.add(1);
// number.add(2);
// number.add(2);
// console.log(number);

// _______________________________________________________

const number = new Set();
number.add(1);
number.add(2);
number.add(2);
number.add(["item1", "item2"]);
number.add(["item1", "item2"]);
console.log(number);

// This will add these two values because in Javascript the array items are stored as different values irrespective of the values they possess

// This is because we have written different array

// ___________________________________________________________

// Check if the number is present in the set or not

if(number.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}

//____________________________________________________________

// If we write same array once and add it to Sets twice

const items = ["item1", "item2"];
const otherNumber = new Set();
otherNumber.add(items);
otherNumber.add(items);
console.log(items);

// Because in our memory the array is made only once

// ________________________________________________________

// So sets are iterables

const dummynumbers = new Set();
dummynumbers.add(1);
dummynumbers.add(2);
dummynumbers.add(3);
dummynumbers.add(4);
dummynumbers.add(5);
dummynumbers.add(6);
dummynumbers.add(7);

for(let dummynumber of dummynumbers){
    console.log(dummynumber);
}

// ____________________________________________________

const myArray = [1, 2, 4, 4, 5, 6, 5, 6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);

console.log(myArray.length);
const lengthCalc = [...uniqueElements];
console.log(`The length of unique elements is: ${lengthCalc.length}`);
