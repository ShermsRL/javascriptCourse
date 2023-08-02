'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // destructuring from obj that is passed in
  orderDelievery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Destructuring Arrays - use []
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

// Selecting the first and third element from restaurant categories arr
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// to switch the variable of main and secondary without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// destructuring nested arr
const nested = [2, 4, [5, 6]];
const [first, , nestedArr] = nested;
console.log(first, nestedArr);

// accessing the individual values insied the nested arr
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values, the ones in the array will overwrite the default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// ----------------------------------------------------------------------

// Destructuring Objects - use {}
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// changing the variable name for the selected elements
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values for objects
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let e = 111;
let w = 999;
const obj = { e: 23, w: 7, t: 14 };
({ e, w } = obj);
console.log(e, w);

// destructuring nested objects
const {
  sat: { open: oHours, close: cHours },
} = openingHours;
console.log(oHours, cHours);

restaurant.orderDelievery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelievery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
// ----------------------------------------------------------------------

// spread operator
const arr2 = [7, 8, 9, 10, 11, 12, 13];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// unpacking the elements using spread operator
const newArr = [1, 2, ...arr2];
console.log(newArr);

console.log(...newArr);

// adding new element using old arr
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy arr
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arr
const menu2 = [...mainMenuCopy, ...restaurant.starterMenu];
console.log(menu2);

// spread operator works on all iterables (arr, str, maps, sets, not objects)
const string = 'Sherman';
const letters = [...string, ' ', 'T.'];
console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// the below 2 statements is the same
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// objects unpack
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// copying objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// ----------------------------------------------------------------------

// rest pattern and parameters - pack elements into arr
const [o, t, ...others] = [1, 2, 3, 4, 5];
console.log(o, t, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// rest operator on functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);

const arr4 = [23, 5, 7];
add(...arr4);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');