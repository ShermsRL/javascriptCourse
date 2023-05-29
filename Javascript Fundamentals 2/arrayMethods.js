// Basic Array Operations (Methods)

const friends = ['Micheal', 'Steven', 'Peter'];

// push method add element to end of array - return the length of new array
const newlength = friends.push('Jay');
console.log(friends);
console.log(newlength);

// unshift method add element to the front of the array - also return length of new array
friends.unshift('John');
console.log(friends);

// pop method remove element at end of array - return the removed element
friends.pop();
console.log(friends);

// shift method also remove element at start of array - return the removed element
friends.shift();
console.log(friends);

// indexOf method tell you where the element is located
console.log(friends.indexOf('Steven'));

// includes method tell you whether the element is in array, return true or false - uses strict equality (===)
console.log(friends.includes('Steven'));

// common use case of includes method
if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}