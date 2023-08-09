'use strict';
///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* 
const calcAverageHumanAge = function (ages) {
  const dogHumanAge = ages.map(function (dogAge) {
    if (dogAge <= 2) return 2 * dogAge;
    else return 16 + dogAge * 4;
  });
  console.log(dogHumanAge);

  const dogHumanAgeFiltered = dogHumanAge.filter(function (humanAge) {
    return humanAge >= 18;
  });
  console.log(dogHumanAgeFiltered);

  //   const averageAge =
  //     dogHumanAgeFiltered.reduce(function (totalAge, age) {
  //       return totalAge + age;
  //     }) / dogHumanAgeFiltered.length;

  // more complex way to calculate average
  // (2+3)/2 = 2.5 === 2/2+3/2=2.5
  const averageAge = dogHumanAgeFiltered.reduce(function (
    totalAge,
    age,
    i,
    arr
  ) {
    return totalAge + age / arr.length;
  },
  0);
  console.log(averageAge);
};
*/

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
