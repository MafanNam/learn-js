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

// console.log(car1, car2);
// car1.accelerate();
// car1.brake();
//
//
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


// const car1CL = new CarCl('BMV', 120);
// const car2CL = new CarCl('Mercedes', 95);
//
// console.log(car1CL, car2CL);
// car1CL.accelerate();
// car1CL.brake();
// console.log(car1CL.speedUS);
// car1CL.speedUS = 44;
// console.log(car1CL);


// const EV = function (make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// };
//
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = Car
//
// EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo;
// };
//
// EV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge--;
//     console.log(`Tesla going at ${this.speed}km/h, with a charge of ${this.charge}%`);
// };
//
// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// tesla.accelerate();



class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery (chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate () {
        this.speed += 20;
        this.#charge--;
        console.log(`Tesla going at ${this.speed}km/h, with a charge of ${this.#charge}%`);
        return this;
    }

}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().accelerate().accelerate().chargeBattery(50);
console.log(rivian);