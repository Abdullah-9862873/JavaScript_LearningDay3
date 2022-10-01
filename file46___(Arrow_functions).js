// Function declaration

// function singBirthdaySong(){
//     console.log("Happy Birthday to you....");
// }

// Function Expression

// const singBirthdaySong = function(){
//     console.log("Happy Birthday to you...");
// }

// Arrow Function

const singBirthdaySong = () => {
    console.log("Happy Birthday to you...");
}

singBirthdaySong();

// If there is one parameter then no need to write parenthesis

const isEven = number => number%2===0;

console.log(isEven(2));




const sum = (num1, num2) => {
    return num1+num2;
}

console.log(sum(2,3));


const firstChar = str => console.log(str[0]);

firstChar("Abdullah");
