// Function Declarations vs Expressions

function calcAge1(birthYear) {
    return 2023 - birthYear;
}

// Function Declaration
const age1 = calcAge1(1998);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calcAge2(1998);
console.log(age1, age2);

// difference between declaration and expression
// declaration, you can call the function before your function is declared