// Importing module
// import {addToCart, totalPrice as price, totalQuantity} from "./shoppingCart.js";
//
// console.log('Importing module');
//
// addToCart('d', 3);
//
// console.log(totalQuantity, price);
//
// import add from './shoppingCart.js';
//
// add('d', 100);
//
// // console.log('Start fetching');
// // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// // const data = await res.json();
// // console.log(data);
// // console.log('Something');
//
// const getLastPost = async function () {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const data = await res.json();
//     // console.log(data);
//
//     return {title: data.at(-1).title, text: data.at(-1).body};
// };
//
// const lastPost = getLastPost();
// console.log(lastPost)
//
// const lastPost2 = await getLastPost()
// console.log(lastPost2);

// const ShoppingCart2 = (function () {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;
//
//     const addToCart = function (product, quantity) {
//         cart.push({product, quantity});
//         console.log(`${quantity} ${product} added to cart`);
//     };
//
//     const orderStock = function (product, quantity) {
//         cart.push({product, quantity});
//         console.log(`${quantity} ${product} ordered to supplier`);
//     };
//
//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity,
//     };
// })();
//
// // ShoppingCart2.addToCart('apple', 4);
// // ShoppingCart2.addToCart('pizza', 2);
// // console.log(ShoppingCart2);
// // console.log(ShoppingCart2.shippingCost);
//
// const test = function () {
//     addToCart('33', 44);
// }
//
// const addToCart = function (product, quantity) {
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to cart`);
// };
//
// const orderStock = function (product, quantity) {
//     // cart.push({product, quantity});
//     console.log(`${quantity} ${product} ordered to supplier`);
// };
//
// test();
//
// export function (product, quantity) {
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to cart`);
// };


// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
//
// const state = {
//     cart: [
//         {product: 'bread', quantity: 5},
//         {product: 'pizza', quantity: 5},
//     ],
//     user: {loggedIn: true},
// };
//
// const stateClone = Object.assign({}, state);
// console.log(stateClone);
//
// const stateDeepClone = cloneDeep(state);
// console.log(stateDeepClone);


























