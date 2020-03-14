//.startsWith
const truth = "JavaScript is a really fun language!";
console.log(truth.match(/^JavaScript/)); //[ 'JavaScript',index: 0, input: 'JavaScript is a really fun language!' ]
console.log(truth.match(/^fun/)); //null

console.log(truth.startsWith("JavaScript")); //true
console.log(truth.startsWith("fun")); //false


// .endsWith
console.log(truth.match(/language!$/)); //['language!', index: 27 ....]
console.log(truth.match(/JavaScript$/)); //null

console.log(truth.endsWith('language!')); //true
console.log(truth.endsWith('JavaScript')); //false


// .includes
console.log(truth.match(/fun/g)); //["fun"]
console.log(truth.match(/a/g)); //["a", "a", "a", "a", "a", "a"]

console.log(truth.includes('fun')); //true
console.log(truth.includes('a')); //true
console.log(truth.includes('go')); //false

// Start position
console.log(truth.includes('fun')); //true
console.log(truth.includes('fun', 24)); //false

// .repeat
const nan = 'NaN'.repeat(6);
console.log(nan + ' BATMAN!'); //"NaNNaNNaNNaNNaNNaN BATMAN!"

// Unicode
console.log('\u{1F44D}'); //👍

// Regex
console.log("Man I really love 🚀, they are the best!".match(/\u{1F680}/u))
//[ '🚀',
//index: 18,
//input: 'Man I really love 🚀, they are the best!' ]