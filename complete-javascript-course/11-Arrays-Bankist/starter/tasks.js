'use strict';


// const checkDogs = function (dogsJulia, dogsKate) {
//     const trueDogsJulia = dogsJulia.slice(1, -2);
//     const allDogs = [...trueDogsJulia, ...dogsKate];
//     // console.log(dogsJulia);
//     // console.log(trueDogsJulia);
//     allDogs.forEach(function (value, index) {
//         console.log(value >= 3 ?
//             `Dog number ${index + 1} is an adult, and is ${value} years old` :
//             `Dog number ${index + 1} is still a puppy`);
//     })
//
// };
//
// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
//
// const calcAverageHumanAge = function (ages) {
//     const humanAge = ages.map(val => val <= 2 ? 2 * val : 16 + val * 4)
//         .filter(val => val >= 18);
//
//     const avgAge = humanAge.reduce((acc, val) => acc + val, 0) / humanAge.length;
//     // const avgAge = humanAge.reduce((acc, val, i, arr) => acc + val / arr.length, 0);
//     console.log(humanAge);
//     console.log(avgAge);
// };
//
// // calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
//
//
// const calcAverageHumanAgeChaining = ages => ages
//     .map(val => val <= 2 ? 2 * val : 16 + val * 4)
//     .filter(val => val >= 18)
//     .reduce((acc, val, i, arr) => acc + val / arr.length, 0);


// console.log(calcAverageHumanAgeChaining([5, 2, 4, 1, 15, 8, 3]));



const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];


// 1.

dogs.forEach(dog=>
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));
// console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`${dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'}`);


// 3.
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);


const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);


// 4.
// Matilda and Alice and Bob's dogs eat too much!"
// "Sarah and John and Michael's dogs eat too little!

console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);


// 5.

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
console.log(dogs.some(dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1));


// 7.

const dogsOkay = dogs.filter(dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1);

console.log(dogsOkay);


const copyDogs = dogs.slice()
    .sort((a, b) => a.curFood - b.recommendedFood);
console.log(copyDogs);





















