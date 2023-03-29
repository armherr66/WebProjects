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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  }
};

// /******************************************
//  * 
//  * DESTRUCTURING ARRAYS
//  * 
//  */

// // Instead of doing this
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // We can destructure the array like this
// const [x, y, z] = arr;
// console.log(x, y, z); // => 1, 2, 3

// // You don't need to add a variable for every item in the array
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary); // => Italian, Vegetarian

// // Switching variables
// // In case var1 needs to be var2 and var2 be var1
// [main, secondary] = [secondary, main];

// // Immediatly destruct an array returned by a function
// const [starter, mainCourse] = restaurant.order(2, 0); // => Garlic Bread, Pizza

// // Destructuring nested arrays
// const nested = [2, 4, [5, 6]];
// const [two, , nestedArr] = nested;
// console.log(two, nestedArr); // => 2, [5, 6]

// const [i, , [j, k]] = nested;
// console.log(i, j, k); // => 2, 5, 6

// // Default values
// const [p = 1, q, r = 3] = [8, 9];
// console.log(p, q, r); // => 8, 9, 3


/******************************************
 *
 * DESTRUCTURING OBJECTS
 *
 */

// // You only need to specify the properties you need to get from the object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories); // => 'Classico Italiano' Object Array(4)

// // You can set a new variable name for each property
// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags); // => 'Classico Italiano' Object Array(4)

// // Default values can be set
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters); // => [] Array(4)

// // Mutating variables while destructuring objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); // The assignment needs to be wrapped by ( )
// console.log(a, b); // => 23 7

// // Destructuring nested objects
// const { fri: { open, close } } = openingHours;
// console.log(open, close); // => 11 23

// // You can create a function that receives an object as parameter
// // The function declaration destructs the object received and uses the properties
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Cto Canal de La Perla',
//   mainIndex: 2,
//   starterIndex: 2
// });

// // The function declaration can have default values it will use when they are missing
// restaurant.orderDelivery({
//   address: 'Cto Canal de La Perla',
//   starterIndex: 1
// });


/******************************************
 *
 * THE SPREAD OPERATOR (...)
 *
 */

// // Takes out every element of the array and writes them down one by one
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr]; // => Same as [1, 2, 7, 8, 9]

// // Can be used wherever a list of elements separated by comma is expected
// console.log(...newArr); // => 1 2 7 8 9

// // Create new array with existing array and new elements
// const newMenu = [...restaurant.mainMenu, 'Carne'];

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join two arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// // Iterables: arrays, strings, maps, sets
// const str = 'Armando';
// const letters = [...str, ' ', 'S.'];
// console.log(letters); // => Array(9) [ "A", "r", "m", "a", "n", "d", "o", " ", "S." ]

// //const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
// //restaurant.orderPasta(...ingredients);

// // Expanding Objects
// const newRestaurant = { foundedIn: 1995, ...restaurant, founder: 'Armando H' }

// // Creating copies
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'La Casa de Armando';
// console.log(restaurant.name); // => Original Name
// console.log(restaurantCopy.name); // => New Name


/******************************************
 *
 * THE REST PATTERN AND PARAMETERS
 *
 */

// // Creates an array with the remaining elements
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// // Must be the last element in the array
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// // Rest pattern with objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// // Functions - Rest Parameters
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++)
//     sum += numbers[i];
//   console.log(sum);
// }

// add(2, 3);
// add(5, 3, 7, 2)
// add(8, 2, 5, 3, 2, 1, 4)

// // Send an array to the function
// const x = [23, 5, 7];
// // We need to spread the array because the function will pack the elements again
// add(...x)

// // The function receives a string and an array of variable size
// restaurant.orderPizza('Pepperoni', 'Piña', 'Cheddar', 'Jamón');


/******************************************
 *
 * THE NULLISH COALESCING OPERATOR
 *
 */

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // If the expression before the ?? is nullish, take the second value
// // Nullish values: null and undefined only
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


/******************************************
 *
 * LOGICAL ASSIGNMENT OPERATORS
 *
 */

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20
// }

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Armando'
// }

// OR assignment operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner &&= 'No_Name';
// rest2.owner &&= 'No_Name';

// console.log(rest1);
// console.log(rest2);