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
const calcAgeArrow = birthYear => 2020 - birthYear;
const calcAgeMultiple = (firstName, birthYear) => `${firstName}'s birthyear is ${birthYear}`;


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