

// const sum = function(a, b){
//     if(a === undefined){
//         a = 0;
//     }
//     if(b === undefined){
//         b=0;
//     }
//     return a+b;
// }

// const ans = sum(3);
// console.log(ans);


// Same thing can be done by using default parameters

const sum = function(a=0, b=0){
    return a+b;
}

const ans = sum(1,2);
console.log(ans);

// We have set the default values so if one value is not given while calling the function it will take the default value
