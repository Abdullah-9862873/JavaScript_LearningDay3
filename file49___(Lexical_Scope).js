const myVar = 2;

function app(){
    const myFunc = () => {
        const myFunc2 = function(){
            console.log("first value", myVar);
        }
        myFunc2();
    }
    myFunc();
}

app();

// First it will check if the current function have the variable declared myVar and then it'll look for the parent functions and lastly it'll look for it globally and it'll find and print the answer.