'use strict';

// Variables Hoisting

// undefined
// console.log(me);

// cannot access before initialisation
// console.log(job);
// console.log(year);

var me = 'Sherman';
let job = 'Teacher';
const year = 1998;

// Functions Hoisting
// console.log(addDecl(2, 3));

// cannot access before initialisation
// console.log(addExpr(2, 3));

// undefined
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Pitfall of hoisting
// numProducts here will be undefined, which is a false value
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// variables declared with var will create a new property on the global window object
var x = 1;
let y = 2;
const z = 3;
