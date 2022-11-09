let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];
let three = someNumbers.some(multipleOfThree);
let five = someNumbers.some(multipleOfFive);
let sixty = someNumbers.some(multipleOfSixty);
let ninety = someNumbers.some(multipleOfNinety);

function multipleOfThree(item) {
    return item % 3 === 0;
}

function multipleOfFive(item) {
    return item % 5 === 0;
}

function multipleOfSixty(item) {
    return item % 60 === 0;
}

function multipleOfNinety(item) {
    return item % 90 === 0;
}