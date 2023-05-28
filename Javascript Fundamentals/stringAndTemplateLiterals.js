// String and Template Literals

const firstName = "Sherman";
const job = "Student";
const birthYear = 1998;
const year = 2023;

const sherman = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job + '!';
console.log(sherman);

// Template strings - as of es6
const shermanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(shermanNew);

// Using back ticks to replace single and double quotes
console.log(`Just a regular string.....`);

// String over multiple lines
console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);