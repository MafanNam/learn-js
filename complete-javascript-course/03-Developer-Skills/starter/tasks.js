
const printForecast = function (arr) {
    let res = `... `;
    for (let i = 0; i < arr.length; i++) {
        // console.log(`${arr[i]}C in ${i+1} days`);
        res += `${arr[i]}C in ${i + 1} days ... `;
    }
    return res;
}

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));








