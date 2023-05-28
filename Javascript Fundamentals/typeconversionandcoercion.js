// Type conversion and Coercion

// Type conversion - manually convert one type to another
// Type coercion - js automatically convert type behind the scene

const inputYear = '1998';
console.log(Number(inputYear)); // converting string to number
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); // return NaN (Not a number), invalid number

console.log(String(23)); // Convert number to string

// type coercion
console.log('I am ' + 23 + ' years old'); // 23 gets converted to a string
console.log('23' - '10' - 3); // string convered to numbers, the minus triggerd the change
console.log('23' * '2');

let n = '1' + 1; // become "11"
n = n - 1; // 11 - 1 = 10
console.log(n);
