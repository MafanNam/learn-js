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

const neighbours = ['City1', 'City2', 'City3'];
console.log(neighbours);

neighbours[3] = 'Utopia';
console.log(neighbours);

neighbours.pop();
console.log(neighbours);


if (!neighbours.includes('Germany'))
    console.log('Probably not a central European country :D');

neighbours[neighbours.indexOf('City1')] = 'NewCity1';
console.log(neighbours);