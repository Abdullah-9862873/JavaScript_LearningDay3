// Function inside function


function app(){
    const myFunc = () => {
        console.log("Hello from myFunc");
    }

    const Sum = (num1, num2) => {
        return num1+num2;
    }
    
    const mul = (num1, num2) => num1*num2;
    console.log("Hello from app");
    myFunc();
    console.log(Sum(2,5));
    console.log(mul(2,3));
}

app();