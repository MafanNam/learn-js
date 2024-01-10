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
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}`;
// }
//
// console.log(yearsUntilRetirement(2000, 'Max'));

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


// const f1 = 'Michael';
// const f2 = 'Steven';
// const f3 = 'Peter';
//
// const friends = [f1, f2, f3];
//
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(typeof friends);
//
// const arrayFriends = new Array(f1, f2, f3);
//
// console.log(arrayFriends.length);
// console.log(typeof arrayFriends);
//
// friends[2] = 'New';
// friends[3] = 'New3';
//
// console.log(friends);
//
// const calcAge = years => 2024 - years;
//
// const jonas = ['Jonas', 'Sch', friends, arrayFriends];
// console.log(jonas);
// console.log(jonas[2][2]);
//
// const ages = ['f',];



const f1 = 'Michael';
const f2 = 'Steven';
const f3 = 'Peter';

const friends = [f1, f2, f3];

friends.push('Jay');
friends.unshift('New');

console.log(friends);


friends.pop();
const popItem = friends.pop();
console.log(popItem);

console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Stevenson'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
    console.log('You have Petter');
}
