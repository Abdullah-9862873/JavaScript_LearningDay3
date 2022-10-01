// Call back function


// We can pass a function as a parameter to another function and this is called callback function


// function myFunc(callback){
//     console.log("hello World");
//     callback();
// }

// function myFunc2(){
//     console.log("inside myFunc2");
// }

// myFunc(myFunc2);


function myFunc(callback){
    console.log("Inside myFunc");
    callback("Abdullah");
}

function myFunc2(name){
    console.log(`Your name is ${name}`);
}

myFunc(myFunc2);


// For convention we write callback but you can also write any other stuff like a, num, etc. in place of callback


// function myFunc(callback){
//     console.log("Hey there");
//     callback(20);
// }

// function myFunc2(age){
//     console.log("inside myFunc2");
//     console.log(`My age is ${age}`);
// }

// myFunc(myFunc2);