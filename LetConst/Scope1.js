var rocket = "Falcon9";

// rocket and it has been created outside of our launch function.
// Because it was created outside of the function
// it will be accessible inside of it via a closure

// When a function is defined in JavaScript
// it will capture the variables that were available to it
// and make them available inside of the function.
function launch() {
    console.log('Launching ' + rocket);
}

launch(); // Launching Falcon9