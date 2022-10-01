// Parameter Destructuring

const person = {
    name : "Abdullah",
    gender: "male",
};

// const myFunc = function(){
//     console.log(person.name);
//     console.log(person.gender);
// }

// myFunc();

// By using Param Destructuring

function printDetails({name, gender}){
    console.log(name);
    console.log(gender);
}

printDetails(person);

