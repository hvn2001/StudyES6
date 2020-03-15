const add = (a, b) => {
    return a + b;
};
console.log(add(5, 10));

const numbers = [2, 3, 4, 5, 6];
const doubled = numbers.map((n) => n * 2); // takes a callback function
// const doubled = numbers.map(n => n * 2);
// const doubled = numbers.map((n) => { return n * 2; });
console.log(doubled);

// this
const person = {
    name: 'Ryan',
    sayName() {
        console.log(`Hi I am ${this.name}`);
    }
};

person.sayName();

