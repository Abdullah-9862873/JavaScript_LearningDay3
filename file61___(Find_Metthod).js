// Find method is used to find the first occurence of a particular condition within array

const animals = ["elephant", "lion", "cat", "dog"];

const myAnimal = animals.find(function(string){
    return string.length===3;
});

console.log(myAnimal);

// This will ignore the next occurence and return only the first occurence whenever it finds

// _______________________________________________________________

const users = [
    {userId: 1, userName : "Abdullah"},
    {userId: 2, userName : "Ahmed"},
    {userId: 3, userName : "Shazy"},
    {userId: 4, userName : "Komal"},
    {userId: 5, userName : "Usama"},
]

const myUser = users.find(function(obj){
    return obj.userId===3;
});

console.log(myUser);


