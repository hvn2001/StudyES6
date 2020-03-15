function Plane() {
    this.wings = 2;
    this.speed = 100;
    this.altitude = 0;
}

Plane.prototype.fly = function () {
    this.altitude = 30000;
    console.log('Flying. Altitude:', this.altitude, 'Speed:', this.speed);
};

function JetFighter() {
    this.speed = 1000;
}

JetFighter.prototype = new Plane();

const jet = new JetFighter();
jet.fly();