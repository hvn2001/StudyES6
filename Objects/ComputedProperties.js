let keyName = 'firstName';
let person = {
    [keyName]: 'Ryan'
};

console.log(person)


let person2 = {
    ['first' + 'name']: 'Ryan'
};

console.log(person2)