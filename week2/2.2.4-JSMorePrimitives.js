// create five variables and assign them values
let name = "Cesar";
let age = 27;
let completed = true;
let wage = null;
let height = undefined;
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(name);
console.log(age);
console.log(completed);
console.log(wage);
console.log(height);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
`Hi, my name is ${name}, and I am ${age} years old.`
// reassign the value of the variable that references "null"
let wage = 50;
// print the value and its type
console.log(typeof wage);
// print a variable that causes a ReferenceError
console.log(incomplete);
// alter the previous line to no longer cause a ReferenceError
console.log(completed);
