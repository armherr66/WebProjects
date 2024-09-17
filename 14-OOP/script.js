'use strict';

/******************************************
 *
 * CONSTRUCTOR FUNCTIONS & PROTOTYPES
 */

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

/* 
  1. New empty object is created
  2. Function is called, this = {}
  3. Object is linked to prototype
  4. Function automatically returns object
*/
const armando = new Person('Armando', 1995);
console.log(armando); // Object { firstName: "Armando", birthYear: 1995 }

const alex = new Person('Alejandro', 2002);
const brenda = new Person('Brenda', 2000);

console.log(alex instanceof Person); // true

// Prototypes
// Each function has a prototype property
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

// Now all the instances of Person will have access to the calcAge method
armando.calcAge(); // 29

// The prototype property of the constructor function is what the linked objects will hava as __proto__
console.log(armando.__proto__ === Person.prototype); // true

// Properties can also be added to the prototype
Person.prototype.species = 'Homo Spaiens'; // All the objects have this property in the __proto__ object
console.log(armando.species); // Homo Sapiens
console.log(armando.hasOwnProperty('firstName')); // true
console.log(armando.hasOwnProperty('species')); // false, because it's not being declared directly in the object

/******************************************
 *
 * ES6 CLASSES
 */

// Classes are not hoisted (can not be used before declaration)

// Class Expression
const PersonExp = class {};

// Class Declaration
class Persona {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  static hey() {
    console.log('Hey there 👋🏽');
  }
}

const mary = new Persona('Maricela', 1971);
console.log(mary); // Object { firstName: "Maricela", birthYear: 1971 }
mary.calcAge(); // 53

// Getters and Setters
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300
account.latest = 50;
console.log(account.latest); // 50
