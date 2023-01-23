var markMass = 68;
var markHeight = 1.69;

var johnMass = 67;
var johnHeight = 1.80;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

var markHigherThanJohn = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's?", markHigherThanJohn);