function add() {
    console.log(arguments); // arguments is keyword
}

add(100, 200, 300); //{ '0': 100, '1': 200, '2': 300 }

function add2() {
    let args = Array.from(arguments);
    return args.reduce(function (num1, num2) {
        return num1 + num2
    }, 0);
}

let result = add2(100, 200, 300);
console.log(result); //600

let arrayFromString = Array.from('This is neat!');
console.log(arrayFromString); //["T", "h", "i", "s", " ", "i", "s", " ", "n", "e", "a", "t", "!"]

function double() {
    return Array.from(arguments, function (n) {
        return n * 2
    });
}

console.log(double(1, 2, 3)); //[2,4,6];