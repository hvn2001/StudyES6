function* myGenerator() {
    yield "Isn't";
    yield "this";
    yield "cool!";
}

const generatorValues = myGenerator();
console.log(generatorValues.next());
/*
{
    value: "Isn't", done: false
}
*/

console.log(generatorValues.next());
//{ value: 'this', done: false }

console.log(generatorValues.next());
//{ value: 'cool!', done: false }

console.log(generatorValues.next());
//{ value: undefined, done: true }


// Ex2

function* countUp(iterations) {
    let counter = 0;
    while (counter < iterations) {
        yield counter++;
    }
}

let generator1 = countUp(5);
for (let iteration of generator1) {
    console.log(iteration);
}
/*console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());*/
// 0
// 1
// 2
// 3
// 4