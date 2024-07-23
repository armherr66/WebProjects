'use strict';

/******************************************
 *
 * ARRAY METHODS
 */

let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice method CREATES A NEW ARRAY
console.log(arr.slice(2)); // Array(3) [ "c", "d", "e" ]
console.log(arr.slice(2, 4)); // Array(2) [ "c", "d" ]
console.log(arr.slice(-2)); // Array(2) [ "d", "e" ]
console.log(arr.slice(1, -2)); // Array [ "b", "c" ] Starts at pos 1 and extracts everything but the las "2" elements

// Splice method MUTATES THE ARRAY
console.log(arr.splice(2)); // Array(3) [ "c", "d", "e" ]
console.log(arr); // Array [ "a", "b" ]
console.log(arr.splice(1, 2)); // Array [ "b", "c" ]
console.log(arr); // Array(3) [ "a", "d", "e" ] Starts at pos 1 and deletes "2" elements

// Reverse MUTATES THE ARRAY
console.log(arr.reverse()); // Array(5) [ "e", "d", "c", "b", "a" ]

// Concat
const letters = arr.concat(['f', 'g', 'h', 'i']);
console.log(letters); // Array(9) [ "e", "d", "c", "b", "a", "f", "g", "h", "i" ]

// Join
console.log(letters.join(' - ')); // e - d - c - b - a - f - g - h - i


/******************************************
 *
 * THE AT METHOD
 */

const arrNumb = [23, 11, 64];
console.log(arrNumb.at(0)); // 23

// Old ways to get last element of the array
arrNumb[arrNumb.length - 1]; // 64
arrNumb.slice(-1)[0]; // 64

// Getting the last element using .at()
console.log(arrNumb.at(-1)); // 64

// Also works on strings
console.log('armando'.at(2)); // m


/******************************************
 *
 * LOOPING - FOR-EACH
 */

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['MXN', 'Mexican peso']
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Loop with for-of
// If you need to break out of a loop
for (const movement of movements) {
    if (movement > 0)
        console.log(`You deposited ${movement}`);
    else
        console.log(`You withdrew ${Math.abs(movement)}`);
}

// Loop with forEach
// Parameters order is always currentElement, Index, EntireArray
movements.forEach(function (movement, index, arr) {
    if (movement > 0)
        console.log(`${index + 1}: You deposited ${movement}`);
    else
        console.log(`${index + 1}: You withdrew ${Math.abs(movement)}`);
});

// ForEach with maps
// Parameters order is always value, key, map
currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

// ForEach with sets
// Sets don't have keys so both value and key parameters have the same value
const currenciesSet = new Set(['USD', 'MXN', 'USD', 'EUR', 'EUR', 'MXN', 'MXN']);
currenciesSet.forEach(function (value, _, map) {
    console.log(`${value}`);
});


/******************************************
 *
 * MAP, FILTER & REDUCE
 */

// Map takes the original array, performs instructions on each element (callback function) and returns a new array with the results
const moves = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const usdMovements = moves.map(function (mov) {
    return mov * eurToUsd;
});

const usdMoves = moves.map(mov => mov * eurToUsd);
console.log(usdMoves); // [ 220, 495, -440, 3300, -715, -143, 77, 1430 ]

// Filter creates a new array with only the elements that pass the condition
const deposites = moves.filter(mov => mov > 0);
console.log(deposites);

// Reduce reduces all the array elements down to one single value
const balance = moves.reduce((accumulator, currentEl, index, arr) => {
    return accumulator + currentEl
}, 0);

console.log(balance);

// Get the maximum number
// The value that we return is the accumulator of the next iteration
const maximum = moves.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else
        return mov;
}, moves[0]);
console.log(maximum); // 3000


/******************************************
 *
 * THE FIND METHOD
 */

const firstWithdrawal = moves.find(mov => mov < 0);
console.log(firstWithdrawal); // -400


/******************************************
 *
 * SOME AND EVERY METHODS
 */

const anyDeposits = moves.some(mov => mov > 0); // true

const anyDeposits500 = moves.some(mov => mov > 5000); // true

const allDeposits = moves.every(mov => mov > 0); // false


/******************************************
 *
 * FLAT AND FLATMAP METHODS
 */

const arreglo = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arreglo.flat()); // Array(8) [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8]; // Only flattens one level unless indicated otherwise
console.log(arrDeep.flat(2)); // Array(8) [ 1, 2, 3, 4, 5, 6, 7, 8 ]