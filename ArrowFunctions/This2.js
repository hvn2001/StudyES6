const person = {
    name: 'Ryan',
    hobbies: ['Robots', 'Games', 'Internet'],

    showHobbies: function () {
        this.hobbies.forEach(function (hobby) {
            console.log(`${this.name} likes ${hobby}`);
        });
    }
};
person.showHobbies();
// undefined likes Robots
// undefined likes Games
// undefined likes Internet