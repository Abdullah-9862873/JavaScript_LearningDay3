// Hoisting
greet();

function greet(){
    console.log("Hello! How are you?");
}



// IN function declaration if you call the function before declaration and declatre the funciton later then it will still work

// But this case will not work for function expression and arrow functions

console.log(greet1);

var greet1 = "Hello";

// if we use var to declare variable and we use it before the declaration of the variable then it will print undefined 

// But this case is not true for let and const
