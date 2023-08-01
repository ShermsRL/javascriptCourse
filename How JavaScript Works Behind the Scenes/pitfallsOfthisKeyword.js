'use strict';

// pitfalls of this keyword
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1998,
  calcAge: function () {
    console.log(this); // return the jonas object
    console.log(2037 - this.year);

    // solution one for preserving this keyword
    // const self = this;

    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    // Solution two
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();
jonas.calcAge();

// Best practice
// Never use arrow function as a method

// arguments keyword - not common in current js version
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// arrow function do not have argument keyword
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
