class Human {
    constructor(height = 185) {
        this.height = height;
    }
}

const ryan1 = new Human();
console.log(ryan1.height); //185

const ryan2 = new Human(190);
console.log(ryan2.height);