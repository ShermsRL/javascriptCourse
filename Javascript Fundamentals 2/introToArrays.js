// Introduction to Arrays
'use strict';
const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Method 1 to create array - literal syntax
const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

// Method 2 to create array
// const years = new Array(1991, 1984, 2008, 2020);

// accessing the elements, arrays are 0 based
console.log(friends[0]);
console.log(friends[2]);

// number of elements in array
console.log(friends.length);

// accessing the last element of array
console.log(friends[friends.length - 1]);

// changing the element
friends[2] = 'Jay'; // elements inside const array can still be mutable, but you can replace the whole array
console.log(friends);

// Array with multiple types of values
const firstName = 'Sherman';
const sherman = [firstName, 'Tay', 2023 - 1998, 'Student', friends];
console.log(sherman);
console.log(sherman.length);

// Exercise
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

