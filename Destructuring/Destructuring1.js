let person = {
    name: "Ryan",
    age: 30,
    location: "Toronto"
};

let {age: personAge} = person;
console.log(personAge);

let {age, location: currentLocation} = person;

let key = 'age';
let {[key]: keyAge} = person;
console.log(keyAge);


let numbers = [10, 20, 30, 40, 50];
let [first, second, , fourth] = numbers;
console.log(first, second, fourth); // 1 2 4