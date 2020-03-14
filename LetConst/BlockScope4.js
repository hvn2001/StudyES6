// If we declared a variable using var inside of a block statement,
// or anything with {} (like a conditional for example),
// it will make that variable available outside of that block!
if (true) {
    var name = "Ryan";
}

console.log(name); //Ryan