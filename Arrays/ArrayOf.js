const numbersArray = Array.of(1, 2, 3, 4, 5, 6);
let number = numbersArray.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(number);