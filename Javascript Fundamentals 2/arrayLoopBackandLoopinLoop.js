// Looping backwards, Loops in loops

const sherman = [
    'Sherman',
    'Tay',
    2023 - 1998,
    'student',
    ['Michael', 'Peter', 'Steven'],
    true
];

// Looping backwards
for (let i = sherman.length - 1; i >= 0; i--) {
    console.log(i, sherman[i]);
}

// loop inside a loop
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---------------Starting Exercise ${exercise}`);

    for (let rep = 1; rep <= 5; rep++) {
        // able to use outer loop variables
        console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`)
    }
}