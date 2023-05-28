// Truthy and Falsy Value

// 5 falsy value: 0, '', undefined, null, NaN

// conversion to boolean
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sherman'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) { // money is here is converted to false
    console.log("Dont spend it all :)");
} else {
    console.log("You should get a job!");
}

let height = 123;
if (height) {
    console.log("Yay, height is defined");
} else {
    console.log("Height is undefined");
}