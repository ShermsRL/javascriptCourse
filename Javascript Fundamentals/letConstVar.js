// let, const, var

// let keyword is used to declare variables that will change later
// need to mutate the variable
let age = 30;
age = 31;

// value in const cannot be changed
// immutable variable, cannot be empty
const birthYear = 1991;

// birthYear = 1991; will result in error
// const job; will also result in error

// when to use const or let
// use 'const' by default and 'let' only if you are sure it will change
// changing variables as and when will introduce bug

// 'var' - should be avoided, used to declare variable prior to es6
var job = "Programmer";
job = "Programmer";

// DO NOT DO THIS EVEN THO IT WORKS
lastName = "myLastName";
console.log(lastName);