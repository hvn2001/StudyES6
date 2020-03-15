const shoppingList = new Set();

shoppingList.add('Milk');
shoppingList.add('Cheese');

const shoppingList2 = new Set(['Milk', 'Cheese']);

console.log(shoppingList.has('Milk')); //true
console.log(shoppingList2.has('Milk')); //true

// forEach()
shoppingList.forEach((value) => {
    console.log(value);
});

// entries()
for (let [value, sameValue] of shoppingList.entries()) {
    console.log(value, sameValue);
}

const shoppingEntries = shoppingList.entries();
console.log(shoppingEntries.next().value); //["Milk","Milk"]
console.log(shoppingEntries.next().value); //["Cheese","Cheese"]

// delete()
shoppingList.delete('Milk');
console.log(shoppingList.has('Milk')); //false

// Unique Values only
const shoppingItems = ['Milk', 'Bread', 'Cheese', 'Chips', 'Milk', 'Peaches'];
const uniqueShoppingItems = new Set(shoppingItems);

for (let item of uniqueShoppingItems.values()) {
    console.log(item);
}
//Milk
//Bread
//Cheese
//Chips
//Peaches

// WeakSet
// const weak = new WeakSet(['test']); //TypeError: Invalid value used in weak set
const weakObject = {};
const weakObjCollection = new WeakSet([weakObject]); //Will throw no error
console.log(weakObjCollection);