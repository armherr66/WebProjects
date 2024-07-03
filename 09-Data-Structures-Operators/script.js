'use strict';

/******************************************
 *
 * DESTRUCTURING ARRAYS & OBJECTS
 */

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // A function can destructure an object received as parameter and use defaults
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', addres }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${addres} at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  // The pizza needs to have at least one ingredient, the rest are optional
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

const rest1 = {
  name: 'Capri',
  numGuests: 0
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Armando Macías'
};

// Destructuring: An ES6 feature that unpacks values from an array or object into separate variables

// DESTRUCTURING ARRAYS
const arr = [2, 3, 4];

// Instead of doing this
const a = arr[0];
const b = arr[1];
const c = arr[2];

// We can destructure the array like this
const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4

// Don't need to destructure all the elements of an array
const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

// Elements can be skipped with a blank space
const [cat1, , cat3] = restaurant.categories;
console.log(cat1, cat3); // Italian Vegetarian

// A function can return an array and immediatly be destructured
const [orderStarter, orderMain] = restaurant.order(2, 0);
console.log(orderStarter, orderMain); // Garlic Bread Pizza

// A nested array can be destructured in the same line of code
const nested = [2, 4, [5, 6]];
const [v1, , [a1, a2]] = nested;
console.log(v1, a1, a2); // 2 5 6

// Setting default values for unknown arrays
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1

// DESTRUCTURING OBJECTS
// We have to use the exact same name of the properties
const { name, categories, openingHours } = restaurant; // Order of properties doesn't matter
console.log(name, categories, openingHours); // Classico Italiano [Array] {Object}

// We can assign a new variable name to the destructured properties
const { name: restaurantName, categories: tags, openingHours: hours } = restaurant;
console.log(restaurantName, tags, hours); // Classico Italiano [Array] {Object}

// Setting default values for unknown properties
const { menu = [], starterMenu: starters = [] } = restaurant; // Also changing the variable name
console.log(menu, starters); // [] [Array]

// Using existing variables to store destructured values from an object
let g = 111;
let h = 999;
const obj = { g: 23, h: 7, c: 14 };

({ g, h } = obj); // Put parenthesis around the expression to avoid errors
console.log(g, h); // 23 7

// Destructuring nested objects
const { fri: { open, close } } = openingHours;
console.log(open, close); // 11 23

// An object can be sent as parameter to a function and it will be destructured immediatly
restaurant.orderDelivery({
  time: '22:30',
  addres: 'Agustín Melgar',
  mainIndex: 2,
  starterIndex: 2
});


/******************************************
 *
 * SPREAD OPERATOR
 */

// Spreading: Expanding/Spliting an array into all its elements
const arreglo = [7, 8, 9];

// Instead of doing this
const oldNewArr = [1, 2, arreglo[0], arreglo[1], arreglo[2]];

// Use spreading where you would write VALUES SEPARATED BY COMMAS
const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]
console.log(...newArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Burger', 'Alitas', 'Boneless'];
console.log(newMenu); // [ "Pizza", "Pasta", "Risotto", "Burger", "Alitas", "Boneless" ]

// Copy arrays (value type, not reference)
const mainMenuCopy = [...restaurant.mainMenu];

// Join multiple arrays
const menuSpread = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuSpread); // [ "Pizza", "Pasta", "Risotto", "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ]

// The spread operator works on all iterables (arrays, strings, maps, sets)
const str = 'Armando';
const letters = [...str, 'J', 'u', 'a', 'n'];
console.log(letters); // [ "A", "r", "m", "a", "n", "d", "o", "J", "u", "a", "n"]

// Spread arrays to send values as parameters
const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
restaurant.orderPasta(...ingredients); // Pasta with Hongos, Queso, Cilantro

// Spread objects
const newRestaurant = { founded: 1995, ...restaurant, founder: 'Armando' };
console.log(newRestaurant);

// Copy objects (value types, not reference)
const restaurantCopy = { ...restaurant };


/******************************************
 *
 * REST PATTERN AND PARAMETERS
 */

// Rest: To pack elements into an array
const arreglito = [1, 2, ...[3, 4]]; // SPREAD is used on the RIGHT side of the = sign

// Take the rest of the elements and put them into a new array
const [f, s, ...others] = [1, 2, 3, 4, 5]; // REST is used on the LEFT side of the = sign
console.log(f, s, others); // 1 2 [3, 4, 5]

// Using both SPREAD and REST operators
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood); // Pizza Risotto [ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ]

// Using Rest operator with OBJECTS
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays); // {sat} {thu, fri}

// Using Rest operator with FUNCTIONS: REST PARAMETERS
// We use the SPREAD operator when we want to send an array as parameter when calling a function that has multiple parameters
// We use the REST operator when we want the function to work with an array and send multiple parameters when calling it
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)
    sum += numbers[i];
  console.log(sum);
}
add(2, 3); // 5
add(5, 3, 7, 2); // 17

const v = [23, 5, 7];
add(...v); // We need to SPREAD the array into individual parameters so the function can pack them again with the REST operator

// Calling functions that use the REST parameter
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach', 'pineapple'); // mushrooms [ "onion", "olives", "spinach", "pineapple" ]
restaurant.orderPizza('pepperoni'); // pepperoni []


/******************************************
 *
 * SHORT CIRCUITING (&& and ||)
 */

// OR: If the first value is a truthy value, it will return that value
// Otherwise, it will always return the second value. Even if it's a falsy value
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

// Short-circuiting is used to replace the ternary operator WHEN THE VALUE IS NOT ZERO
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

// If the first value is a falsy value, use the second one
restaurant.numGuests = 3;
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 3

// AND: If the first value is a falsy value, it will return that value
// Otherwise, it will always return the second value. Even if it's a truthy value
console.log(0 && 'Jonas'); // 0
console.log('Hello' && 'Jonas'); // Jonas
console.log('Hello' && 23 && null && true); // null

// Short-circuiting is used to replace an IF statement evaluating wheter a method exists or not
if (restaurant.orderPizza) {
  restaurant.orderPizza('pineapple', 'pepperoni');
}

// If the orderPizza method doesn't exist (falsy) it will short-circuit
// Otherwise (truthy), continue the evaluation and execute the method
restaurant.orderPizza && restaurant.orderPizza('spinach', 'cheese');


/******************************************
 *
 * NULLISH COALESCING OPERATOR (??)
 */

// OR operator returns 10 even when numGuests is actually 0 because is a falsy value
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

// The NULLISH operator only validates if the value is null and undefined
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0


/******************************************
 *
 * LOGICAL ASSIGNMENT OPERATORS
 */

// Assigning values to properties that we don't know if the object has
rest1.numGuests = rest1.numGuests || 10; // 20 because the property exists and has a value assigned
rest2.numGuests = rest2.numGuests || 10; // 10 because the property doesn't exist

// Use logical assignment operators to shorten the code
rest1.numGuests ??= 10; // 0
rest2.numGuests ||= 10; // 10
rest2.owner &&= '<ANONYMOUS>'; // <ANONYMOUS>


/******************************************
 *
 * FOR-OF LOOP
 */

const menuFor = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Loop through all the items of an array
for (const item of menuFor) {
  console.log(item);
}

// How to have access to the index of each item (entries method)
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// Destruct the array in order to have more meaningful variable names
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


/******************************************
 *
 * ENHANCED OBJECT LITERALS
 */

// ES6 introduced 3 ways to write object literals
let openingHoursEnhanced = {
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
};

// 1) Add an external object as a property (same name) of another object
// Before ES6
let restaurantBefore = {
  openingHourseEnhanced: openingHoursEnhanced
}
// ES6
let restaurantEnhanced = {
  openingHoursEnhanced
}

// 2) Add a method without having to assign a property to a function expression
// Before ES6
restaurantBefore = {
  order: function (dish) {
    console.log(`${dish} ordered`);
  }
};

// ES6
restaurantEnhanced = {
  order(dish) {
    console.log(`${dish} ordered`);
  }
};

// 3) Compute property names
const weekdaysArr = ['mon', 'tue', 'wed', 'thu', 'fri'];
openingHoursEnhanced = {
  [weekdaysArr[3]]: {
    open: 12,
    close: 22
  },
  [`days-${2 + 4}`]: {
    open: 0,
    close: 24
  }
}


/******************************************
 *
 * OPTIONAL CHAINING
 */

// Verify whether a property exists. Only evaluate it if it does
console.log(restaurant.openingHours.mon.open); // Error: undefined
console.log(restaurant.openingHours?.mon?.open); // Returns undefined. No error

// Check whether a method exists before calling it
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // [ "Focaccia", "Pasta" ]

// Check whether an array is empty
const users = [
  { name: 'Juan', email: 'hello@jonas.io' }
];
console.log(users[0]?.name ?? 'User array is empty'); // Juan


/******************************************
 *
 * LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES
 */

// Looping through property names
// Object.keys returns an array with the property names
let openStr = `We are open on ${Object.keys(restaurant.openingHours).length} days: `;
for (const day of Object.keys(restaurant.openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr); // We are open on 3 days: thu, fri, sat,

// Looping through property values
// Object.values returns an array with the values
const values = Object.values(restaurant.openingHours);
console.log(values);

// Looping through entries
// Object.entries returns an array of key-value pairs
const entries = Object.entries(restaurant.openingHours);
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}


/******************************************
 *
 * SETS
 */

// A collection of UNIQUE values. No duplicates
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Boneless', 'Pasta', 'Pizza']);
console.log(ordersSet); // Set(3) [ "Pasta", "Pizza", "Boneless" ]

// Strings are also iterables
console.log(new Set('armando')); // Set(6) [ "a", "r", "m", "n", "d", "o" ]

// Properties of sets
ordersSet.size // 3
ordersSet.has('Pizza'); // true
ordersSet.has('Bread'); // false
ordersSet.add('Wings'); // Set(4) [ "Pasta", "Pizza", "Boneless", "Wings" ]
ordersSet.delete('Wings'); // Set(3) [ "Pasta", "Pizza", "Boneless" ]
ordersSet.clear() // Set []

// Loop through sets
for (const order of ordersSet) {
  console.log(order);
}

// A common usage of sets is to delete duplicates from arrays
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // Array(3) [ "Waiter", "Chef", "Manager" ]


/******************************************
 *
 * MAPS
 */

// A collection of key-value pairs. Keys can be of any value, unlike objects, which are always strings
const rest = new Map();
rest.set('name', 'Las Alitas');
rest.set(1, 'Monterrey');
rest.set(2, 'Torreón'); // Adds the pair and returns the whole map
rest.set('categories', ['Boneless', 'Alitas']).set('open', 11).set('close', 12).set(true, 'We are open').set(false, 'We are close');

const arrayMap = [1, 2];
rest.set(arrayMap, 'Test'); // For arrays and objects, the key is reference type

rest.get('name'); // "Las Alitas"
rest.get(true) // "We are open"

rest.has('categories'); // true
rest.delete(2); // Does not return map
rest.size // 7

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! 🎉'],
  [false, 'Try again!']
]);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));

console.log(question.get(question.get('correct') === answer));


/******************************************
 *
 * STRINGS
 */

const airline = 'TAP Air Portugal';
const plane = 'A320';

// Get character at X position
console.log(plane[0]); // A
console.log('JUAN'[3]); // N

// Get length of string
console.log(airline.length); // 16

// Index of
console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8

// Get a substring
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(0, 3)); // TAP
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal
console.log(airline.slice(-5)); // tugal
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const column = seat.slice(-1);
  if (column === 'B' || column === 'E')
    console.log('You got middle seat :(');
  else
    console.log('You got lucky :D');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Transform to upper and lower case
console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

const passenger = 'jUaN';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Juan

const email = 'hello@juan.io';
const loginEmail = '  Hello@Juan.Io \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail, email === normalizedEmail);

// Replace characters
const priceGB = '288,97£';
const priceMX = priceGB.replace('£', '$').replace(',', '.').replaceAll('8', '6');

// Includes, starts & end with
console.log(priceMX.includes('$')); // true
console.log(priceMX.startsWith('36')); // false
console.log(priceMX.endsWith('$')); // true

// Split
console.log('a+very+nice+string'.split('+')); // Array(4) [ "a", "very", "nice", "string" ]
console.log('Juan Armando Herrera'.split(' ')); // Array(3) [ "Juan", "Armando", "Herrera" ]

const [firstName, lastName] = 'Alejandro Macías'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Alejandro MACÍAS

// Add padding
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+')); // +++++++++++Go to gate 23!
console.log(message.padEnd(30, '-')); // Go to gate 23!----------------

// Repeat
const bad = 'Bad weather... All departues delayed... ';
console.log(bad.repeat(3)); // Bad weather... All departues delayed... Bad weather... All departues delayed... Bad weather... All departues delayed...