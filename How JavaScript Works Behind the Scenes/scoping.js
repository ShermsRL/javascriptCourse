'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  // JS does a lookup to find first name variable from parent scope
  console.log(firstName);

  // printAge function have access to all parent scope variables
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    // block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // this firstName variable will overwrite the first name from the parent scope as JS will look for it inside the scope first
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // reassigning outer scope variables
      output = 'NEW OUTPUT!';
    }
    // console.log(str); will have an error as const and let variables are block scope limited

    console.log(millenial); // var variables can be accessed outside block

    // add(2, 3); will have an error as function is block scope if you are in strict mode

    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Sherman';
calcAge(1996);
