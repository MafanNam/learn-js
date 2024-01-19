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

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);