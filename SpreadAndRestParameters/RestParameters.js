const person = {
    fullName: 'Ryan Christiani'
}

function sayName() {
    console.log(this.fullName);
}

sayName.call(person); //Ryan Christiani


const sum = function (...args) {
    return args.reduce(function (prev, curr) {
        return prev + curr
    });
};

console.log(sum(1, 2, 3, 4, 5)); // 15

let multiply = function (mul, ...args) {
    return args.map(function (num) {
        return mul * num;
    });
};

console.log(multiply(3, 14, 45, 6, 7, 8));//[42, 135, 18, 21, 24]