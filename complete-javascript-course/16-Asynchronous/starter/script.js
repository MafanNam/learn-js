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



const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        // console.log(this.responseText);

        const [data] = JSON.parse(this.responseText);
        console.log(data);
        const lang = data.languages;
        console.log(lang)
        // console.log(data[0].flag);

        renderCountry(data);
    });
}



const getCountryAndNeighbour = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        // console.log(this.responseText);

        const [data] = JSON.parse(this.responseText);
        // console.log(data[0].flag);

        // Render country 1
        renderCountry(data);

        // Get neighbour country (2)
        const neighbour = data.borders?.[0];

        if (!neighbour) return;

        // AJAX call 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function () {
            const [data2] = JSON.parse(this.responseText);

            renderCountry(data2, 'neighbour');
        });

    });
}

// getCountryData('ukraine');
// getCountryData('usa');
getCountryAndNeighbour('portugal')
setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('1 second passed');
        setTimeout(() => {
            console.log('1 second passed');
            setTimeout(() => {
                console.log('1 second passed');
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)


