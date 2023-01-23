var johnAverage = (89 + 120 + 103) / 3;
var mikeAverage = (116 + 94 + 123) / 3;
var maryAverage = (97 + 134 + 105) / 3

switch (true) {
    case johnAverage > mikeAverage && johnAverage > maryAverage:
        console.log('John\'s team wins with', johnAverage, 'points');
        break;
    case mikeAverage > johnAverage && mikeAverage > maryAverage:
        console.log('Mike\'s team wins with', mikeAverage, 'points');
        break;
    case maryAverage > johnAverage && maryAverage > mikeAverage:
        console.log('Mary\'s team wins with', maryAverage, 'points');
        break;
    default:
        console.log('Draw with', johnAverage, 'points');
        break;
}