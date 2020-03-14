const numbers0 = [4, 5, 6, 7];
console.log(...numbers0); // 4 5 6 7 --> Spread Operator


const numbers = [23, 46, 12, 63, 23];
console.log(Math.max(numbers)); // NaN

const total = Math.max.apply(null, numbers);
console.log(total); //63

const total2 = Math.max(...numbers);
console.log(total2);// 63

let numbers2 = [2, 34, 5];
let newNumbers = [74, 52, ...numbers2];
console.log(newNumbers);
// [74, 52, 2, 34, 5]

// HVN
const getMax = function (...nums) { // Rest Parameters
    // now nums is array
    return Math.max(...nums); // Spread Operator
};
console.log(getMax(23, 46, 12, 63, 23));