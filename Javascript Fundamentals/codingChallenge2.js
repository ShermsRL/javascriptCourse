// Coding Challenge 2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/


let markHeight, johnHeight;
let markWeight, johnWeight;
let markBMI, johnBMI;
let markHigherBMI = markBMI > johnBMI;

// Test data 1
markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / (johnHeight * johnHeight);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}


// Test data 2
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / (johnHeight * johnHeight);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`);
}
