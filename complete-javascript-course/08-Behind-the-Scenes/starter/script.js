'use strict';
//
// const firstName = 'Jonas';
//
// function calcAge(birthYear) {
//     const age = 2024 - birthYear;
//
//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);
//
//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millennial = true;
//             const firstName = 'Steven';
//             const str = `Oh, and you're a millennial, ${firstName}`;
//             console.log(str);
//
//             function add(a, b) {
//                 return a + b;
//             }
//
//             output = 'NEW OUTPUT!';
//         }
//         // console.log(str);
//         console.log(millennial);
//         // console.log(add(2, 3));
//         console.log(output)
//     }
//
//     printAge();
//
//     return age;
// }
//
//
// calcAge(1991);
// // console.log(age);
// // printAge();
//

// console.log(me);
// // console.log(job);
// // console.log(year);
//
// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;
//
//
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));
//
// function addDecl(a, b) {
//     return a + b;
// }
//
// var addExpr = function (a, b) {
//     return a + b;
// }
//
// var addArrow = (a, b) => a + b;
//
// // ---------------------
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();
//
// var numProducts = 20;
//
// function deleteShoppingCart() {
//     console.log('All products deleted!');
// }
//
// var x = 1;
// let y = 2;
// const z = 3;
//
// console.log(x === window.x);
// // console.log(y === window.y);
// // console.log(z === window.z);


// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2024 - birthYear);
//     console.log(this);
// }
//
// calcAge(1999);
//
// const calcAgeArrow = birthYear => {
//     console.log(2024 - birthYear);
//     console.log(this);
// }
//
// calcAgeArrow(1999);
//
//
// const jonas = {
//     year: 1999,
//     calcAge: function () {
//         console.log(this);
//         console.log(2024 - this.year);
//     }
// };
// jonas.calcAge();
//
// const matilda = {
//     year: 2010,
// };
//
// matilda.caclAge = jonas.calcAge;
//
// matilda.caclAge();
//
// const f = jonas.calcAge;
// // f();

// const firstName = 'Matilda';
// var firstName = 'Matilda';

// const jonas = {
//     firstName: 'Jonas',
//     year: 1990,
//     calcAge: function () {
//         // console.log(this);
//         console.log(2024 - this.year);
//
//         // const self = this; // self or that
//         // const isMillenial = function () {
//         //     console.log(self);
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         //     // console.log(this.year >= 1981 && this.year <= 1996);
//         // };
//
//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial();
//     },
//
//     greet: () => {
//         console.log(`Hey ${this.firstName}`);
//     },
// };
// // jonas.greet();
// // jonas.calcAge();
//
//
// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// var addArray = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// // addArray(2, 5);
// addArray(2, 5, 8, 12);


// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Jonas',
//     age: 30,
// };
// const friend = me;
//
// friend.age = 27;
//
// // console.log(me.age);
// // console.log(friend.age);
//
//
// let age = 30;
// let oldAge = age;
// age += 1;
// console.log(age);
// console.log(oldAge);


// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// // console.log(lastName, oldLastName);
//
// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 29,
// };
// // jessica.lastName = 'New';
//
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// // console.log(jessica);
// // console.log(marriedJessica);
//
//
// // marriedJessica = {};
//
// const jessica2 = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 29,
//     family: ['Alice', 'Bob'],
// };
//
// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';
// jessicaCopy.family.push('Marry');
// jessicaCopy.family.push('Django');
// console.log(jessica2);
// console.log(jessicaCopy);
