// Data types

// Boolean
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

// type of operator - show what type of value is it
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

// Dynamic typing
javascriptIsFun = "YES!"; // changing the value of existing variable, dont need let keyword
console.log(typeof javascriptIsFun);

// undefined - declaring empty variable
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); // typeof null should return null, not object, this is a bug but its not corrected for legacy reason