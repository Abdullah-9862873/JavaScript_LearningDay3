// splice method
// start, delete, insert

const str = ["item1", "item2", "item3"];

// _________________________________________________________________
// delete 

            // This is mutable so it'll change the original 
            // But this also gives the output so you can store deleted item in a const

str.splice(1,1);

console.log(str);

//____________________________________________________________________

str.splice(1,0,"inserted item");
console.log(str);

//______________________________________________________________________

// Insert and delete together

const deletedItem = str.splice(1, 1, "new inserted item");
console.log(str);
console.log("Deleted item is: ", deletedItem);

// You can store deleted item in another const like
