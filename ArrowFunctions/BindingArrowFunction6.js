const person = {
    city: 'Toronto'
}

const sayName = () => {
    console.log(this.city);
}

/*
can not bind the this context of an Arrow Function. Unlike a regular function, the arrow’s have a lexical scope,
so the scope is decided based on the call location. This means we can’t use methods like .call(), .apply() or .bind() to change it.
*/
sayName.call(person); //undefined