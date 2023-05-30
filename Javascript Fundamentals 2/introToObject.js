// Introduction to objects

// Object sherman contains 5 properties
const sherman = {
    firstName: 'Sherman',
    lastName: 'Tay',
    age: 2023 - 1998,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(sherman);

// Dot vs Bracket Notation - retrieving properties

// Dot notation
console.log(sherman.lastName);

// Bracket Notation
console.log(sherman['friends']);

// Square bracket can contain a expression
const nameKey = 'Name';
console.log(sherman['first' + nameKey]);
console.log(sherman['last' + nameKey]);

const interestedIn = prompt('What do you want to know about sherman? Choose between firstName, lastName, age, job and friends');
console.log(interestedIn);
console.log(sherman[interestedIn]);

// You will get undefined when you access property on object that does not exist

if (sherman[interestedIn]) {
    console.log(sherman[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

// Dot vs Bracket Notation - adding properties

// Dot notation
sherman.location = 'Sherman';

// Bracket Notation
sherman['discord'] = 'Sherms#9179';
console.log(sherman);

// Challenge
console.log(`${sherman.firstName} has ${sherman.friends.length} friends,and his best friend is called ${sherman.friends[0]}`);
