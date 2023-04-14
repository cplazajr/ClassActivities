const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
const lastItem = nums.pop();
console.log(lastItem);

const secondLastItem = nums.pop();
console.log(secondLastItem);
// remove each of the first two items with shift(), saving each item to a variable
const firstItem = nums.shift();
console.log(firstItem);

const secondItem = nums.shift();
console.log(secondItem);
// use push and unshift to add the variables back to the array in numerical order, 0-6
