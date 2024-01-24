'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // this.calcAge = function () {
    //     console.log(2024 - this.birthYear);
    // };
};

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
//
// const matilda = new Person('Matilda', 2020);
// const jack = new Person('Jack', 1999);
//
// console.log(matilda, jack);
//
// console.log(jonas instanceof Person);
//
// // Prototypes
//
// console.log(Person.prototype);
//
// Person.prototype.calcAge = function () {
//     console.log(2024 - this.birthYear);
// };
//
// jonas.calcAge();
//
// console.log(jonas.__proto__);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));
//
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);
//
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));
//
// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
//
// const arr = [4, 5, 3, 2, 45, 5, 3, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
//
// Array.prototype.unique = function () {
//     return [...new Set(this)];
// };
//
// console.log(arr.unique());
//
// const h1 = document.querySelector('h1');



















