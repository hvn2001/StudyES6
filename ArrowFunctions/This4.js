const person = {
    name: 'Ryan',
    hobbies: ['Robots', 'Games', 'Internet'],

    showHobbies: function () {
        let self = this;
        this.hobbies.forEach(function (hobby) {
            console.log(`${self.name} likes ${hobby}`);
        });
    }
};

person.showHobbies();