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

// // Create a new array with existing array and new elements
// const newMenu = [...restaurant.mainMenu, 'Carne'];

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join two arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// // Iterables: arrays, strings, maps, sets
// const str = 'Armando';
// const letters = [...str, ' ', 'S.'];
// console.log(letters); // => Array(9) [ "A", "r", "m", "a", "n", "d", "o", " ", "S." ]

// // Using the spread operator with function parameters
// //const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
// //restaurant.orderPasta(...ingredients);

// // Expanding Objects
// const newRestaurant = { foundedIn: 1995, ...restaurant, founder: 'Armando H' };

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
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

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


/******************************************
 *
 * THE FOR-OF LOOP
 *
 */

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// // .entries() returns an array for each element containing the index and the value
// for (const item of menu.entries()) {
//   console.log(item); // => Array[0, "Focaccia"]
// }

// // Get the index of the element by destructuring
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`); // => 1: Focaccia
// }


/******************************************
 *
 * ENHANCED OBJECT LITERALS
 *
 */

// // 1. Variables can be set as object properties
// const a = {
//   one: "1",
//   two: "2"
// };

// const b = {
//   a,
//   blue: "azul",
//   red: "rojo"
// };

// console.log(b.a.one); // => 1

// // 2. Methods don't need to have the "function" keyword
// const c = {
//   ts: "Taylor Swift",
//   fearless: "Fearless",
//   goOnTour() {
//     return this.fearless;
//   }
// };

// // 3. Property names can be computed
// const d = {
//   ['album-1']: 'TS',
//   [`album-${1 + 1}`]: 'Fearless'
// }

// console.log(d['album-2']); // => Fearless


/******************************************
 *
 * OPTIONAL CHAINING
 *
 */

// // Validating a property exists before using it (Old way)
// if (restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // Optional Chaining: If a property doesn't exist, "undefined" is returned immediatly
// console.log(restaurant.openingHours?.mon?.open); // => undefined instead of an error

// // Verify if a method exists before invoking it
// console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist"); // => ["Focaccia", "Pasta"]

// // Using optional chaining on arrays
// const users = [
//   { name: 'Armando', email: 'arm_herr66@hotmail.com' }
// ];
// console.log(users[0]?.name ?? "Users array empty"); // => Armando


/******************************************
 *
 * LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES
 *
 */

// // Keys = Property Names
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties); // => Array(3) [ "thu", "fri", "sat" ]

// for (const day of Object.keys(restaurant.openingHours)) {
//   console.log(day);
// }

// // Values
// const values = Object.values(restaurant.openingHours);

// // Entire object
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}.`);
// }


/******************************************
 *
 * SETS
 *
 */

// // Data structure without duplicate values
// const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pizza', 'Pasta']);

// // Get the size of a set
// ordersSet.size; // => 3

// // Look for element in set
// ordersSet.has('Pizza'); // => true

// // Add and remove elements
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Pizza');
// ordersSet.clear() // => Deletes all the elements

// // Convert set to array
// const ordersArray = [...ordersSet];


/******************************************
 *
 * MAPS
 *
 */

// // The key can be of any type
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Fireze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// rest.set(true, 'We are open');
// rest.set(false, 'We are closed');

// // The method set returns the updated map
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian']).set('open', 11).set('close', 23);

// // Query the map
// console.log(rest.get('name'));
// console.log(rest.get(true));

// // Practical example
// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // More methods
// console.log(rest.has('categories'));
// rest.delete(2);
// rest.size;
// // rest.clear();

// const array = [1, 2];
// rest.set(array, 'Test');
// rest.get(array);
// console.log(rest);

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct! 🎉'],
//   [false, 'Try again']
// ]);
// console.log(question);

// // Convert object to map
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// // Iterating through maps
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// // Convert map to array
// console.log([...question]);