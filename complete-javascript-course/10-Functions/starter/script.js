'use strict';


// const bookings= []
// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//
//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// };
//
// createBooking('LH123');
// createBooking('LH123', 4, 444);
// createBooking('LH123', undefined, 444);


// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtman',
//     passport: 2343242342,
// };
//
// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;
//
//     if (passenger.passport === 2343242342) {
//         alert('Checked in');
//     } else {
//         alert('Wrong passport!');
//     }
// };
//
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
//
//
// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 1000000000);
// };
//
// newPassport(jonas);
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);


// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// };
//
// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };
//
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//
//     console.log(`Transformed by: ${fn.name}`);
// };
//
// transformer('JavaScript is the best!', oneWord);
//
//
// const high5 = function () {
//     console.log('👌');
// };
// document.body.addEventListener('click', high5);
//
// ['Jonas', 'Martha', 'Adam'].forEach(high5);


// const great = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };
//
// const greeterHey = great('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');
//
// great('Hello')('Max');


// const greatArr = greeting => name => console.log(`${greeting} ${name}`);
//
// const greeterHey = greatArr('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// const lufthansa = {
//     airline: 'Lufthansa',
//     dataCode: 'LH',
//     bookings: [],
//
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.dataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.dataCode}`});
//     },
// };
//
// // lufthansa.book(239, 'Jonas Schemedtamnn');
// // console.log(lufthansa.bookings);
//
//
// // const book = lufthansa.book;
//
// const eurowings = {
//     airline: 'Eurowings',
//     dataCode: 'EW',
//     bookings: [],
//     // book,
// };
//
//
// // eurowings.book(444, 'AHAHAHA')
// // console.log(eurowings.bookings);
//
// const book = lufthansa.book;
// // book.call(lufthansa, 23, 'Sarah Wing');
// // console.log(lufthansa.bookings)
//
//
// const swiss = {
//     airline: 'Sarah GG',
//     dataCode: 'LX',
//     bookings: [],
// };
//
// // book.call(swiss, 444, 'Mary Cooper');
//
//
// // const flightData = [544, 'George Cooper'];
// // book.apply(swiss, flightData);
//
// // console.log(swiss.bookings)
//
// // Bind
//
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
//
// // bookEW(23, 'Steven');
//
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Steven');
//
// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);
//
//     this.planes++;
//     console.log(this.planes);
// };
//
// document.querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
//
//
//  const addTax = (rate, value) => value + value * rate;
//  console.log(addTax(0.1, 200));
//
//  const addVAT = addTax.bind(null, 0.3);
//  console.log(addVAT(300));
//
//
//  const ad2 = function (rate) {
//      return function (value) {
//          return value + value * rate;
//      };
//  };
//
//  const addVAT2 = ad2(0.3);
//  console.log(addVAT2(300));





