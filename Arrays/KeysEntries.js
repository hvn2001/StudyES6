const students = [
    {
        name: 'Steve',
        course: 'History'
    },
    {
        name: 'Mary',
        course: 'Science'
    },
    {
        name: 'Lisa',
        course: 'Physics'
    },
    {
        name: 'Michelle',
        course: 'Physics'
    }
];

const studentKeys = students.keys();

console.log(studentKeys.next().value); //0
console.log(studentKeys.next().value); //1
console.log(studentKeys.next().value); //2

// entries()

const studentEntries = students.entries();

console.log(studentEntries.next().value);
/*
[0, {name: 'Steve',course: 'History'}]
*/
console.log(studentEntries.next().value);
/*
[1, {name: 'Mary',course: 'Science'}]
*/