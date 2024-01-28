

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

const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(res => {
            if (!res.ok) throw new Error(`Problems ${res.status}`)
            return res.json()
        })
        .then(data => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.country}`);

            return fetch(`https://restcountries.com/v3.1/name/${data.country.toLowerCase()}`)
        })
        .then(res => {
            if (!res.ok)
                throw new Error(`Country not found`);
            return res.json()
        })
        .then(data => renderCountry(data[0]))
        .catch(err => console.log(err));
}

btn.addEventListener('click', function () {
    whereAmI(52.508, 13.381);
});




























