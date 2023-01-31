// BMI = mass / height ^ 2 (mass in kg and height in meters)

const mike = {
    firstName: 'Mike',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const mikeBMI = mike.calcBMI();
const johnBMI = john.calcBMI();

let summary;
if (mikeBMI > johnBMI)
    summary = `Mike's BMI (${mike.bmi}) is higher than John's (${john.bmi})!`;
else
    summary = `John's BMI (${john.bmi}) is higher than Mike's (${mike.bmi})!`;

console.log(summary);