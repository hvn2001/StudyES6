let programmingLangauges = ['JavaScript', 'Ruby', 'GO'];

for (let language in programmingLangauges) {
    console.log('I really like ' + language);
}

// old-fashioned way.
for (let i = 0; i < programmingLangauges.length; i++) {
    console.log('I really like ' + programmingLangauges[i]);
}

for (let language of programmingLangauges) {
    console.log('I really like ' + language);
}
//"I really like JavaScript"
//"I really like Ruby"
//"I really like GO"

// Typed Arrays
let newTypedArray = new Int8Array(5);
newTypedArray[0] = 1;
newTypedArray[1] = 2;
newTypedArray[2] = 3;
newTypedArray[3] = 4;
newTypedArray[4] = 5;
newTypedArray[5] = 6; // set nothing

let newTypedArray2 = new Int8Array([1, 2, 3]);

console.log(newTypedArray);
console.log(newTypedArray2)