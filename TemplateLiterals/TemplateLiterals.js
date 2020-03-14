// Multi-line
let myMultiString = 'Some text that I want\nOn two lines!';
console.log(myMultiString);

let myMultiString2 = `This will be
on two lines!`;
console.log(myMultiString2);

// Expressions
let name = `Ryan`;
console.log(`Hi my name is ${name}`);

let price = 19.99;
let tax = 1.13;
let total = `The total prices is ${price * tax}`;
console.log(total);

let person = {
    firstName: `Ryan`,
    lastName: `Christiani`,
    sayName() {
        return `Hi my name is ${this.firstName} ${this.lastName}`;
    }
};
console.log(person.sayName());