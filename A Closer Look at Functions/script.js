'use strict';

// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // old way (ES5) way for default parameters
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
// if you want to leave one of the arguments blank
createBooking('LH123', undefined, 1000);

// How passing arguments works: Value vs Reference
const flight = 'LH234';
const sherman = {
  name: 'Sherman Tay',
  passport: 12345678,
};

// editing string inside function will not affect the original
// editing object value will still change the original, so be careful when passing in object
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 12345678) {
    // alert('Check In');
  } else {
    // alert('Wrong passport!');
  }
};
checkIn(flight, sherman);
console.log(flight);
console.log(sherman);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(sherman);
checkIn(flight, sherman);

// First class and Higher-Order Functions
// functions are treated as values
// Higher order function receive another function as argument, return a new function or both

// Functions accepting Callback function
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split();
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('$');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

// Functions returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Sherman');
greeterHey('Steven');

greet('Hello')('Sherman');

// Challenge
const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet2('Hello')('Sherms');
