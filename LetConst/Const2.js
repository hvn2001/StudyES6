const person = {
    name: 'Ryan Christiani'
}
Object.freeze(person);

// Try changing a field in frozen object
person.name = 'Instructor Ryan Christiani'
// Try adding something to a frozen object
person.age = 31;

// frozen object doesn't change
console.log(person);