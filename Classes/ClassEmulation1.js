function Plane() {
    this.wings = 2;
    this.speed = 100;
    this.altitude = 0;
}

Plane.prototype.fly = function () {
    this.altitude = 30000;
    console.log('Flying. Altitude:', this.altitude, 'Speed:', this.speed);
};

const myPlane = new Plane();
myPlane.fly();