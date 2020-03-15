let name = 'hvn';
const person = {
    name: 'Ryan',
    sayName: () => {
        console.log(`Hi I am ${this.name}`);
    }
};

person.sayName(); // Hi I am undefined

const home = {
    name: 'Bebi',
    person: {
        name: 'Ryan',
        sayName: () => {
            console.log(`Hi I am ${this.name}`);
        }
    }
}
home.person.sayName(); // Hi I am undefined ???