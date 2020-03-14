const nameArray = ['R', 'Y', 'A', 'N'];

console.log(nameArray.copyWithin(0, 2, 4)); //['A','Y','A','N'];


const nameArray2 = ['R', 'Y', 'A', 'N'];

console.log(nameArray2.copyWithin(0, 3, 4));


const nameArray3 = ['N', 'Y', 'A', 'N'];

console.log(nameArray3.copyWithin(-1, 1, 2));//["N", "Y", "A", "Y"]