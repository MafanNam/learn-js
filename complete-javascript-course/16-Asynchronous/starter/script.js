'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1_000_000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages}</p>
            <p class="country__row"><span>💰</span>${data.currencies}</p>
          </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = '1';
}

// const renderError = function (msg) {
//     countriesContainer.insertAdjacentHTML('beforeend', msg);
//     // countriesContainer.style.opacity = 1;
// }


//
//
//
// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//
//     request.addEventListener('load', function () {
//         // console.log(this.responseText);
//
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         const lang = data.languages;
//         console.log(lang)
//         // console.log(data[0].flag);
//
//         renderCountry(data);
//     });
// }
//
//
//
// const getCountryAndNeighbour = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//
//     request.addEventListener('load', function () {
//         // console.log(this.responseText);
//
//         const [data] = JSON.parse(this.responseText);
//         // console.log(data[0].flag);
//
//         // Render country 1
//         renderCountry(data);
//
//         // Get neighbour country (2)
//         const neighbour = data.borders?.[0];
//
//         if (!neighbour) return;
//
//         // AJAX call 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//         request2.send();
//
//         request2.addEventListener('load', function () {
//             const [data2] = JSON.parse(this.responseText);
//
//             renderCountry(data2, 'neighbour');
//         });
//
//     });
// }
//
// // getCountryData('ukraine');
// // getCountryData('usa');
// getCountryAndNeighbour('portugal')
// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('1 second passed');
//         setTimeout(() => {
//             console.log('1 second passed');
//             setTimeout(() => {
//                 console.log('1 second passed');
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

// const request = fetch(`https://restcountries.com/v3.1/name/ukraine`);
// console.log(request);

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok)
//             throw new Error(errorMsg);
//         return response.json()
//     });
// };
//
// const getCountryData = function (country) {
//     getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders?.[0];
//             // const neighbour = 'fdgfgd';
//
//             if (!neighbour) throw new Error('No neighbour found!');
//
//             return getJSON(
//                 `https://restcountries.com/v3.1/alpha/${neighbour}`,
//                 'Country not found')})
//         .then(data => renderCountry(data[0], 'neighbour'))
//         .catch(err => {
//             console.error(err);
//             renderError(`Something went wrong ${err.message}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         })
// };
//
// btn.addEventListener('click', function () {
//     getCountryData('germany');
// });
//
//
// // getCountryData('germanfff');


// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
//
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//     for (let i = 0; i < 1000000000; i++) {
//         i++;
//     }
//     console.log(res);
// });
//
// console.log('Test end');


// const lotteryPromise = new Promise(function (resolve, reject) {
//
//     console.log('Lottery draw is happening')
//     setTimeout(function () {
//         if (Math.random() >= 0.5) {
//             resolve('You WIN 👌');
//         } else {
//             reject(new Error('You lost your money 🪫'));
//         }
//     }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };
//
// wait(2).then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
// }).then(() => console.log('I waited for 1'));
//
//
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('abc')).catch(x => console.error(x));


// console.log('Getting position');


// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         // navigator.geolocation.getCurrentPosition(
//         //     position => resolve(position),
//         //     positionError => reject(positionError),
//         // );
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// };
// console.log('hah1');
// getPosition().then(res => console.log(res)).catch(err => console.error(new Error('EROR AAHHAH')));
// console.log('hah2');
//
//
// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// };
//
//
// const whereAmI = async function () {
//     try {
//         const pos = await getPosition();
//         const {latitude: lat, longitude: lng} = pos.coords;
//
//         const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//         if (!resGeo.ok) throw new Error('Problems');
//
//         const dataGeo = await resGeo.json();
//         console.log(dataGeo);
//
//         const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
//         const data = await res.json();
//         console.log(data);
//         renderCountry(data[0]);
//
//         return `You are in ${dataGeo.city}`;
//     } catch (err) {
//         console.log(err.message);
//
//         throw err;
//
//     }
// };
//
// console.log('1: ');
// // const city = whereAmI();
// // console.log(city.then(res => console.log(res)));
// // whereAmI()
// //     .then(city => console.log(city))
// //     .catch(err => console.error(err));
// //
// // console.log('3: ');
//
//
// // try {
// //     let y = 1;
// //     const x = 2;
// //     y = 3;
// // } catch (err) {
// //     console.log(err.message);
// // }
//
// (async function () {
//     try {
//         const city = await whereAmI();
//         console.log(city);
//     } catch (err) {
//         console.error(err);
//     }
// })();


// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok)
//             throw new Error(errorMsg);
//         return response.json()
//     });
// };
//
// const get3Countries = async function (c1, c2, c3) {
//     try {
//         // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//         // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//         // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//
//         const data = await Promise.all([
//             getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//         ]);
//
//         console.log(data.map(d => d[0].capital));
//     } catch (err) {
//         console.error(err.message);
//     }
// };
// get3Countries('ukraine', 'canada', 'portugal');


// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok)
//             throw new Error(errorMsg);
//         return response.json()
//     });
// };
//
//
// (async function () {
//     const res = await Promise.race([
//         getJSON(`https://restcountries.com/v3.1/name/ukraine`),
//         getJSON(`https://restcountries.com/v3.1/name/canada`),
//         getJSON(`https://restcountries.com/v3.1/name/portugal`),
//     ]);
//     console.log(res[0]);
// })();
//
// const timeout = function (s) {
//     return new Promise(function (_, reject) {
//         setTimeout(function () {
//             reject(new Error('Request took too long'))
//         }, s * 1000);
//     });
// };
//
// Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/ukraine`),
//     timeout(0.1),
// ]).then(res => console.log(res[0])).catch(err => console.error(err));
//
//
// // Promise.allSettled
//
// Promise.allSettled([
//     Promise.resolve('Success'),
//     Promise.reject('ERROR'),
//     Promise.resolve('Another Success'),
// ]).then(res => console.log(res));
//
// // Promise.any
//
// Promise.any([
//     Promise.resolve('Success'),
//     Promise.reject('ERROR'),
//     Promise.resolve('Another Success'),
// ]).then(res => console.log(res));


















