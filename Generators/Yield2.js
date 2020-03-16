const locations = new Set(["Toronto", "Montreal", "New York"]);

function* locationGen() {
    yield* locations;
}

const myLocations = locationGen();

console.log(myLocations.next());
//{ value: 'Toronto', done: false }

console.log(myLocations.next());
//{ value: 'Montreal', done: false }
