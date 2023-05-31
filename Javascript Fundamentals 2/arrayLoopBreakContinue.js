// Looping Arrays, breaking and continuing

const sherman = [
    'Sherman',
    'Tay',
    2023 - 1998,
    'student',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

// common variable name is i, for index
for (let i = 0; i < sherman.length; i++) {
    // Reading from shermn array
    console.log(sherman[i], typeof sherman[i]);

    // Filling types array
    // types[i] = typeof sherman[i];
    types.push(typeof sherman[i]);
}

console.log(types);

// another example
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}

console.log(ages);

// continue and break statement

// continue exit the current iteration of the loop and continue on to the next one

for (let i = 0; i < sherman.length; i++) {
    // if not string, skip and continue to check the next element
    if (typeof sherman[i] !== 'string') continue;
    console.log(sherman[i], typeof sherman[i]);
}

// break terminate the whole loop
for (let i = 0; i < sherman.length; i++) {
    // if found number, exit the for loop
    if (typeof sherman[i] === 'number') break;
    console.log(sherman[i], typeof sherman[i]);
}
