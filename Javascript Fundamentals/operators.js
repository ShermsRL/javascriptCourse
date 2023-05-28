// Basic Operators

// mathematical operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

const firtName = "Sherman";
const lastName = "Tay";
// using '+' to concatenate string
console.log(firtName + " " + lastName);

// assignment operators
let x = 10 + 5;
console.log(x);

x += 10;
console.log(x);

x *= 4;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);

// Comparison operator
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// Operators Precedence

// executed left to right
console.log(25 - 10 - 5);

// after minus, eqn is a = b = 10, then it is executed right to left
let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

// parentheses with highest precedence
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);