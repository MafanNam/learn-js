'use strict';

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//
//     // this.calcAge = function () {
//     //     console.log(2024 - this.birthYear);
//     // };
// };

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


// // class expression
// const PersonCL = class {
//
// };

// class declaration
// class PersonCL {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     };
//
//     calcAge () {
//         console.log(2024 - this.birthYear);
//     };
//
//     get age() {
//         return 2024 - this.birthYear;
//     };
//
//     get fullName() {
//         return this._fullName;
//     };
//
//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name;
//         else console.log(`${name} is not a full name!`);
//     };
//
//     static hey() {
//         console.log('Hey there!');
//     };
//
//
// }
//
// const jessica = new PersonCL('Jessica Davis', 1996);
// console.log(jessica)
// jessica.calcAge();
// console.log(jessica.age);
//
//
// PersonCL.prototype.greet = function () {
//     console.log(`Hey ${this.fullName}`);
// };
//
// jessica.greet();
//
// const walter = new PersonCL('Walter White', 1956);
//
//
//
// // 1.
//
// const account = {
//     owner: 'Jonas',
//     movements: [200, 530, 120, 300],
//
//     get latest() {
//         return this.movements.slice(-1).pop();
//     },
//
//     set latest(mov) {
//         this.movements.push(mov);
//     },
//
// };
//
// console.log(account.latest);
//
// account.latest = 50;
// console.log(account.movements);
//
//
// PersonCL.hey();
// // jessica.hey();


const PersonProto = {
    calcAge() {
        console.log(2024 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven);
// steven.calcAge();

steven.name = 'Steven';
steven.birthYear = 2000;

steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();












