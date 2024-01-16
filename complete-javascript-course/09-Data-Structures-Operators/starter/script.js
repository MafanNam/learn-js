'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [`day-${2+4}`]: {
        open: 0, // Open 24 hours
        close: 24,
    },
}

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6
    openingHours,

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
                                 starterIndex = 1,
                                 mainIndex = 0,
                                 time = '20:00',
                                 address
                             }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]}
         and ${this.mainMenu[mainIndex]} will be delivered
          to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declensions past with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

const properties = Object.keys(openingHours);
console.log(properties);


for (const day of Object.keys(openingHours)) {
    console.log(day);
}

const entries = Object.entries(openingHours);
console.log(entries);

const values = Object.values(openingHours);
console.log(values);





// if (restaurant.openingHours && restaurant.openingHours.mon)
//     console.log(restaurant.openingHours.mon.open);
//
//
// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
//
// for (const day of weekdays) {
//     console.log(day);
//     const open = restaurant.openingHours[day]?.open || 'closed';
//     console.log(`On ${day}, we open at ${open}`);
// }
//
// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
//
//
// // Arrays
// const users = [
//     {name: 'Jonas', email: 'terr@gmail.com'}
// ];
//
// console.log(users[0]?.name ?? 'User array empty');


// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });
//
//
// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });


// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);
//
// let [main, , secondary] = restaurant.categories;
// // console.log(first, second);
//
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);
//
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
//
//
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
//
// console.log(starter, mainCourse);
//
//
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
//
//
// const [p, q, r= 1] = [8, 9];
// console.log(p, q, r);

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName, openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

//
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
//
// ({a, b} = obj);
// console.log(a, b);
//
// const {fri: {open, close}} = openingHours;
// console.log(open, close);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
//
// const newArr = [1, 2, ...arr];
// console.log(newArr);
//
// console.log(...newArr);
//
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
//
// const mainMenuCopy = [...restaurant.mainMenu];
//
// const menu = [...restaurant.starterMenu, ...mainMenuCopy];
// console.log(menu)
//
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Anyschema`);
//
// // const ingredients = [
// //     prompt('Let\'s make pasta! Ingredient 1?'),
// //     prompt('Ingredient 2?'),
// //     prompt('Ingredient 3?'),
// // ];
// //
// // console.log(ingredients);
// //
// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // restaurant.orderPasta(...ingredients);
//
//
// const newRestaurant = {founderIn: 1999, ...restaurant, founder: 'Guiseppe'};
//
// console.log(newRestaurant)
//
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Rome';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


// const arr = [1, 2, ...[3, 4]];
//
// const [a, b, ...others] = [1, 2, 3, 4, 5];
//
// console.log(a, b, others);
//
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
//
// console.log(pizza, risotto, otherFood);
//
// // Objects
// const {thu, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);
//
//
// // 2) Functions
// const add = function (...numbers) {
//     console.log(numbers);
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//     console.log(sum);
// }
// add(2, 3);
// add(5, 3, 7, 2);
//
// const x = [23, 5, 7];
// add(...x);
//
// restaurant.orderPizza('mushrooms', 'onion', 'olives');

// console.log('------- OR -------');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
//
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
//
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
//
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
//
// console.log('------- AND -------');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
//
//
// if (restaurant.orderPizza) {
//     restaurant.orderPizza('mushrooms', 'spinach');
// } else {
//     console.log()
// }
//
// restaurant.orderPizza && restaurant.orderPizza('mass', 'spina');

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
//
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const rest1 = {
//     name: 'Capri',
//     numGuests: 0,
// };
//
// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi',
// };
//
// // rest2.numGuests = rest1.numGuests || 10;
// // rest1.numGuests ||= 10;
// // console.log(rest1.numGuests);
//
// rest1.numGuests ??= 10;
// console.log(rest1.numGuests);
//
//
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
//
// console.log(rest1);
// console.log(rest2);

// let count = 0;
// while (true) {
//     console.log('fff');
//     if (count === 5) {
//         break;
//     }
//     count += 1;
// }


// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//
// for (const item of menu) console.log(item);
//
// for (let [index, item] of menu.entries()) {
//     console.log(index, item);
// }

