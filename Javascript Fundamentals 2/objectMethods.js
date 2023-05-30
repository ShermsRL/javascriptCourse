// Object methods

// object can also contain function
const sherman = {
    firstName: 'Sherman',
    lastName: 'Tay',
    birthYear: 1998,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,
    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // }

    // calcAge: function (birthYear) {
    //     return 2023 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2023 - this.birthYear; // creating new property
        return this.age;
    },

    getSummary: function () {

        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense === true ? 'a' : 'no'} driver license.`
    }
};

// calling the function 
console.log(sherman.calcAge(1998));
console.log(sherman['calcAge'](1998));

// this keyword used
console.log(sherman.calcAge());

console.log(sherman.age);
console.log(sherman.age);
console.log(sherman.age);

// Challenge
console.log(sherman.getSummary());
