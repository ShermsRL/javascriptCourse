// Equality operators: == vs ===

const age = 18;
if (age === 18) console.log("You just became an adult");

console.log(18 === 18);
// === strict equality operator, does not perform type coercion, will only return true if both are equal

// loose equality operator: ==, avoid this as much as possible
console.log('18' == 18);

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 6) {
    console.log("Cool! 6 is a cool number!");
} else if (favourite === 23) {
    console.log("23 is also a cool number");
} else {
    console.log("Number is not 6 or 23");
}

// not equal symbol - !== (strict), != (loose)
if (favourite !== 23) console.log("Why not 23?");