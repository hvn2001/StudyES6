const student = {
    id: '17UsJ290'
};

const person = new Map();
person.set(student, 'Ryan Christiani');
console.log(person.get(student)); //Ryan Christiani


const myFunction = () => {};
person.set(myFunction, 'A function used as a key');
console.log(person.get(myFunction)); //A function used as a key