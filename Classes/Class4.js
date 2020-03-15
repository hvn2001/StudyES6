class Human {
    constructor() {
        this.height = 185;
        this.weight = 220;
        this.strength = 10;
        this.speed = 10;
        this.location = {
            x: 0,
            y: 0
        }
    }

    walk(x, y) {
        this.location.x += x;
        this.location.y += y;
        console.log('Walked to new location:', this.location.x, this.location.y);
    }
}

const human = new Human();
human.walk(10, 10);


// super()
class Warrior extends Human {
    constructor() {
        super();
        this.strength = 15;
    }
}

const conan = new Warrior();
conan.walk(100, 100);
console.log('Strength:', conan.strength);