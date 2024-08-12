'use strict';

/******************************************
 *
 * NUMBERS
 */

// Always treated as floating point numbers
console.log(23 === 23.0); // true

// Convert string to number
console.log(+'23');

// Parsing
console.log(Number.parseInt('39px')); // 39
console.log(Number.parseInt('e23')); // NaN
console.log(Number.parseFloat('2.5rem')); // 2.5

// NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN(+'r')); // true


/******************************************
 *
 * MATH
 */

console.log(Math.sqrt(25)); // 5
console.log(Math.max(5, 18, 32, 45, 2)); // 45
console.log(Math.min(5, 18, 32, 45, 2)); // 2
console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// Decimals
console.log(Math.trunc(23.4987734)); // 23
console.log(Math.round(23.8424)); // 24
console.log(Math.ceil(23.8424)); // 24
console.log(Math.floor(23.8424)); // 23

// Remainder
console.log(5 % 2); // 1
console.log(8 % 3); // 2


/******************************************
 *
 * DATES
 */

// Create a date
const now = new Date();
console.log(now);

console.log(now.getFullYear()); // 2024
console.log(now.getMonth()); // 7 (zero-based)
console.log(now.getDate()); // 4 day of the month
console.log(now.getDay()); // 0 day of the week (sunday, zero-based)
console.log(now.getHours()); // 16
console.log(now.getMinutes()); // 39
console.log(now.getSeconds()); // 46