// function describeCountry(country, population, capitalCity) {
//     console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
// }
//
// describeCountry('Finland', 6, 'Helsinki');
//
//
// function percentageOfWorld1(population) {
//     return population / 7900 * 100;
// }
//
// console.log(percentageOfWorld1(1441));
//
//
// const percentageOfWorld2 = function (population) {
//     return population / 7900 * 100;
// }
//
// console.log(percentageOfWorld2(1441));
//
// const percentageOfWorld3 = (population) => population / 7900 * 100;
//
// console.log(percentageOfWorld3(1441));
//
// const describePopulation = (country, population) => `${country} has ${population} million people,
// which is about ${percentageOfWorld2(population)}% of the world.`;
//
// console.log(describePopulation('China', 1441));
//


// const percentageOfWorld3 = (population) => population / 7900 * 100;
//
// const populations = [14, 20, 44, 10];
// console.log(populations);
// console.log(populations.includes(100));
// console.log(populations.includes(20));
//
// const percentages = [
//     percentageOfWorld3(populations[0]), percentageOfWorld3(populations[1]),
//     percentageOfWorld3(populations[2]), percentageOfWorld3(populations[3])];
//
// console.log(percentages);
//
// const neighbours = ['City1', 'City2', 'City3'];
// console.log(neighbours);
//
// neighbours[3] = 'Utopia';
// console.log(neighbours);
//
// neighbours.pop();
// console.log(neighbours);
//
//
// if (!neighbours.includes('Germany'))
//     console.log('Probably not a central European country :D');
//
// neighbours[neighbours.indexOf('City1')] = 'NewCity1';
// console.log(neighbours);

//
// const myCountry = {
//     country: 'Ukraine',
//     capital: 'Government',
//     language: 'ukraine',
//     population: 500,
//     neighbours: ['Poland', 'Germany'],
//     describe: function () {
//         console.log(`${this.country} has ${this.population} million
// ${this.language}-speaking people, ${this.neighbours.length}
// neighbouring countries and a capital called ${this.capital}.`);
//     },
//
//     checkIsland: function () {
//         this.isIsland = !this.neighbours.length;
//         return this.isIsland;
//     },
// };
//
// // console.log(`${myCountry.country} has ${myCountry.population} million
// // ${myCountry.language}-speaking people, ${myCountry.neighbours.length}
// // neighbouring countries and a capital called ${myCountry.capital}.`)
//
// myCountry.describe();
//
// myCountry.population += 2;
// console.log(myCountry.population);
//
// myCountry['population'] -= 2;
// console.log(myCountry.population);
//
// myCountry.checkIsland()
//
// console.log(myCountry.isIsland);


// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// }



// function percentageOfWorld1(population) {
//     return population / 7900 * 100;
// }
//
// const populations = [14, 20, 44, 10];
//
// let percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]));
// }
//
// console.log(populations, percentages2);



const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}



function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const populations = [14, 20, 44, 10];

let percentages3 = [];
let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}

console.log(populations, percentages3);

