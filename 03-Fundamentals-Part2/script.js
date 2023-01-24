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