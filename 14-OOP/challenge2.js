'use strict';

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

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
  }

  brake() {
    this.speed -= 5;
    console.log(`Speed: ${this.speed}km/h`);
  }

  get speedUS() {
    console.log(`Speed US: ${this.speed / 1.6}mi/h`);
  }

  set speedUS(vel) {
    this.speed = vel * 1.6;
  }
}

const car1 = new Car('Mazda', 0);
const car2 = new Car('Renault', 10);

console.log('Car 1');
car1.accelerate();
car1.accelerate();
car1.brake();
car1.speedUS;

console.log('Car 2');
car2.accelerate();
car2.brake();
car2.accelerate();
car2.brake(); // 20

car2.speedUS; // 12.5
car2.speedUS = 18.75;
console.log(car2.speed); // 30
