let age = 27;

// Write an If Else statement
if (age) {
  console.log("Renting a car is more affordable");
} else {
  console.log("Something else man");
}
// if age is greater than or equal to 25,
// console.log "Renting a car is more affordable."
// if age is less than 25
// console.log "Renting a car is very expensive."

// Chaining if statements: if - else if - ... - else

// if age is greater than or equal to 25,
if (age >= 25) {
  console.log("Renting a car is more affordable.");
} else if (age >= 18) {
  console.log("Renting a car is very expensive.");
}
// console.log "Renting a car is more affordable."
// if age is less than 25 but greater than or equal to 18
// console.log "Renting a car is very expensive."
// if age is less than 18
// console.log "You cannot legally rent a car."
