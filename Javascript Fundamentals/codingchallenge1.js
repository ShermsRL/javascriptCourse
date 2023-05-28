// Coding Challenge 1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
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
console.log(markBMI);
johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI);
markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI);

// Test data 2
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
console.log(markBMI);
johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI);
markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI);