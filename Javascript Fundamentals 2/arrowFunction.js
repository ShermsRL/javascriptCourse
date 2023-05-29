// Arrow Function
// Do not contain the 'this' keyword, so just use it for simple one liner function as it is short and fast to write

// Arrow function - simple one liner function
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1998);
console.log(age3);

// Arrow function with multiple parameters and lines of codes
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1998, 'Sherman'));