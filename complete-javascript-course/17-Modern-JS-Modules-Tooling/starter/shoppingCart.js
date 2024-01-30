// Exporting module
console.log('Exporting module');

// Blocking code
console.log('Start users');
await fetch(`https://jsonplaceholder.typicode.com/users`);
console.log('Finish users');


const shippingCost = 10;
const cart = [];

const addToCart = function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 237;
const totalQuantity = 23;

export {addToCart, totalPrice, totalQuantity};

export default function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}