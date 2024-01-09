// 'use strict';
//
// let hasDriversLicense = false;
// const passTest = true;
//
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');


// const interface = 'Audio';
// const private = 555;


// function logger() {
//     console.log('My name is Max');
// }
//
// // logger();
//
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
//
// console.log(fruitProcessor(5, 0));
// console.log(logger());

// function calcAge1(birthYear) {
//     return 2024 - birthYear;
// }
//
// // console.log(calcAge1(2004));
//
// const calcAge2 = function (birthYear) {
//     return 2024 - birthYear;
// }
//
// const age2 = calcAge2(2000);
//
// // console.log(age2);
//
// const calcAge3 = birthYear => 2024 - birthYear;
// // console.log(calcAge3(2000));
//
//
// const yearsUntilReetirement = (birthYear, firstName) => {
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}`;
// }
//
// console.log(yearsUntilReetirement(2000, 'Max'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
//
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//
//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} oranges.`;
//     return juice;
// }
//
// console.log(fruitProcessor(5, 33));

// const calcAge = function (birthYear) {
//     return 2024 - birthYear;
// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} already retires in ${retirement} years`);
//         return -1;
//     }
//
//     return retirement;
// }
//
// console.log(yearsUntilRetirement(2000, 'Max'));
// console.log(yearsUntilRetirement(1800, 'Max'));

