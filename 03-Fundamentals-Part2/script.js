/******************************************
 * 
 * STRICT MODE
 * 
 */

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // => error caught by strict mode
if (hasDriversLicense) console.log('I can drive');

const interface = 'Audio'; // => potential reserved word caught by strict mode


/******************************************
 *
 * FUNCTIONS
 *
 */

// Function declaration
function calcAgeDec(birthYear) {
    return 2020 - birthYear;
}
calcAgeDec(1995);

// Function expression
const calcAgeExp = function (birthYear) {
    return 2020 - birthYear;
}
calcAgeExp(1971);

// Arrow function
// 1 parameter
const calcAgeArrow = birthYear => 2020 - birthYear;
// Multiple parameters
const calcAgeMultiple = (firstName, birthYear) => `${firstName}'s birthyear is ${birthYear}`;
// Multiple operations
const yearsUntilRetirement = birthYear => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

// Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3)); // Juice with 8 pieces of apple and 12 pieces of orange.


/******************************************
 *
 * ARRAYS
 *
 */

// Declaring arrays
const friends = [1, 2, 3];
const moreFriends = new Array(6, 7, 8);

// Methods
// These return the new length
friends.push('toTheEndOfArray');
friends.unshift("toTheBeginningOfArray");

friends.pop(); // removes and returns last element
friends.shift() // removes and returns first element

friends.indexOf(2); // returns -1 if element not in array
friends.includes(3); // true/false if element is in array


/******************************************
 *
 * OBJECTS
 *
 */

// Declaration: Attributes and methods
const armando = {
    firstName: 'Armando',
    lastName: 'Herrera',
    birthYear: 1995,
    calcAge: function () {
        return 2022 - this.birthYear;
    },
    calcAge2: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    }
}

// Accessing values
armando.firstName;
armando['lastName']; // used when computation needed
armando.calcAge()
armando['calcAge']();


/******************************************
 *
 * LOOPS
 *
 */

// The for loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋🏼‍♂️`);
}

// Loop through arrays
const armandoArray = [
    'Armando',
    'Herrera',
    1995,
    'SDET',
    ['Alejandro', 'Brenda', 'Mary', 'Armando']
];

const types = [];

for (let i = 0; i < armandoArray.length; i++) {
    console.log(armandoArray[i]);
    types.push(typeof armandoArray[i]);
}

// Continue and Break
for (let i = 0; i < armandoArray.length; i++) {
    if (typeof armandoArray[i] !== 'string') continue; // jumps to the next iteration
    if (typeof armandoArray[i] === 'number') break; // exits the loop
    types.push(typeof armandoArray[i]);
}

// Loop backwards
for (let i = armandoArray.length - 1; i >= 0; i--) {
    console.log(i, armandoArray[i]);
}

// Loops in loops
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋🏽‍♂️`);
    }
}

// The while loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋🏼‍♂️`);
    i++;
}