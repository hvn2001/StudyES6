function myTaggedLiteral(strings) {
    console.log(strings);
}

myTaggedLiteral`test`; //["test"]


function myTaggedLiteral2(strings, value) {
    console.log(strings, value);
}

let someText = 'Neat';
myTaggedLiteral2`test ${someText}`;
//["test", ""]
// "Neat"


function myTaggedLiteral3(strings, value, value2) {
    console.log(strings, value, value2);
}

let someText2 = 'Neat';
myTaggedLiteral3`test ${someText2} ${2 + 3}`;
//["test", ""]
// "Neat"
// 5