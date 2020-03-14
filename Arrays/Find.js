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

const physicsStudent = students.find(function (student) {
    return student.course === 'Physics';
});

console.log(physicsStudent);
/*
{
    name: 'Lisa'
    course: 'Physics',
}
*/

const physicsStudent2 = students.filter(function (student) {
    return student.course === 'Physics';
});
console.log(physicsStudent2); //  ONE instance of the search


const physicsStudent3 = students.findIndex(function (student) {
    return student.course === 'Physics'; // multiples
});

console.log(physicsStudent3); //2