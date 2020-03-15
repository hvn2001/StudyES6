const person = new Map();
person.set('name', 'Ryan Christiani');
person.set('age', 31);

// has()
console.log(person.has('age')); //true
console.log(person.has('height')); //false

// forEach()
person.forEach((value, key) => {
    console.log(key, '->', value);

});

// key()
for (let key of person.keys()) {
    console.log(key);
}

const personKeys = person.keys();
console.log(personKeys.next().value); //name
console.log(personKeys.next().value); //age
console.log(personKeys.next().value); //undefined

// value
for (let value of person.values()) {
    console.log(value);
}

// entries()
for (let property of person.entries()) {
    console.log(property[0], '->', property[1]);
}
//["name", "Ryan Christiani"]
//["age", 30]

for (let [key, value] of person.entries()) {
    console.log(key, '->', value);
}

const personEntries = person.entries();
console.log(personEntries.next().value); //["name", "Ryan Christiani"]
console.log(personEntries.next().value); //["age", 30]

// delete()
// Before
console.log(person.get('name'));

person.delete('name'); //true

// After
console.log(person.get('name'));
person.set('name', 'Ryan Christiani');

// clear
// Before
console.log(person.get('name'));
console.log(person.get('age'));
person.clear();

// After
console.log(person.get('name'));
console.log(person.get('age'));

