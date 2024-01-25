'use strict';

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//
//     // this.calcAge = function () {
//     //     console.log(2024 - this.birthYear);
//     // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
//
// const matilda = new Person('Matilda', 2020);
// const jack = new Person('Jack', 1999);
//
// console.log(matilda, jack);
//
// console.log(jonas instanceof Person);
//
// // Prototypes
//
// console.log(Person.prototype);
//
// Person.prototype.calcAge = function () {
//     console.log(2024 - this.birthYear);
// };
//
// jonas.calcAge();
//
// console.log(jonas.__proto__);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));
//
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);
//
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));
//
// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
//
// const arr = [4, 5, 3, 2, 45, 5, 3, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
//
// Array.prototype.unique = function () {
//     return [...new Set(this)];
// };
//
// console.log(arr.unique());
//
// const h1 = document.querySelector('h1');


// // class expression
// const PersonCL = class {
//
// };

// class declaration
// class PersonCL {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     };
//
//     calcAge () {
//         console.log(2024 - this.birthYear);
//     };
//
//     get age() {
//         return 2024 - this.birthYear;
//     };
//
//     get fullName() {
//         return this._fullName;
//     };
//
//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name;
//         else console.log(`${name} is not a full name!`);
//     };
//
//     static hey() {
//         console.log('Hey there!');
//     };
//
//
// }
//
// const jessica = new PersonCL('Jessica Davis', 1996);
// console.log(jessica)
// jessica.calcAge();
// console.log(jessica.age);
//
//
// PersonCL.prototype.greet = function () {
//     console.log(`Hey ${this.fullName}`);
// };
//
// jessica.greet();
//
// const walter = new PersonCL('Walter White', 1956);
//
//
//
// // 1.
//
// const account = {
//     owner: 'Jonas',
//     movements: [200, 530, 120, 300],
//
//     get latest() {
//         return this.movements.slice(-1).pop();
//     },
//
//     set latest(mov) {
//         this.movements.push(mov);
//     },
//
// };
//
// console.log(account.latest);
//
// account.latest = 50;
// console.log(account.movements);
//
//
// PersonCL.hey();
// // jessica.hey();


// const PersonProto = {
//     calcAge() {
//         console.log(2024 - this.birthYear);
//     },
//
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
// };
//
// const steven = Object.create(PersonProto);
// console.log(steven);
// // steven.calcAge();
//
// steven.name = 'Steven';
// steven.birthYear = 2000;
//
// steven.calcAge();
//
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();


// const Person = function (firstName, birthYear) {
//     this.firstName = firstName
//     this.birthYear = birthYear
// };
// Person.prototype.calcAge = function () {
//     console.log(2024 - this.birthYear);
// };
//
//
//
// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// };
//
// Student.prototype = Object.create(Person.prototype);
//
// // Student.prototype = Person.prototype;
//
// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }
//
//
// const mike = new Student('Mike', 2000, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();
//
// console.log(mike.__proto__);
//
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);


// class PersonCL {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     };
//
//     calcAge() {
//         console.log(2024 - this.birthYear);
//     };
//
//     get age() {
//         return 2024 - this.birthYear;
//     };
//
//     get fullName() {
//         return this._fullName;
//     };
//
//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name;
//         else console.log(`${name} is not a full name!`);
//     };
//
//     static hey() {
//         console.log('Hey there!');
//     };
// }
//
// class StudentCL extends PersonCL {
//     constructor(fullName, birthYear, course) {
//         super(fullName, birthYear);
//         this.course = course;
//     }
//
//     introduce() {
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     }
//
//     calcAge() {
//         console.log(`I'm ${2024 - this.birthYear} years old`);
//     }
// }
//
// const martha = new StudentCL('Martha Jones', 2012, 'Comp Sie');
// console.log(martha);
//
// martha.introduce();
// martha.calcAge();


// const PersonProto = {
//     calcAge() {
//         console.log(2024 - this.birthYear);
//     },
//
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
// };
//
// const steven = Object.create(PersonProto);
//
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// };
// StudentProto.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }
//
//
// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'CS');
// jay.introduce();
// jay.calcAge();
// console.log(jay);


class Account {
    // Public fields
    locale = navigator.language;

    // Private fields
    #movements = [];
    #pin;


    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            console.log(`Loan approved`);
        }
        return this;
    }

    static helper() {
        console.log('Helper');
    }

    // Private methods
    // #approveLoan(val) {
    _approveLoan(val) {
        return true;
    }

}

const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000);
console.log(acc1.getMovements());
// console.log(acc1.#pin);
console.log(acc1);

// console.log(acc1.#movements);

// const acc2 = new Account('Jonas', 'EUR', 1111);
// console.log(acc2);

Account.helper();

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000);
console.log(acc1.getMovements());







