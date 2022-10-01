// let and const are block scope
// var is function scope

// {
//     // This is a block
//     let firstName = "Abdullah";
//     console.log(firstName);
// }

// console.log(firstName);      // This will throw error

// {
//     // This is block 2
//     let firstName = "Ahmed";
//     console.log(firstName);
// }



// {
//     var firstName = "Abdullah";
//     console.log(firstName);
// }

// console.log(firstName);


function myapp(){
    if(true){
        var firstName = "Abdullah";
        console.log(firstName);
    }
    console.log(firstName);
}
myapp();

// The following will throw an error

// function myapp(){
//     if(true){
//         let firstName = "Abdullah";
//         console.log(firstName);
//     }
//     console.log(firstName);
// }
// myapp();