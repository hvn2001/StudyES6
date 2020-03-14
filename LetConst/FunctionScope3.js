// When we looked at var we saw that if we defined a variable inside of a function,
// it created the variable in there,
// and it is available inside of that function but not outside of it.

function setName() {
    var name = "Ryan";
}

console.log(name); //Undefined