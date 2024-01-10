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


// const f1 = 'Michael';
// const f2 = 'Steven';
// const f3 = 'Peter';
//
// const friends = [f1, f2, f3];
//
// friends.push('Jay');
// friends.unshift('New');
//
// console.log(friends);
//
//
// friends.pop();
// const popItem = friends.pop();
// console.log(popItem);
//
// console.log(friends);
//
// friends.shift();
// console.log(friends);
//
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Stevenson'));
//
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
//
// if (friends.includes('Steven')) {
//     console.log('You have Petter');
// }

// const jonasArray = [
//     'Jonas',
//     'Schematised',
//     2024 - 2000,
//     ['Michael', 'Peter'],
// ];
//
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schematised',
//     age: 2024 - 2000,
//     job: 'teacher',
//     friends: ['Michael', 'Peter'],
// };
//
// console.log(typeof jonas);
// console.log(jonas["job"]);
// console.log(jonas.job);
//
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);
//
// jonas.location = 'Ukraine';
// jonas['twitter'] = '@aha';
//
// console.log(jonas);
//
// console.log(`${jonas.firstName} has ${jonas.friends.length},
//  and his best friend is called ${jonas.friends.shift()}`);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schematised',
//     birthYear: 2000,
//     job: 'teacher',
//     friends: ['Michael', 'Peter'],
//     hasDriversLicense: true,
//
//     // calcAge: function (birthYear) {
//     //     return 2024 - birthYear;
//     // }
//
//     calcAge: function () {
//         return 2024 - this.birthYear;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job},
//          and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//     },
// };
//
// console.log(jonas.calcAge());
// // console.log(jonas['calcAge']());
//
// console.log(jonas.getSummary())

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// const jonas = [
//     'Jonas',
//     'Schematised',
//     2024 - 2000,
//     ['Michael', 'Peter'],
// ];
//
// const types = [];
//
// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i]);
//
//     types[i] = typeof jonas[i];
// }
//
// // console.log(types);
//
//
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
//
// for (let i = 0; i < years.length; i++) {
//     ages.push(2024 - years[i]);
// }
// console.log(ages);
//
// console.log(jonas);
//
// console.log('---- ONLY STRINGS ----');
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//
//     console.log(jonas[i]);
// }
//
// console.log('---- BREAK WITH NUMBER ----');
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//
//     console.log(jonas[i]);
// }

//
// const jonas = [
//     'Jonas',
//     'Schematised',
//     2024 - 2000,
//     'teacher',
//     ['Michael', 'Peter'],
// ];
//
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// }
//
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------- Starting exercise ${exercise}`);
//
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//     }
// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weight repetition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}


