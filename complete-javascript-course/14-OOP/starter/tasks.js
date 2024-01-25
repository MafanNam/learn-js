'use strict';

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(this.speed);
// };
//
// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(this.speed);
// };
//
// const car1 = new Car('BMV', 120);
// const car2 = new Car('Mercedes', 95);
//
// console.log(car1, car2);
// car1.accelerate();
// car1.brake();


class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    get speedUS () {
        return this.speed / 1.6;
    }

    set speedUS (speed) {
        this.speed = speed * 1.6;
    }

    accelerate () {
        this.speed += 10;
        console.log(this.speed);
    };

    brake () {
        this.speed -= 5;
        console.log(this.speed);
    };

}


const car1CL = new CarCl('BMV', 120);
const car2CL = new CarCl('Mercedes', 95);

console.log(car1CL, car2CL);
car1CL.accelerate();
car1CL.brake();
console.log(car1CL.speedUS);
car1CL.speedUS = 44;
console.log(car1CL);



