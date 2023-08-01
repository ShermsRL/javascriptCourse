'use strict';

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // in strict mode it will be undefined
};
calcAge(1998);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // arrow does not get its own this keyword, will be using the parent scope this keyword
};
calcAgeArrow(1998);

const jonas = {
  year: 1998,
  calcAge: function () {
    console.log(this); // return the jonas object
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

// this keyword will point to the object that is calling the keyword
const sherman = {
  year: 2017,
};
sherman.calcAge = jonas.calcAge; // method borrowing
sherman.calcAge(); // this keyword will be pointing to sherman

const f = jonas.calcAge;
f(); // undefined, no year property, its just a regular function call
