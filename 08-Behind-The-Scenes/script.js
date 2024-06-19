'use strict';

/******************************************
 * 
 * HOISTING
 */

function calcAge(birthYear) {
    const age = 2024 - birthYear;
    // console.log(firstName); // Variable not in Function scope but in Global scope

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output); // "Armando, you are 29, born in 1995"

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = "Alejandro";
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str); // "Oh, and you're a millenia, Alejandro": Variable is in Block scope so JS doesn't look for it out of it

            function add(a, b) {
                return a + b;
            }
        }
        console.log(millenial); // true: The var variables are always in Function scope
        // add(2, 3); // Error: Functions are in Block scope
    }

    printAge();
    return age;
}

const firstName = 'Armando';
calcAge(1995);
// console.log(age); // Error: Not in Global scope


/******************************************
 * 
 * THE THIS KEYWORD
 */

console.log(this); // Window object because it's in the global context

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAge(1995); // Undefined because it's inside a function and we're in strict mode

const calcAge2 = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAge2(2002); // Window object beause it takes the "this" keyword of the parent function (Global context in this case)

const juan = {
    year: 1995,
    calcAge: function () {
        console.log(this);
    }
};

juan.calcAge(); // The "juan" object because the "this" is being called from a function attached to an object

const matilda = {
    year: 2017
};

matilda.calcAge = juan.calcAge;
matilda.calcAge(); // The "matilda" object because the function is being called from that object, it was value copied


/******************************************
 * 
 * REGULAR FUNCTIONS VS ARROW FUNCTIONS
 */

const juan = {
    firstName: 'Juan',
    year: 1995,
    calcAge: function () {
        console.log(this);
    },
    greet: () => console.log(`Hey ${this.firstName}`)
};

juan.greet(); // "Hey undefined" because it's using the Window's this keyword and it doesn't have a "firstName" property


/******************************************
 * 
 * PRIMITIVE VS REFERENCE TYPES
 */

// Primitive types
let age = 29;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 29

// Reference types
const me = {
    firstName: 'Juan',
    age: 30
};

const friend = me;
friend.age = 31;

console.log(me.age); // 31
console.log(friend.age); // 31

// Copy object as primitive value
const alex = {
    firstName: 'Alejandro',
    lastName: 'García',
    age: 21
};
const amorcito = Object.assign({}, alex); // Create a new object and copy the properties
amorcito.lastName = 'Herrera'; // Object.assign() only copies primitive properties. Objects inside the object will be of reference type

console.log('Before marriage:', alex);
console.log('After marriage:', amorcito);