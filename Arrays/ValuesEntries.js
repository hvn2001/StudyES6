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

const studentValues = students.values();

console.log(studentValues.next().value);
/*
{
    name: 'Steve',
    course: 'History'
}
*/
console.log(studentValues.next().value);
/*
{
    name: 'Mary',
    course: 'Science'
}
*/