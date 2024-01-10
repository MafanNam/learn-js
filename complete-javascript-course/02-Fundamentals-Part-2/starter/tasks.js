//
// const calcAverage = (a, b, c) => (a + b + c) / 3;
//
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
//
// function checkWinner (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log('No team wins...')
//     }
// }
//
// checkWinner(scoreDolphins, scoreKoalas);



// /* Write your code below. Good luck! 🙂 */
// const calcTip = bill => 50 <= bill && bill <= 300 ? bill * 15/100 : bill * 20/100
//
// const bills = [44, 555, 350];
// const tips = [calcTip([bills[0]]), calcTip([bills[1]]), calcTip([bills[2]])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2],]
// console.log(bills);
// console.log(tips);
// console.log(total);
//
// // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)


// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
// };
//
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
// };
//
// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
// } else {
//     console.log('Nothing')
// }


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(tips);
console.log(totals);

const calcAverage = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));



