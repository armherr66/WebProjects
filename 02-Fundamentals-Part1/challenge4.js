var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
    }
}

var mark = {
    fullName: 'Mark Smith',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
    }
}

john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
    console.log(john.fullName, 'has the highest BMI:', john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName, 'has the highest BMI:', mark.bmi);
} else {
    console.log('Both have the same BMI:', john.bmi);
}