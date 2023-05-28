// The conditional (Ternary) Operator

const age = 25;

// writing if else statement all in one line
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

// assigning to variable using ternary operator
const drink = age >= 18 ? "wine" : "Water";
console.log(drink);

// condition inside template literal using ternary operator
console.log(`I like to drink ${age >= 18 ? "wine" : "Water"}`)