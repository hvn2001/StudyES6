let flower = {
    height: 10,
    colour: 'yellow',
    grow() {
        this.height += 5;
    }
}

// Shorthand properties
let firstName = "Ryan";
let lastName = "Christiani";

let person = {firstName, lastName};

console.log(person.firstName)

function slider() {
    let currentPosition = 0;

    function updatePosition(newPosition) {
        currentPosition = currentPostion + newPosition;
    }

    function resetPosition() {
        currentPosition = 0;
    }

    return {
        updatePosition,
        resetPosition
    };
}