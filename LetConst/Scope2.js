// Variables created with the var keyword are function scoped
// because rocket exists only in the rocketName function
function rocketName() {
    var rocket = "Flacon9";
}

function launch() {
    console.log('Launching ' + rocket);
}

launch(); // Launching undefined