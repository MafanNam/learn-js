'use strict';


const checkDogs = function (dogsJulia, dogsKate) {
    const trueDogsJulia = dogsJulia.slice(1, -2);
    const allDogs = [...trueDogsJulia, ...dogsKate];
    // console.log(dogsJulia);
    // console.log(trueDogsJulia);
    allDogs.forEach(function (value, index) {
        console.log(value >= 3 ?
            `Dog number ${index + 1} is an adult, and is ${value} years old` :
            `Dog number ${index + 1} is still a puppy`);
    })

};

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const calcAverageHumanAge = function (ages) {
    const humanAge = ages.map(val => val <= 2 ? 2 * val : 16 + val * 4)
        .filter(val => val >= 18);

    const avgAge = humanAge.reduce((acc, val) => acc + val, 0) / humanAge.length;
    // const avgAge = humanAge.reduce((acc, val, i, arr) => acc + val / arr.length, 0);
    console.log(humanAge);
    console.log(avgAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

