'use strict';

// primatives - each primative value has its own memory
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

// objects - reference value
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// both last name will become davis
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage', jessica);
console.log('After Marriage', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before Marriage', jessica2);
console.log('After Marriage', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before Marriage', jessica2);
console.log('After Marriage', jessicaCopy);
