'use strict';

//
// const renderCountry = function (data, className = '') {
//     const html = `
//     <article class="country ${className}">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1_000_000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages}</p>
//             <p class="country__row"><span>💰</span>${data.currencies}</p>
//           </div>
//         </article>
//     `;
//
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = '1';
// }
//
// const whereAmI = function (lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//         .then(res => {
//             if (!res.ok) throw new Error(`Problems ${res.status}`)
//             return res.json()
//         })
//         .then(data => {
//             console.log(data);
//             console.log(`You are in ${data.city}, ${data.country}`);
//
//             return fetch(`https://restcountries.com/v3.1/name/${data.country.toLowerCase()}`)
//         })
//         .then(res => {
//             if (!res.ok)
//                 throw new Error(`Country not found`);
//             return res.json()
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(err => console.log(err));
// }
//
// btn.addEventListener('click', function () {
//     whereAmI(52.508, 13.381);
// });

const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        })
    });
};

let currentImg;

createImage('img/img-1.jpg')
    .then(res => {
        currentImg = res;
        console.log(res);
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-2.jpg')
    })
    .then(res => {
        currentImg = res;
        console.log(res);
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch(err => console.error(err));
























