

function myFunc(){
    function hello(){
        console.log("Hello World");
    }
    return hello;
}

const ans = myFunc();
ans();


