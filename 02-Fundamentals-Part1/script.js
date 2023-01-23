/******************************************
 * VARIABLES AND DATA TYPES
 */

// Variable
let firstName = 'Armando';
let lastName = 'Herrera';
let age = 24;
let fullAge = true;

// Constant
const yearOfBirth = 1995;

// Undefined: No value
let job;


/******************************************
 * VARIABLE MUTATION AND TYPE COERCION
 */

// Type Coercion
console.log(firstName + ' ' + age); //'Armando 24'

let isMarried;
job = 'engineer';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// 'Armando is a 24 year old engineer. Is he married? true'


/******************************************
 * BASIC OPERATORS
 */

let year, yearJohn, yearBrenda;
year = 2020;
ageJohn = 24;
ageBrenda = 19;

// Math operators
yearJohn = year - ageJohn;
yearBrenda = year - ageBrenda;

console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

// Logical operators
let johnOlder = ageJohn > ageBrenda;

// typeof operator
console.log(typeof johnOlder);


/******************************************
 * OPERATOR PRECEDENCE
 */

fullAge = 18;

// Multiple operators
let isFullAge = year - yearJohn >= fullAge;

// Grouping
ageJohn = year - yearJohn;
ageBrenda = 35;
let average = (ageJohn + ageBrenda) / 2;

// Multiple assignments
let x, y;
x = y = (3 + 5) * 4 - 6; // 26 Equal operator works from right-to-left

// More operators
x *= 2;
x += 10;
x++;


/******************************************
 * IF / ELSE STATEMENTS
 */

let civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName, 'is married');
}
else {
    console.log(firstName, 'is single');
}


/******************************************
 * BOOLEAN LOGIC
 */

age = 12;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man');
}
else {
    console.log(firstName + ' is a man');
}


/******************************************
 * TERNARY OPERATOR AND SWITCH STATEMENT
 */

age = 22;

// Ternary Operator
age >= 18 ? console.log(firstName, 'drinks beer') : console.log(firstName, 'drinks juice');

let drink = age >= 18 ? 'beer' : 'juice';

// Switch Statement
job = 'designer';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName, 'is a', job);
        break;
    case 'driver':
        console.log(firstName, 'driver an uber');
        break;
    case 'designer':
        console.log(firstName, 'designs beautiful websites');
        break;
    default:
        console.log(firstName, 'does something else');
}


/******************************************
 * TRUTHY AND FALSY VALUES
 */

// False: undefined, null, 0, '', NaN
// True: Not falsy values

let height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
}
else {
    console.log('Variable has not being defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion');
}