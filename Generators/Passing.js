function* add() {
    let total = 0;
    while (true) {
        let value = yield;
        total += value;
        console.log(total)
    }
}

const addFn = add();
console.log(addFn.next()); //Used to call the generator up to the yield
console.log(addFn.next(2)); //2 will be passed to yield and added to total
console.log(addFn.next(2)); //2 will be added to 2
console.log(addFn.next(2)); //2 will be added to 4