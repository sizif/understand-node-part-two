// object properties and methods
var obj = { // I'll create the object with obj literal syntax
    greet: 'Hello' // I have a name and value, so that's my property
}

console.log(obj.greet); // I can access the property
console.log(obj['greet']); // I can also use this syntax, brackets and sting
var prop = 'greet'; // I could even set a variable equal to a string value
console.log(obj[prop]); // ...and then use that variable, 
                        // ...this isn't itself property, it's a var name, not
                        // ...the name of the property, but rather the string
                        // ...that the variable points to is what will be used,
                        // ...and THAT is the name of the property 
/*
This is key: I can have a variable set to a string, and then use that variable
value (the string), to get at a particular property of an object
*/

// functions and arrays
var arr = [];

arr.push(function() {
    console.log('Hello world 1');
});
arr.push(function() {
    console.log('Hello world 2');
});
arr.push(function() {
    console.log('Hello world 3');
});

// There's a number of ways I can loop over an array,
// but I can use forEach and pass it a function, and pass "item"
// as the param in the array. The "item", is the 'iterator' here
// the item is literally this code:
/*
function() {
    console.log('Hello world $');
*/
// so the below code is going to call every function sitting in the array,
// and there are 3 of them
arr.forEach(function(item) {
    item();
});
