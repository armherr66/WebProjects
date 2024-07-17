'use strict';

/******************************************
 *
 * DEFAULT PARAMETERS
 */

const bookings = [];

// A default parameter can use the value of the parameters set before it
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

    // The default were made with OR short circuiting until ES6 added the defaults
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123'); // Object { flightNum: "LH123", numPassengers: 1, price: 199 }
createBooking('LH123', 2, 800); // Object { flightNum: "LH123", numPassengers: 2, price: 800 }
createBooking('LH123', 3); // Object { flightNum: "LH123", numPassengers: 3, price: 597 }
// Skipping a default parameter
createBooking('LH123', undefined, 1000); // Object { flightNum: "LH123", numPassengers: 1, price: 1000 }


/******************************************
 *
 * FIRST-CLASS AND HIGHER-ORDER FUNCTIONS
 */

// First-class functions: Functions are simply values. They can be stored in variables or properties. Can be passed as arguments to other functions.
// Higher-order functions: A function that receives another function as an argument, that returns a new function, or both.

btnClose.addEventListener('click', greet);
// .addEventListener is the higher-order function
// greet is the callback function which will be called by the higher-order function

function count() {
    let counter = 0;
    return function () {
        counter++;
    };
}
// count() is the higher-order function
// function() is the returned function

// Functions accepting callback functions
const oneWord = function (str) {
    return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// Functions returning functions
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Juan'); // Hey Juan
greeterHey('Alex'); // Hey Alex

greet('Hello')('Brenda'); // Hello Brenda

// Challenge: Rewrite the function using arrow functions
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hola')('Lola'); // Hola Lola


/******************************************
 *
 * THE CALL AND APPLY METHODS
 */

const aeromexico = {
    airline: 'Aeromexico',
    iataCode: 'AM',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    }
}

aeromexico.book(239, 'Juan Armando');
aeromexico.book(666, 'Alex Macías');

const aeronoruega = {
    airline: 'Aeronoruega',
    iataCode: 'AN',
    bookings: []
};

// We can store a method in a variable and use it without accessing to it from the object
const book = aeromexico.book;

// However, if the function uses the 'this' keyword, it will throw an error
// book(23, 'Mary Rivas'); // Uncaught TypeError: this is undefined

// To solve that, we use the .call() function and pass the object that will be placed in 'this' along with the needed parameters
book.call(aeronoruega, 23, 'Mary Rivas');


/******************************************
 *
 * THE BIND METHOD
 */

// This won't call the function, it will return a function where the 'this' keyword is always set to 'aeronoruega'
const bookNoruega = book.bind(aeronoruega);
bookNoruega(66, 'Armando Palacios');

// We can send parameters that will always be used when calling the function
const bookNoruega23 = book.bind(aeronoruega, 23);
// Every function call with have 23 as flightNum and we only need to send the name. It's called partial application
bookNoruega23('Brenda Lizeth');

// With event listeners
aeromexico.planes = 300;
aeromexico.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

// In an event listener function, 'this' always points to the element the listener is being added to
// document.querySelector('.buy').addEventListener('click', aeromexico.buyPlane);
// That's why we need to bind the function with the object we want to be placed at 'this'
document.querySelector('.buy').addEventListener('click', aeromexico.buyPlane.bind(aeromexico));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.10, 200)); // 220

// There's no 'this' keyword in this case becasue we're not using objects so we can set it to null
const addIVA = addTax.bind(null, 0.16);

console.log(addIVA(100)); // 116

// Challenge: Rewrite the functions with the 'function returns function' method
const addImpuesto = rate => value => value + value * rate;
const agregarIVA = addImpuesto(0.16);
console.log(agregarIVA(100)); // 116


/******************************************
 *
 * IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
 */

(function () {
    console.log('This will never run again');
})();


/******************************************
 *
 * CLOSURES
 */

/* A closure gives a function access to all the variables of its parent function, 
even after that parent function has returned. The function keeps a reference to its outer scope, 
which preserves the scope chain throughout time */
const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers