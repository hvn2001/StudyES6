const person = {
    name: 'Ryan',
    hobbies: ['Robots', 'Games', 'Internet'],

    showHobbies: function () {
        this.hobbies.forEach(hobby => {
            console.log(`${this.name} likes ${hobby}`);
        });
    }
};

person.showHobbies();