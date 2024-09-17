'use strict';

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Speed: ${this.speed}km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`Speed: ${this.speed}km/h`);
    return this;
  }
}

class EV extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`The battery is ${this.#charge}%`);
    return this;
  }
}

const ev1 = new EV('Rivian', 120, 23);
ev1.accelerate().brake().chargeBattery(28);
