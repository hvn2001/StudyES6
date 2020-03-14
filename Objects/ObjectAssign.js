let bat = {
    weight: 10,
    strength: 4,
    altitude: 0,
    fly(newAltitude) {
        this.altitude += newAltitdude;
    }
};

let greaterBatProps = {
    weight: 15,
    strength: 7
};

let greaterBat = Object.assign({}, bat, greaterBatProps);
console.log(greaterBat);


// Ex2
let person = {
    name: 'Ryan'
};

let person2 = person;

person2.name = "Erin";

console.log(person2.name); //Erin
console.log(person.name); //Erin

// Ex3
let people = {
    name: 'Ryan'
};

let people2 = Object.assign({}, people);

people2.name = "Erin";

console.log(people2.name); //Erin
console.log(people.name); //Ryan